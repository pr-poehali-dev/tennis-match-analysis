import Icon from "@/components/ui/icon";
import { MATCHES } from "./data";
import { LiveBadge } from "./Atoms";

export default function TabLive() {
  const liveMatches = MATCHES.filter(m => m.live);
  const upcomingMatches = MATCHES.filter(m => !m.live);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Трансляции</h1>
          <p className="text-sm text-white/40 mt-0.5">{liveMatches.length} матча в эфире прямо сейчас</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {liveMatches.map((match, idx) => (
          <div
            key={match.id}
            className="panel panel-hover rounded-xl overflow-hidden animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="relative aspect-video bg-court-mid diagonal-stripe flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-court-dark/50" />
              <div className="absolute top-3 left-3">
                <LiveBadge />
              </div>
              <div className="absolute top-3 right-3 font-mono text-sm text-white/60 bg-black/40 px-2 py-1 rounded">
                {match.time}
              </div>
              <button className="relative z-10 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all group">
                <Icon name="Play" size={22} className="text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
              <div className="absolute bottom-3 left-0 right-0 px-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-bold text-white">{match.p1.name}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    {match.p1.sets.map((s, i) => (
                      <span key={i} className={i === match.p1.sets.length - 1 ? "neon-text-green text-lg" : "text-white/50"}>
                        {s}:{match.p2.sets[i]}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-display font-bold text-white">{match.p2.name}</span>
                </div>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="text-xs font-display text-white/50 tracking-wide">{match.tournament} • {match.round}</div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold border border-court-border text-white/60 hover:text-white hover:border-white/30 transition-all">
                  Статистика
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold bg-neon-green text-court-dark hover:bg-neon-green/90 transition-all">
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        ))}

        {upcomingMatches.map((match) => (
          <div key={match.id} className="panel rounded-xl overflow-hidden opacity-70">
            <div className="relative aspect-video bg-court-mid/50 diagonal-stripe flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-display tracking-widest text-white/30 uppercase mb-2">Начало в</div>
                <div className="text-4xl font-display font-bold neon-text-yellow">{match.time}</div>
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-bold text-white">{match.p1.name}</span>
                  <span className="text-xs text-white/30 font-display">vs</span>
                  <span className="text-sm font-display font-bold text-white">{match.p2.name}</span>
                </div>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="text-xs font-display text-white/40">{match.tournament} • {match.round}</div>
              <button className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-all">
                Напомнить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
