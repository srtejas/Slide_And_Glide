import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Bell, 
  Volume2, 
  VolumeX, 
  Clock, 
  Timer, 
  AlertCircle, 
  Plus, 
  Smile, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  UserPlus, 
  Search, 
  Trash2, 
  Lock, 
  CheckSquare, 
  Square, 
  Sparkles,
  Zap,
  LayoutGrid,
  List
} from 'lucide-react';

const MAX_CAPACITY = 50;

export interface TrackedKid {
  id: string;
  name: string;
  totalDurationSeconds: number;
  secondsRemaining: number;
  isRunning: boolean;
  isCompleted: boolean;
  hasAlerted5Min: boolean;
  hasAlertedFinished: boolean;
  createdAt: number;
}

const PRESET_MINUTES = [30, 60, 90, 120];

export const PlaytimeToolsSection: React.FC = () => {
  // Kids list: defaults to EMPTY array (no pre-populated values as requested)
  const [kids, setKids] = useState<TrackedKid[]>(() => {
    try {
      const saved = localStorage.getItem('slide_glide_private_kids_tracker_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Local storage fallback
    }
    return []; // Clean empty default
  });

  // Sound settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [reminderAt5Min, setReminderAt5Min] = useState<boolean>(true);

  // New kid simple input form state
  const [childNameInput, setChildNameInput] = useState<string>('');
  const [selectedPresetMinutes, setSelectedPresetMinutes] = useState<number>(60);
  const [customMinutesInput, setCustomMinutesInput] = useState<string>('');
  const [batchCountInput, setBatchCountInput] = useState<string>('');
  const [showBatchTools, setShowBatchTools] = useState<boolean>(false);

  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterTab, setFilterTab] = useState<'all' | 'active' | 'completed'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Audio Context ref
  const audioContextRef = useRef<AudioContext | null>(null);

  const playChime = (type: 'warning' | 'finish') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (type === 'warning') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      } else if (type === 'finish') {
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.16);
          gain.gain.setValueAtTime(0.25, ctx.currentTime + idx * 0.16);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.16 + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.16);
          osc.stop(ctx.currentTime + idx * 0.16 + 0.5);
        });
      }
    } catch {
      // Audio autoplay policy fallback
    }
  };

  // Persist strictly to private browser localStorage
  useEffect(() => {
    try {
      localStorage.setItem('slide_glide_private_kids_tracker_v2', JSON.stringify(kids));
    } catch {
      // Ignore storage errors
    }
  }, [kids]);

  // Master timer interval for active timers
  useEffect(() => {
    const interval = setInterval(() => {
      setKids((prevKids) => {
        let hasWarning = false;
        let hasFinished = false;

        const updated = prevKids.map((kid) => {
          // If paused, completed, or at zero, do not tick down
          if (!kid.isRunning || kid.isCompleted || kid.secondsRemaining <= 0) {
            return kid;
          }

          const nextRemaining = kid.secondsRemaining - 1;
          let alerted5Min = kid.hasAlerted5Min;
          let alertedFinished = kid.hasAlertedFinished;
          let isStillRunning: boolean = kid.isRunning;
          let isNowCompleted: boolean = kid.isCompleted;

          // 5-minute warning alert
          if (reminderAt5Min && nextRemaining <= 300 && !alerted5Min) {
            alerted5Min = true;
            hasWarning = true;
          }

          // Session completion
          if (nextRemaining <= 0) {
            isStillRunning = false;
            isNowCompleted = true; // Auto-mark completed when timer reaches 0
            if (!alertedFinished) {
              alertedFinished = true;
              hasFinished = true;
            }
          }

          return {
            ...kid,
            secondsRemaining: Math.max(0, nextRemaining),
            isRunning: isStillRunning,
            isCompleted: isNowCompleted,
            hasAlerted5Min: alerted5Min,
            hasAlertedFinished: alertedFinished,
          };
        });

        if (hasFinished) {
          playChime('finish');
        } else if (hasWarning) {
          playChime('warning');
        }

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [reminderAt5Min, soundEnabled]);

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    if (h > 0) {
      return `${pad(h)}:${pad(m)}:${pad(s)}`;
    }
    return `${pad(m)}:${pad(s)}`;
  };

  // Add a single child timer
  const handleAddChild = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (kids.length >= MAX_CAPACITY) {
      alert(`Capacity limit of ${MAX_CAPACITY} kids reached.`);
      return;
    }

    const duration = customMinutesInput ? parseInt(customMinutesInput, 10) : selectedPresetMinutes;
    if (isNaN(duration) || duration <= 0) {
      alert('Please enter a valid playtime duration in minutes.');
      return;
    }

    const newId = `kid-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const assignedName = childNameInput.trim() || `Child #${kids.length + 1}`;

    const newKid: TrackedKid = {
      id: newId,
      name: assignedName,
      totalDurationSeconds: duration * 60,
      secondsRemaining: duration * 60,
      isRunning: true,
      isCompleted: false,
      hasAlerted5Min: false,
      hasAlertedFinished: false,
      createdAt: Date.now(),
    };

    setKids((prev) => [newKid, ...prev]);
    setChildNameInput('');
    setCustomMinutesInput('');
  };

  // Batch add multiple kids (e.g. for a birthday group, up to 50 total)
  const handleBatchAdd = () => {
    const count = parseInt(batchCountInput, 10);
    if (isNaN(count) || count <= 0) return;
    const availableSlots = MAX_CAPACITY - kids.length;
    const toAdd = Math.min(count, availableSlots);
    if (toAdd <= 0) {
      alert(`Limit of ${MAX_CAPACITY} kids reached.`);
      return;
    }

    const duration = customMinutesInput ? parseInt(customMinutesInput, 10) : selectedPresetMinutes;
    const durationMinutes = isNaN(duration) || duration <= 0 ? 60 : duration;

    const newBatch: TrackedKid[] = [];
    const baseName = childNameInput.trim() || 'Kid';

    for (let i = 1; i <= toAdd; i++) {
      const idx = kids.length + i;
      newBatch.push({
        id: `batch-${Date.now()}-${i}`,
        name: `${baseName} #${idx}`,
        totalDurationSeconds: durationMinutes * 60,
        secondsRemaining: durationMinutes * 60,
        isRunning: true,
        isCompleted: false,
        hasAlerted5Min: false,
        hasAlertedFinished: false,
        createdAt: Date.now(),
      });
    }

    setKids((prev) => [...newBatch, ...prev]);
    setChildNameInput('');
    setBatchCountInput('');
    setShowBatchTools(false);
  };

  // Toggle Completed checkbox for a child
  const toggleCompleted = (id: string) => {
    setKids((prev) =>
      prev.map((k) => {
        if (k.id === id) {
          const nextCompleted = !k.isCompleted;
          return {
            ...k,
            isCompleted: nextCompleted,
            isRunning: nextCompleted ? false : k.isRunning, // Pause timer if marked completed
            // If marking uncompleted and seconds was 0, give back full duration or keep remaining
            secondsRemaining: nextCompleted ? k.secondsRemaining : (k.secondsRemaining === 0 ? k.totalDurationSeconds : k.secondsRemaining)
          };
        }
        return k;
      })
    );
  };

  // Toggle play/pause
  const toggleRunning = (id: string) => {
    setKids((prev) =>
      prev.map((k) => {
        if (k.id === id) {
          // If completed, un-complete and restart
          if (k.isCompleted || k.secondsRemaining === 0) {
            return {
              ...k,
              isCompleted: false,
              isRunning: true,
              secondsRemaining: k.secondsRemaining === 0 ? k.totalDurationSeconds : k.secondsRemaining,
              hasAlertedFinished: false,
            };
          }
          return { ...k, isRunning: !k.isRunning };
        }
        return k;
      })
    );
  };

  // Extend duration (+15m or +30m)
  const handleExtend = (id: string, extraMinutes: number) => {
    const extraSec = extraMinutes * 60;
    setKids((prev) =>
      prev.map((k) => {
        if (k.id === id) {
          const nextRemaining = k.secondsRemaining + extraSec;
          return {
            ...k,
            totalDurationSeconds: k.totalDurationSeconds + extraSec,
            secondsRemaining: nextRemaining,
            isCompleted: false,
            isRunning: true,
            hasAlerted5Min: nextRemaining > 300 ? false : k.hasAlerted5Min,
            hasAlertedFinished: false,
          };
        }
        return k;
      })
    );
  };

  // Reset timer
  const handleReset = (id: string) => {
    setKids((prev) =>
      prev.map((k) => {
        if (k.id === id) {
          return {
            ...k,
            secondsRemaining: k.totalDurationSeconds,
            isRunning: false,
            isCompleted: false,
            hasAlerted5Min: false,
            hasAlertedFinished: false,
          };
        }
        return k;
      })
    );
  };

  // Delete child
  const handleDelete = (id: string) => {
    setKids((prev) => prev.filter((k) => k.id !== id));
  };

  // Bulk actions
  const handleClearAll = () => {
    if (window.confirm('Remove all kids from this timer list?')) {
      setKids([]);
    }
  };

  const handleMarkAllCompleted = () => {
    setKids((prev) => prev.map((k) => ({ ...k, isCompleted: true, isRunning: false })));
  };

  const handleClearCompletedOnly = () => {
    setKids((prev) => prev.filter((k) => !k.isCompleted));
  };

  // Stats calculation
  const totalCount = kids.length;
  const completedCount = kids.filter((k) => k.isCompleted).length;
  const activeCount = kids.filter((k) => !k.isCompleted && k.isRunning && k.secondsRemaining > 0).length;

  // Filtered kids
  const filteredKids = useMemo(() => {
    return kids.filter((k) => {
      if (searchQuery.trim() && !k.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (filterTab === 'active') return !k.isCompleted;
      if (filterTab === 'completed') return k.isCompleted;
      return true;
    });
  }, [kids, searchQuery, filterTab]);

  return (
    <section id="tools" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-violet-50/25 to-white relative overflow-hidden border-t border-slate-200">
      
      {/* Decorative ambient background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-violet-200/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-800 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-xs">
            <Timer className="w-4 h-4 text-violet-600" />
            Playtime Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
            Multi-Kid Playtime Tracker
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Track playtime with live countdowns, visual remaining-time progress bars, and one-click completed checkboxes. Track up to 50 kids at once.
          </p>

          {/* Privacy Notice Banner: Stored only for this person */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-900 text-slate-200 px-4 py-2 rounded-2xl text-xs font-medium shadow-sm border border-slate-800">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white font-bold">Private to your browser:</strong> These timers are visible only to you on this device and are saved locally.
            </span>
          </div>
        </div>

        {/* =========================================================================
            SIMPLE & INTUITIVE "ADD CHILD WITH TIMER" INTERFACE
            ========================================================================= */}
        <div className="bg-white rounded-3xl border border-violet-100 p-5 sm:p-7 shadow-lg mb-8">
          <form onSubmit={handleAddChild} className="space-y-4">
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              
              {/* Child's Name input */}
              <div className="relative flex-1">
                <Smile className="w-4 h-4 text-violet-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Enter Child Name / Wristband Tag (e.g. Aarav Patel or Blue #12)"
                  value={childNameInput}
                  onChange={(e) => setChildNameInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"
                />
              </div>

              {/* Duration Presets */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {PRESET_MINUTES.map((mins) => {
                  const isSelected = selectedPresetMinutes === mins && !customMinutesInput;
                  return (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => {
                        setSelectedPresetMinutes(mins);
                        setCustomMinutesInput('');
                      }}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap border ${
                        isSelected
                          ? 'bg-violet-600 text-white border-violet-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {mins}m
                    </button>
                  );
                })}

                {/* Custom Minutes Input */}
                <input
                  type="number"
                  min="1"
                  max="480"
                  placeholder="Custom m"
                  value={customMinutesInput}
                  onChange={(e) => setCustomMinutesInput(e.target.value)}
                  className="w-24 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Add Child Submit Button */}
              <button
                type="submit"
                disabled={kids.length >= MAX_CAPACITY}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-300 text-white font-black text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Add Child Timer</span>
              </button>

            </div>

            {/* Quick helper controls ribbon: sound alerts, capacity meter, and bulk batch adder */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-violet-600" />
                  Capacity: {totalCount} / {MAX_CAPACITY} kids
                </span>

                <button
                  type="button"
                  onClick={() => setShowBatchTools(!showBatchTools)}
                  className="text-violet-600 hover:text-violet-800 font-bold underline flex items-center gap-1"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  {showBatchTools ? 'Hide Batch Add' : 'Batch Add Multiple Kids'}
                </button>
              </div>

              {/* Audio and Warning Toggles */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setReminderAt5Min(!reminderAt5Min)}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold flex items-center gap-1 transition-all ${
                    reminderAt5Min ? 'bg-violet-50 text-violet-700 border-violet-200' : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}
                  title="Audible & visual warning at 5 minutes remaining"
                >
                  <Bell className="w-3 h-3 text-violet-600" />
                  5m Warning {reminderAt5Min ? 'ON' : 'OFF'}
                </button>

                <button
                  type="button"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-1.5 rounded-lg border transition-all ${
                    soundEnabled ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}
                  title={soundEnabled ? 'Audio chimes enabled' : 'Audio muted'}
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-600" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

            {/* Optional Batch Add Bar (for birthday parties or groups) */}
            {showBatchTools && (
              <div className="mt-3 p-4 bg-violet-50/60 rounded-2xl border border-violet-200 flex flex-wrap items-center gap-3 animate-in fade-in duration-150">
                <span className="text-xs font-bold text-violet-900">
                  Quick Group Add:
                </span>
                <input
                  type="number"
                  min="2"
                  max={Math.max(2, MAX_CAPACITY - kids.length)}
                  placeholder="Number of kids (e.g. 5 or 10)"
                  value={batchCountInput}
                  onChange={(e) => setBatchCountInput(e.target.value)}
                  className="w-48 px-3 py-1.5 bg-white border border-violet-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                <button
                  type="button"
                  onClick={handleBatchAdd}
                  className="px-4 py-1.5 bg-violet-700 hover:bg-violet-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  Add {batchCountInput || 'Multiple'} Kids at Once
                </button>
              </div>
            )}

          </form>
        </div>

        {/* =========================================================================
            TRACKED KIDS LIST & VISUAL PROGRESS BARS
            ========================================================================= */}
        {totalCount > 0 && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            
            {/* Search and Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative w-48 sm:w-60">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search child..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
                <button
                  type="button"
                  onClick={() => setFilterTab('all')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    filterTab === 'all' ? 'bg-white text-violet-700 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  All ({totalCount})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterTab('active')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    filterTab === 'active' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Active ({activeCount})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterTab('completed')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    filterTab === 'completed' ? 'bg-white text-slate-700 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Completed ({completedCount})
                </button>
              </div>
            </div>

            {/* Bulk actions and View Density */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'cards' ? 'bg-white shadow-xs text-violet-700' : 'text-slate-500'
                  }`}
                  title="Card Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'table' ? 'bg-white shadow-xs text-violet-700' : 'text-slate-500'
                  }`}
                  title="Compact Table View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearCompletedOnly}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Clear Completed ({completedCount})
                </button>
              )}

              <button
                type="button"
                onClick={handleClearAll}
                className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors rounded-lg"
                title="Clear all kids"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* EMPTY STATE (Clean default when no kids added yet) */}
        {totalCount === 0 ? (
          <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-10 sm:p-14 text-center">
            <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 font-['Fredoka',sans-serif]">
              No active child timers yet
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1.5 mb-6 leading-relaxed">
              Use the form above to add a child with a timer duration. Each timer will show a live countdown, progress bar, and a completed checkbox.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 bg-violet-50 px-4 py-2 rounded-xl border border-violet-100">
              <Sparkles className="w-4 h-4" />
              Enter child name and click &ldquo;Add Child Timer&rdquo; to begin
            </div>
          </div>
        ) : filteredKids.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs">
            No children match the current filter or search query.
          </div>
        ) : viewMode === 'cards' ? (
          /* =========================================================================
             CARD VIEW WITH PROMINENT VISUAL PROGRESS BAR & COMPLETED CHECKBOX
             ========================================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredKids.map((kid) => {
              // Remaining percentage calculation (relative to total session duration)
              const remainingFraction = kid.totalDurationSeconds > 0
                ? Math.max(0, Math.min(1, kid.secondsRemaining / kid.totalDurationSeconds))
                : 0;
              const remainingPercent = Math.round(remainingFraction * 100);

              const isEndingSoon = !kid.isCompleted && kid.secondsRemaining > 0 && kid.secondsRemaining <= 300;
              const isExpired = !kid.isCompleted && kid.secondsRemaining === 0;

              // Color scheme for the remaining progress bar
              let barColor = 'from-emerald-500 to-teal-500';
              let badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';

              if (kid.isCompleted) {
                barColor = 'from-slate-400 to-slate-500';
                badgeColor = 'bg-slate-100 text-slate-600 border-slate-200';
              } else if (isExpired) {
                barColor = 'from-rose-500 to-red-600';
                badgeColor = 'bg-rose-50 text-rose-700 border-rose-200';
              } else if (isEndingSoon) {
                barColor = 'from-amber-400 to-orange-500';
                badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
              } else if (remainingPercent < 30) {
                barColor = 'from-amber-500 to-orange-500';
              } else if (remainingPercent < 60) {
                barColor = 'from-violet-500 to-indigo-500';
              }

              return (
                <div
                  key={kid.id}
                  className={`rounded-2xl border p-5 transition-all shadow-xs flex flex-col justify-between ${
                    kid.isCompleted
                      ? 'bg-slate-50/80 border-slate-200 opacity-80'
                      : isEndingSoon
                      ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-300 animate-pulse'
                      : isExpired
                      ? 'bg-rose-50/80 border-rose-300 ring-2 ring-rose-200'
                      : 'bg-white border-slate-200 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Header: Name and Completed Checkbox */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-base font-black font-['Fredoka',sans-serif] truncate ${
                          kid.isCompleted ? 'text-slate-500 line-through' : 'text-slate-900'
                        }`}>
                          {kid.name}
                        </h4>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Total Session: {Math.round(kid.totalDurationSeconds / 60)} mins
                        </div>
                      </div>

                      {/* COMPLETED CHECKBOX (Clean, prominent option as requested) */}
                      <button
                        type="button"
                        onClick={() => toggleCompleted(kid.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                          kid.isCompleted
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-emerald-500 hover:bg-emerald-50/40'
                        }`}
                        title="Mark child session as completed"
                      >
                        {kid.isCompleted ? (
                          <>
                            <CheckSquare className="w-4 h-4 stroke-[2.5]" />
                            <span>Completed</span>
                          </>
                        ) : (
                          <>
                            <Square className="w-4 h-4 text-slate-400" />
                            <span>Mark Done</span>
                          </>
                        )}
                      </button>

                    </div>

                    {/* Digital Countdown Clock */}
                    <div className={`p-4 rounded-2xl text-center mb-3 border ${
                      kid.isCompleted
                        ? 'bg-slate-100 border-slate-200 text-slate-500'
                        : isEndingSoon
                        ? 'bg-amber-100 border-amber-300 text-amber-950'
                        : isExpired
                        ? 'bg-rose-100 border-rose-300 text-rose-900'
                        : 'bg-slate-900 border-slate-800 text-white shadow-inner'
                    }`}>
                      <div className="font-mono font-black text-3xl sm:text-4xl tracking-tight">
                        {formatTime(kid.secondsRemaining)}
                      </div>
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider mt-1 px-1">
                        <span className={kid.isCompleted || isEndingSoon || isExpired ? 'text-current' : 'text-slate-400'}>
                          {kid.isCompleted ? 'Session Complete' : isExpired ? 'Time Expired' : 'Time Remaining'}
                        </span>
                        <span className={kid.isCompleted || isEndingSoon || isExpired ? 'text-current' : 'text-violet-300 font-mono'}>
                          {remainingPercent}% Left
                        </span>
                      </div>
                    </div>

                    {/* =========================================================================
                        VISUAL PROGRESS BAR (Showing remaining time relative to total duration)
                        ========================================================================= */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>Progress</span>
                        </span>
                        <span>
                          {kid.isCompleted 
                            ? '100% Completed' 
                            : `${formatTime(kid.secondsRemaining)} remaining of ${Math.round(kid.totalDurationSeconds / 60)}m`}
                        </span>
                      </div>

                      {/* Bar Track & Fill */}
                      <div className="w-full bg-slate-200/80 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
                        <div
                          className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${barColor}`}
                          style={{
                            width: kid.isCompleted ? '100%' : `${remainingPercent}%`
                          }}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    
                    {/* Play / Pause toggle */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => toggleRunning(kid.id)}
                        disabled={kid.isCompleted}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                          kid.isRunning && !kid.isCompleted
                            ? 'bg-amber-500 hover:bg-amber-600 text-slate-900'
                            : 'bg-violet-600 hover:bg-violet-700 disabled:bg-slate-200 text-white'
                        }`}
                      >
                        {kid.isRunning && !kid.isCompleted ? (
                          <>
                            <Pause className="w-3.5 h-3.5" /> Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5" /> Start
                          </>
                        )}
                      </button>

                      {/* Quick Extend buttons */}
                      <button
                        type="button"
                        onClick={() => handleExtend(kid.id, 15)}
                        className="px-2.5 py-1.5 bg-slate-100 hover:bg-violet-100 hover:text-violet-700 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                        title="Extend 15 mins"
                      >
                        +15m
                      </button>

                      <button
                        type="button"
                        onClick={() => handleExtend(kid.id, 30)}
                        className="px-2.5 py-1.5 bg-slate-100 hover:bg-violet-100 hover:text-violet-700 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                        title="Extend 30 mins"
                      >
                        +30m
                      </button>
                    </div>

                    {/* Reset & Delete */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleReset(kid.id)}
                        className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                        title="Reset timer to full duration"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(kid.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                        title="Delete child"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* =========================================================================
             COMPACT TABLE VIEW (With progress bar & completed checkbox)
             ========================================================================= */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4 w-12 text-center">Done</th>
                    <th className="py-3 px-4">Child Name</th>
                    <th className="py-3 px-4 w-44">Time Remaining</th>
                    <th className="py-3 px-4 min-w-[180px]">Remaining Progress</th>
                    <th className="py-3 px-4">Extend</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredKids.map((kid) => {
                    const remainingFraction = kid.totalDurationSeconds > 0
                      ? Math.max(0, Math.min(1, kid.secondsRemaining / kid.totalDurationSeconds))
                      : 0;
                    const remainingPercent = Math.round(remainingFraction * 100);

                    return (
                      <tr
                        key={kid.id}
                        className={`hover:bg-slate-50/70 transition-colors ${
                          kid.isCompleted ? 'bg-slate-50/60 opacity-70' : ''
                        }`}
                      >
                        {/* Completed Checkbox */}
                        <td className="py-3 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => toggleCompleted(kid.id)}
                            className="text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer"
                            title={kid.isCompleted ? 'Mark uncompleted' : 'Mark completed'}
                          >
                            {kid.isCompleted ? (
                              <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                            ) : (
                              <Square className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                            )}
                          </button>
                        </td>

                        {/* Child Name */}
                        <td className="py-3 px-4 font-bold text-slate-800">
                          <span className={kid.isCompleted ? 'line-through text-slate-400' : ''}>
                            {kid.name}
                          </span>
                          <span className="block text-[10px] text-slate-400 font-normal">
                            Total: {Math.round(kid.totalDurationSeconds / 60)}m
                          </span>
                        </td>

                        {/* Remaining Time Digit */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className={`font-mono font-black text-sm px-2.5 py-1 rounded-md inline-block ${
                            kid.isCompleted
                              ? 'bg-slate-100 text-slate-500'
                              : kid.secondsRemaining <= 300 && kid.secondsRemaining > 0
                              ? 'bg-amber-200 text-amber-950 animate-pulse'
                              : kid.secondsRemaining === 0
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-slate-900 text-white'
                          }`}>
                            {formatTime(kid.secondsRemaining)}
                          </span>
                        </td>

                        {/* Visual Progress Bar */}
                        <td className="py-3 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                              <span>{kid.isCompleted ? 'Completed' : `${remainingPercent}% Left`}</span>
                              <span>{Math.round(kid.totalDurationSeconds / 60)}m total</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${
                                  kid.isCompleted
                                    ? 'bg-slate-400'
                                    : remainingPercent <= 20
                                    ? 'bg-amber-500'
                                    : 'bg-emerald-500'
                                }`}
                                style={{
                                  width: kid.isCompleted ? '100%' : `${remainingPercent}%`
                                }}
                              />
                            </div>
                          </div>
                        </td>

                        {/* Extend Buttons */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleExtend(kid.id, 15)}
                              className="px-2 py-1 bg-slate-100 hover:bg-violet-100 hover:text-violet-700 rounded-lg text-slate-700 font-bold text-[11px]"
                            >
                              +15m
                            </button>
                            <button
                              type="button"
                              onClick={() => handleExtend(kid.id, 30)}
                              className="px-2 py-1 bg-slate-100 hover:bg-violet-100 hover:text-violet-700 rounded-lg text-slate-700 font-bold text-[11px]"
                            >
                              +30m
                            </button>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() => toggleRunning(kid.id)}
                              disabled={kid.isCompleted}
                              className={`p-1.5 rounded-lg text-xs font-bold ${
                                kid.isRunning && !kid.isCompleted
                                  ? 'bg-amber-500 text-slate-900'
                                  : 'bg-violet-600 disabled:bg-slate-200 text-white'
                              }`}
                            >
                              {kid.isRunning && !kid.isCompleted ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                            </button>

                            <button
                              type="button"
                              onClick={() => handleReset(kid.id)}
                              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
                              title="Reset"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDelete(kid.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CCTV & Cleaned Every Day Reminder */}
        <div className="mt-12 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-slate-600">
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block">CCTV Monitored Arena</span>
              Safe &amp; supervised indoor play areas for complete peace of mind.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block">Cleaned Every Day</span>
              All ball pits, slides, and soft mats are sanitized daily.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-2.5">
            <Zap className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block">Socks Mandatory</span>
              Socks mandatory for all children &amp; supervising adults.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
