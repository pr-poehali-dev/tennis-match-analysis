// Shared atomic components used across tabs

export function OddsCell({ value, change }: { value: number; change: string }) {
  return (
    <span className={`font-mono px-2 py-0.5 rounded text-sm font-semibold ${
      change === "up" ? "neon-text-green" : change === "down" ? "neon-text-red" : "text-white/80"
    }`}>
      {value.toFixed(2)}
    </span>
  );
}

export function LiveBadge() {
  return (
    <span className="flex items-center gap-1.5 bg-red-900/40 border border-red-500/40 px-2 py-0.5 rounded text-xs font-display tracking-widest text-red-400 uppercase">
      <span className="live-dot" />
      LIVE
    </span>
  );
}

export function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width: `${value}%`,
          background: value >= 75 ? "#00FF87" : value >= 55 ? "#FFD600" : "#FF3D3D",
          boxShadow: `0 0 6px ${value >= 75 ? "#00FF8788" : value >= 55 ? "#FFD60088" : "#FF3D3D88"}`
        }}
      />
    </div>
  );
}
