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
          <h1 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Уведомления</h1>
          <p className="text-sm text-gray-400 mt-0.5">{unread} непрочитанных</p>
        </div>
        <button
          className="text-xs text-green-600 hover:text-green-700 transition-colors font-display"
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
                !isRead ? "border-l-2 border-l-green-500" : "opacity-60"
              }`}
              style={{ animationDelay: `${idx * 0.06}s` }}
              onClick={() => setReadNotifs(prev => [...prev, notif.id])}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                !isRead ? "bg-gray-100" : "bg-gray-50"
              }`}>
                <Icon name={notif.icon} size={18} className={notif.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-sm font-display font-semibold ${!isRead ? "text-gray-900" : "text-gray-500"}`}>
                    {notif.title}
                  </span>
                  <span className="text-xs text-gray-400 whitespace-nowrap font-mono shrink-0">{notif.time}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{notif.text}</p>
              </div>
              {!isRead && (
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1 shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Alert Settings */}
      <div className="mt-6 panel rounded-xl p-4">
        <h3 className="text-sm font-display font-semibold text-gray-500 mb-3 tracking-wide uppercase">Настройки оповещений</h3>
        <div className="space-y-3">
          {[
            { label: "Изменение коэффициентов", icon: "TrendingUp", enabled: true },
            { label: "Начало матчей LIVE", icon: "Radio", enabled: true },
            { label: "Подтверждение прогнозов", icon: "Target", enabled: false },
            { label: "Травмы игроков", icon: "AlertCircle", enabled: true },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name={s.icon} size={14} className="text-gray-400" />
                <span className="text-sm text-gray-600">{s.label}</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-all cursor-pointer ${
                s.enabled ? "bg-green-500" : "bg-gray-200"
              }`}>
                <div className={`w-4 h-4 rounded-full mt-0.5 bg-white shadow transition-all ${
                  s.enabled ? "translate-x-5" : "translate-x-0.5"
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
