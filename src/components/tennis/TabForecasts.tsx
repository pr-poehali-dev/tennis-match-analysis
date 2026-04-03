import Icon from "@/components/ui/icon";
import { MATCHES } from "./data";
import { OddsCell, LiveBadge, ConfidenceBar } from "./Atoms";

export default function TabForecasts() {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Прогнозы</h1>
          <p className="text-sm text-white/40 mt-0.5">ИИ-анализ матчей в реальном времени</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/40">
          <Icon name="RefreshCw" size={13} />
          <span>Обновлено 1 мин назад</span>
        </div>
      </div>

      {MATCHES.map((match, idx) => (
        <div
          key={match.id}
          className="panel panel-hover rounded-xl overflow-hidden animate-fade-in"
          style={{ animationDelay: `${idx * 0.08}s` }}
        >
          {/* Match Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-court-border bg-court-mid/30">
            <div className="flex items-center gap-2">
              {match.live ? <LiveBadge /> : (
                <span className="text-xs text-white/40 font-display tracking-widest uppercase">Предстоящий</span>
              )}
              <span className="text-xs text-white/40">•</span>
              <span className="text-xs text-white/60 font-display">{match.tournament}</span>
              <span className="text-xs text-white/30">•</span>
              <span className="text-xs text-white/40">{match.round}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/50 font-mono">{match.surface}</span>
              {match.live && <span className="text-xs font-mono text-white/50">{match.time}</span>}
            </div>
          </div>

          {/* Players */}
          <div className="p-4">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
              {/* Player 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{match.p1.flag}</span>
                  <div>
                    <div className="font-display font-semibold text-white text-sm">{match.p1.name}</div>
                    <div className="text-xs text-white/40">Рейтинг #{match.p1.rank}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {match.p1.form.map((f, i) => (
                    <span key={i} className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                      f === "W" ? "bg-neon-green/20 text-neon-green" : "bg-red-500/20 text-red-400"
                    }`}>{f}</span>
                  ))}
                </div>
              </div>

              {/* Score */}
              <div className="text-center">
                {match.live ? (
                  <div className="space-y-1">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="space-y-1">
                        {match.p1.sets.map((s, i) => (
                          <div key={i} className={`font-mono text-xl font-bold ${i === match.p1.sets.length - 1 ? "neon-text-green text-2xl" : "text-white/60"}`}>{s}</div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {match.p2.sets.map((s, i) => (
                          <div key={i} className={`font-mono text-xl font-bold ${i === match.p2.sets.length - 1 ? "text-white/80" : "text-white/40"}`}>{s}</div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-white/40 font-mono">{match.set}-й сет</div>
                  </div>
                ) : (
                  <div className="text-white/30 font-display text-2xl font-bold">vs</div>
                )}
              </div>

              {/* Player 2 */}
              <div className="space-y-2 items-end flex flex-col">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <span className="text-xl">{match.p2.flag}</span>
                  <div className="text-right">
                    <div className="font-display font-semibold text-white text-sm">{match.p2.name}</div>
                    <div className="text-xs text-white/40">Рейтинг #{match.p2.rank}</div>
                  </div>
                </div>
                <div className="flex gap-1 flex-row-reverse">
                  {match.p2.form.map((f, i) => (
                    <span key={i} className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                      f === "W" ? "bg-neon-green/20 text-neon-green" : "bg-red-500/20 text-red-400"
                    }`}>{f}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Forecast */}
            <div className="mt-4 p-3 rounded-lg bg-neon-green/5 border border-neon-green/15">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={13} className="text-neon-green" />
                  <span className="text-xs font-display font-semibold neon-text-green tracking-wide">ИИ ПРОГНОЗ</span>
                </div>
                <span className="text-xs font-mono font-bold neon-text-green">{match.forecast.confidence}%</span>
              </div>
              <ConfidenceBar value={match.forecast.confidence} />
              <p className="text-xs text-white/50 mt-2">
                <span className="text-white/80 font-medium">
                  {match.forecast.winner === "p1" ? match.p1.name : match.p2.name}
                </span>
                {" "}{match.forecast.detail}
              </p>
            </div>

            {/* Odds + CTA */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-xs text-white/40 mb-1">{match.p1.name.split(" ")[1]}</div>
                  <OddsCell value={match.odds.p1} change="none" />
                </div>
                <div className="text-xs text-white/20">—</div>
                <div className="text-center">
                  <div className="text-xs text-white/40 mb-1">{match.p2.name.split(" ")[1]}</div>
                  <OddsCell value={match.odds.p2} change="none" />
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display font-semibold tracking-wide text-court-dark bg-neon-green hover:bg-neon-green/90 transition-all">
                Детальный анализ
                <Icon name="ArrowRight" size={13} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
