import Icon from "@/components/ui/icon";
import { NAV_ITEMS, TICKER_ITEMS } from "./data";

interface HeaderProps {
  activeTab: string;
  unread: number;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, unread, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-court-border bg-court-dark/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-display font-bold tracking-tight neon-text-green">TENNIS</span>
            <span className="text-2xl font-display font-light text-black/60 tracking-tight">EDGE</span>
            <span className="ml-2 hidden sm:inline-block px-2 py-0.5 text-xs font-display tracking-widest border border-neon-green/30 text-neon-green/70 rounded uppercase">
              Beta
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40 font-mono hidden sm:block">
              {new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })} МСК
            </span>
            <button
              className="relative p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => onTabChange("alerts")}
            >
              <Icon name="Bell" size={18} className="text-white/60" />
              {unread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                  {unread}
                </span>
              )}
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Icon name="Settings" size={18} className="text-white/60" />
            </button>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-court-border bg-court-mid/50 overflow-hidden">
        <div className="flex items-center">
          <div className="shrink-0 px-3 py-1.5 bg-neon-green/10 border-r border-court-border">
            <span className="text-xs font-display font-semibold neon-text-green tracking-widest">LIVE</span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex animate-ticker whitespace-nowrap">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="inline-block px-6 text-xs text-white/60 py-1.5 border-r border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="border-b border-court-border bg-court-dark/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-0">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`relative flex items-center gap-2 px-5 py-3.5 text-sm font-display tracking-wide transition-all ${
                  activeTab === item.id
                    ? "text-neon-green"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                <Icon name={item.icon} size={15} />
                <span className="hidden sm:inline">{item.label}</span>
                {item.id === "alerts" && unread > 0 && (
                  <span className="ml-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                    {unread}
                  </span>
                )}
                {activeTab === item.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-green"
                    style={{ boxShadow: "0 0 8px #00FF87" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}