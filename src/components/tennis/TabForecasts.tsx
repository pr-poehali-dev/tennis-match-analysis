import Icon from "@/components/ui/icon";
import { MATCHES } from "./data";
import { OddsCell, LiveBadge, ConfidenceBar } from "./Atoms";

export default function TabForecasts() {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Прогнозы</h1>
          <p className="text-sm text-gray-400 mt-0.5">ИИ-анализ матчей в реальном времени</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
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
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2">
              {match.live ? <LiveBadge /> : (
                <span className="text-xs text-gray-400 font-display tracking-widest uppercase">Предстоящий</span>
              )}
              <span className="text-xs text-gray-300">•</span>
              <span className="text-xs text-gray-600 font-display">{match.tournament}</span>
              <span className="text-xs text-gray-300">•</span>
              <span className="text-xs text-gray-400">{match.round}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-mono">{match.surface}</span>
              {match.live && <span className="text-xs font-mono text-gray-400">{match.time}</span>}
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
                    <div className="font-display font-semibold text-gray-900 text-sm">{match.p1.name}</div>
                    <div className="text-xs text-gray-400">Рейтинг #{match.p1.rank}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {match.p1.form.map((f, i) => (
                    <span key={i} className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                      f === "W" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-500"
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
                          <div key={i} className={`font-mono text-xl font-bold ${i === match.p1.sets.length - 1 ? "neon-text-green text-2xl" : "text-gray-400"}`}>{s}</div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {match.p2.sets.map((s, i) => (
                          <div key={i} className={`font-mono text-xl font-bold ${i === match.p2.sets.length - 1 ? "text-gray-700" : "text-gray-300"}`}>{s}</div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">{match.set}-й сет</div>
                  </div>
                ) : (
                  <div className="text-gray-300 font-display text-2xl font-bold">vs</div>
                )}
              </div>

              {/* Player 2 */}
              <div className="space-y-2 items-end flex flex-col">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <span className="text-xl">{match.p2.flag}</span>
                  <div className="text-right">
                    <div className="font-display font-semibold text-gray-900 text-sm">{match.p2.name}</div>
                    <div className="text-xs text-gray-400">Рейтинг #{match.p2.rank}</div>
                  </div>
                </div>
                <div className="flex gap-1 flex-row-reverse">
                  {match.p2.form.map((f, i) => (
                    <span key={i} className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                      f === "W" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-500"
                    }`}>{f}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Forecast */}
            <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={13} className="text-green-600" />
                  <span className="text-xs font-display font-semibold text-green-700 tracking-wide">ИИ ПРОГНОЗ</span>
                </div>
                <span className="text-xs font-mono font-bold text-green-700">{match.forecast.confidence}%</span>
              </div>
              <ConfidenceBar value={match.forecast.confidence} />
              <p className="text-xs text-gray-500 mt-2">
                <span className="text-gray-800 font-medium">
                  {match.forecast.winner === "p1" ? match.p1.name : match.p2.name}
                </span>
                {" "}{match.forecast.detail}
              </p>
            </div>

            {/* Odds + CTA */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">{match.p1.name.split(" ")[1]}</div>
                  <OddsCell value={match.odds.p1} change="none" />
                </div>
                <div className="text-xs text-gray-300">—</div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">{match.p2.name.split(" ")[1]}</div>
                  <OddsCell value={match.odds.p2} change="none" />
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display font-semibold tracking-wide text-white bg-green-600 hover:bg-green-700 transition-all">
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
