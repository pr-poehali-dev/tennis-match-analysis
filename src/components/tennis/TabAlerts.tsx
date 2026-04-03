import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NOTIFICATIONS } from "./data";

export default function TabAlerts() {
  const [readNotifs, setReadNotifs] = useState<number[]>([]);
  const unread = NOTIFICATIONS.filter(n => !n.read && !readNotifs.includes(n.id)).length;

  return (
    <div className="animate-fade-in max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Уведомления</h1>
          <p className="text-sm text-white/40 mt-0.5">{unread} непрочитанных</p>
        </div>
        <button
          className="text-xs text-neon-green/70 hover:text-neon-green transition-colors font-display"
          onClick={() => setReadNotifs(NOTIFICATIONS.map(n => n.id))}
        >
          Прочитать все
        </button>
      </div>

      <div className="space-y-2">
        {NOTIFICATIONS.map((notif, idx) => {
          const isRead = notif.read || readNotifs.includes(notif.id);
          return (
            <div
              key={notif.id}
              className={`panel panel-hover rounded-xl p-4 flex items-start gap-4 cursor-pointer transition-all animate-fade-in ${
                !isRead ? "border-l-2 border-l-neon-green" : "opacity-60"
              }`}
              style={{ animationDelay: `${idx * 0.06}s` }}
              onClick={() => setReadNotifs(prev => [...prev, notif.id])}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                !isRead ? "bg-white/10" : "bg-white/5"
              }`}>
                <Icon name={notif.icon} size={18} className={notif.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-sm font-display font-semibold ${!isRead ? "text-white" : "text-white/60"}`}>
                    {notif.title}
                  </span>
                  <span className="text-xs text-white/30 whitespace-nowrap font-mono shrink-0">{notif.time}</span>
                </div>
                <p className="text-xs text-white/50 mt-0.5 leading-relaxed">{notif.text}</p>
              </div>
              {!isRead && (
                <div className="w-2 h-2 rounded-full bg-neon-green mt-1 shrink-0" style={{ boxShadow: "0 0 6px #00FF87" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Alert Settings */}
      <div className="mt-6 panel rounded-xl p-4">
        <h3 className="text-sm font-display font-semibold text-white/70 mb-3 tracking-wide uppercase">Настройки оповещений</h3>
        <div className="space-y-3">
          {[
            { label: "Изменение коэффициентов", icon: "TrendingUp", enabled: true },
            { label: "Начало матчей LIVE", icon: "Radio", enabled: true },
            { label: "Подтверждение прогнозов", icon: "Target", enabled: false },
            { label: "Травмы игроков", icon: "AlertCircle", enabled: true },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name={s.icon} size={14} className="text-white/40" />
                <span className="text-sm text-white/60">{s.label}</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-all cursor-pointer ${
                s.enabled ? "bg-neon-green/30 border border-neon-green/50" : "bg-white/10 border border-white/20"
              }`}>
                <div className={`w-4 h-4 rounded-full mt-0.5 transition-all ${
                  s.enabled ? "translate-x-5 bg-neon-green" : "translate-x-0.5 bg-white/40"
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
