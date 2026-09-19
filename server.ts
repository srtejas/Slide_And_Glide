import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();

  // Health check endpoints for Cloud Run deployment and container health probes
  const healthHandler = (req: express.Request, res: express.Response) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  };

  app.get("/api/health", healthHandler);
  app.get("/health", healthHandler);
  app.get("/healthz", healthHandler);
  app.get("/_health", healthHandler);

  // Vite middleware for development; static file server for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    const devPort = 3000;
    app.listen(devPort, "0.0.0.0", () => {
      console.log(`Dev server running on http://0.0.0.0:${devPort}`);
    });
  } else {
    // In production, locate static files directory
    const distPath = fs.existsSync(path.join(process.cwd(), "dist"))
      ? path.join(process.cwd(), "dist")
      : path.resolve(__dirname);

    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });

    // In Cloud Run production, Cloud Run specifies the listening port via PORT (defaults to 8080)
    const primaryPort = Number(process.env.PORT) || 8080;

    const server = app.listen(primaryPort, "0.0.0.0", () => {
      console.log(`Production server listening on http://0.0.0.0:${primaryPort}`);
    });

    // Also attempt listening on port 3000 if different from primary port, to satisfy any 3000 health probe
    if (primaryPort !== 3000) {
      try {
        const secondaryServer = app.listen(3000, "0.0.0.0", () => {
          console.log(`Secondary listener active on http://0.0.0.0:3000`);
        });
        secondaryServer.on("error", (err: unknown) => {
          console.log("Secondary port 3000 skipped or unavailable:", (err as Error)?.message);
        });
      } catch (e) {
        // Safe to ignore if port 3000 is unavailable
      }
    }

    // Graceful termination for Cloud Run container lifecycle
    process.on("SIGTERM", () => {
      console.log("Received SIGTERM, shutting down gracefully...");
      server.close(() => {
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      console.log("Received SIGINT, shutting down gracefully...");
      server.close(() => {
        process.exit(0);
      });
    });
  }
}

startServer();

