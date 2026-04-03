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
          <h1 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Трансляции</h1>
          <p className="text-sm text-gray-400 mt-0.5">{liveMatches.length} матча в эфире прямо сейчас</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {liveMatches.map((match, idx) => (
          <div
            key={match.id}
            className="panel panel-hover rounded-xl overflow-hidden animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="relative aspect-video bg-gray-100 diagonal-stripe flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60" />
              <div className="absolute top-3 left-3">
                <LiveBadge />
              </div>
              <div className="absolute top-3 right-3 font-mono text-sm text-white bg-black/50 px-2 py-1 rounded">
                {match.time}
              </div>
              <button className="relative z-10 w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all group">
                <Icon name="Play" size={22} className="text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
              <div className="absolute bottom-3 left-0 right-0 px-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-bold text-white">{match.p1.name}</span>
                  <div className="flex gap-3 font-mono font-bold">
                    {match.p1.sets.map((s, i) => (
                      <span key={i} className={i === match.p1.sets.length - 1 ? "text-green-400 text-lg" : "text-white/60"}>
                        {s}:{match.p2.sets[i]}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-display font-bold text-white">{match.p2.name}</span>
                </div>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="text-xs font-display text-gray-500 tracking-wide">{match.tournament} • {match.round}</div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all">
                  Статистика
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold bg-green-600 text-white hover:bg-green-700 transition-all">
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        ))}

        {upcomingMatches.map((match) => (
          <div key={match.id} className="panel rounded-xl overflow-hidden opacity-70">
            <div className="relative aspect-video bg-gray-100 diagonal-stripe flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-display tracking-widest text-gray-400 uppercase mb-2">Начало в</div>
                <div className="text-4xl font-display font-bold text-amber-500">{match.time}</div>
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-bold text-gray-700">{match.p1.name}</span>
                  <span className="text-xs text-gray-400 font-display">vs</span>
                  <span className="text-sm font-display font-bold text-gray-700">{match.p2.name}</span>
                </div>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="text-xs font-display text-gray-400">{match.tournament} • {match.round}</div>
              <button className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold border border-amber-300 text-amber-600 hover:bg-amber-50 transition-all">
                Напомнить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
