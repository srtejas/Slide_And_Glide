import React, { useState, useRef } from 'react';
import { Upload, Check, AlertCircle, Image as ImageIcon, X } from 'lucide-react';

interface LogoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLogoUrl: string;
}

export const LogoUploaderModal: React.FC<LogoUploaderModalProps> = ({
  isOpen,
  onClose,
  currentLogoUrl,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (PNG, JPG, SVG, WebP)');
      return;
    }

    setErrorMessage(null);
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyLogo = async () => {
    if (!previewUrl) return;

    setIsUploading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/upload-logo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dataBase64: previewUrl,
          filename: selectedFile?.name || 'logo.png',
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update logo');
      }

      setUploadSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error uploading file');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-violet-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-700">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 font-['Fredoka',sans-serif]">
              Use Exact Brand Logo
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Upload your raw PNG logo to replace all site logo &amp; favicon assets
            </p>
          </div>
        </div>

        {/* Current vs New Preview */}
        <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="text-center">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Current Logo
            </span>
            <div className="w-24 h-24 mx-auto rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 shadow-2xs">
              <img
                src={currentLogoUrl}
                alt="Current Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <span className="text-[11px] font-bold text-violet-600 uppercase tracking-wider block mb-1.5">
              New Upload
            </span>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-24 h-24 mx-auto rounded-xl bg-violet-50/50 border-2 border-dashed border-violet-300 hover:border-violet-500 flex flex-col items-center justify-center p-2 cursor-pointer transition-colors"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="New Logo Preview"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center text-violet-500">
                  <ImageIcon className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-bold leading-tight">Choose File</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/svg+xml"
          onChange={handleFileChange}
          className="hidden"
        />

        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {uploadSuccess ? (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center justify-center gap-2">
            <Check className="w-5 h-5 text-emerald-600" />
            <span>Logo updated! Reloading website...</span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
            >
              {selectedFile ? 'Change File' : 'Browse Files'}
            </button>

            <button
              type="button"
              disabled={!previewUrl || isUploading}
              onClick={handleApplyLogo}
              className="flex-1 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <span>Applying...</span>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Use This Logo</span>
                </>
              )}
            </button>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400">
            Applying replaces <code className="text-slate-600 font-mono">/logo.png</code>, <code className="text-slate-600 font-mono">/favicon.png</code>, and navbar/hero logos instantly.
          </p>
        </div>
      </div>
    </div>
  );
};
