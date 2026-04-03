import Icon from "@/components/ui/icon";
import { STATS_PLAYERS, ODDS_DATA } from "./data";
import { OddsCell } from "./Atoms";

export default function TabStats() {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Статистика</h1>
          <p className="text-sm text-white/40 mt-0.5">Топ игроки сезона 2025</p>
        </div>
        <div className="flex gap-2">
          {["АТР", "WTA"].map(t => (
            <button key={t} className={`px-3 py-1.5 rounded-lg text-xs font-display font-semibold tracking-wide transition-all ${
              t === "АТР" ? "bg-neon-green text-court-dark" : "border border-court-border text-white/50 hover:text-white/80"
            }`}>{t}</button>
          ))}
        </div>
      </div>

      {/* Players Table */}
      <div className="panel rounded-xl overflow-hidden">
        <div className="grid grid-cols-[40px_1fr_80px_80px_80px_80px_100px] gap-0 border-b border-court-border px-4 py-2.5 text-xs font-display font-semibold tracking-widest text-white/30 uppercase">
          <div>#</div>
          <div>Игрок</div>
          <div className="text-center">Эйсы/м</div>
          <div className="text-center">1-я подача</div>
          <div className="text-center">Виннеры</div>
          <div className="text-center">Очки</div>
          <div className="text-center">Рейтинг</div>
        </div>
        {STATS_PLAYERS.map((player, i) => (
          <div key={i} className="grid grid-cols-[40px_1fr_80px_80px_80px_80px_100px] gap-0 px-4 py-3.5 border-b border-court-border/50 last:border-0 hover:bg-white/[0.02] transition-colors group">
            <div className="text-white/30 font-mono text-sm self-center">{i + 1}</div>
            <div className="flex items-center gap-2 self-center">
              <span className="text-lg">{player.flag}</span>
              <div>
                <div className="font-display font-semibold text-white text-sm">{player.name}</div>
                <div className="text-xs text-white/30">Рейтинг #{player.rank}</div>
              </div>
            </div>
            <div className="text-center self-center font-mono text-sm text-white/70">{player.ace}</div>
            <div className="text-center self-center font-mono text-sm text-white/70">{player.first}</div>
            <div className="text-center self-center font-mono text-sm text-white/70">{player.winners}</div>
            <div className="text-center self-center font-mono text-sm neon-text-green font-semibold">{player.points.toLocaleString()}</div>
            <div className="text-center self-center">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-neon-green/70 rounded-full" style={{ width: `${(player.points / 10000) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Odds Table */}
      <div className="mt-6">
        <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">Котировки букмекеров</h2>
        <div className="panel rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_100px_90px_90px_60px] gap-0 border-b border-court-border px-4 py-2.5 text-xs font-display font-semibold tracking-widest text-white/30 uppercase">
            <div>Матч</div>
            <div className="text-center">Букмекер</div>
            <div className="text-center">П1</div>
            <div className="text-center">П2</div>
            <div className="text-center">Тренд</div>
          </div>
          {ODDS_DATA.map((row, i) => (
            <div key={i} className="grid grid-cols-[1fr_100px_90px_90px_60px] gap-0 px-4 py-3 border-b border-court-border/50 last:border-0 hover:bg-white/[0.02] transition-colors">
              <div className="text-sm text-white/80 font-medium self-center">{row.match}</div>
              <div className="text-center text-xs text-white/40 font-mono self-center">{row.book}</div>
              <div className="text-center self-center">
                <OddsCell value={row.p1} change={row.change === "up" ? "up" : "none"} />
              </div>
              <div className="text-center self-center">
                <OddsCell value={row.p2} change={row.change === "down" ? "down" : "none"} />
              </div>
              <div className="text-center self-center">
                {row.change === "up" && <Icon name="TrendingUp" size={14} className="neon-text-green mx-auto" />}
                {row.change === "down" && <Icon name="TrendingDown" size={14} className="neon-text-red mx-auto" />}
                {row.change === "none" && <Icon name="Minus" size={14} className="text-white/30 mx-auto" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
