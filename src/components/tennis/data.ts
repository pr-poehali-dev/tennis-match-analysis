export const NAV_ITEMS = [
  { id: "forecasts", label: "Прогнозы", icon: "TrendingUp" },
  { id: "stats", label: "Статистика", icon: "BarChart2" },
  { id: "live", label: "Трансляции", icon: "Radio" },
  { id: "alerts", label: "Уведомления", icon: "Bell" },
];

export const MATCHES = [
  {
    id: 1, tournament: "Roland Garros", round: "Четвертьфинал", surface: "Грунт",
    p1: { name: "Новак Джокович", flag: "🇷🇸", rank: 1, sets: [6, 4, 7], form: ["W","W","W","L","W"] },
    p2: { name: "Карлос Алькарас", flag: "🇪🇸", rank: 2, sets: [4, 6, 5], form: ["W","L","W","W","L"] },
    live: true, set: 3, time: "2:14",
    odds: { p1: 1.62, p2: 2.20 },
    forecast: { winner: "p1", confidence: 74, detail: "Преимущество на медленном покрытии" }
  },
  {
    id: 2, tournament: "Уимблдон", round: "1/2 финала", surface: "Трава",
    p1: { name: "Янник Синнер", flag: "🇮🇹", rank: 3, sets: [6, 6], form: ["W","W","W","W","L"] },
    p2: { name: "Хольгер Руне", flag: "🇩🇰", rank: 7, sets: [3, 4], form: ["L","W","L","W","W"] },
    live: true, set: 2, time: "1:08",
    odds: { p1: 1.28, p2: 3.60 },
    forecast: { winner: "p1", confidence: 88, detail: "Сильная подача на траве" }
  },
  {
    id: 3, tournament: "US Open", round: "Финал", surface: "Хард",
    p1: { name: "Даниил Медведев", flag: "🇷🇺", rank: 4, sets: [], form: ["W","L","W","W","W"] },
    p2: { name: "Стефанос Циципас", flag: "🇬🇷", rank: 6, sets: [], form: ["W","W","L","W","L"] },
    live: false, set: 0, time: "18:00",
    odds: { p1: 1.75, p2: 1.95 },
    forecast: { winner: "p1", confidence: 61, detail: "Хорошая статистика на харде" }
  },
];

export const ODDS_DATA = [
  { match: "Джокович — Алькарас", book: "1xBet", p1: 1.62, p2: 2.20, change: "up" },
  { match: "Синнер — Руне", book: "Фонбет", p1: 1.28, p2: 3.60, change: "up" },
  { match: "Медведев — Циципас", book: "BetCity", p1: 1.75, p2: 1.95, change: "down" },
  { match: "Свёнтек — Соболенко", book: "Марафон", p1: 1.45, p2: 2.50, change: "none" },
  { match: "Гауфф — Рыбакина", book: "Мелбет", p1: 2.10, p2: 1.68, change: "down" },
];

export const STATS_PLAYERS = [
  { name: "Карлос Алькарас", flag: "🇪🇸", rank: 2, ace: 14.2, first: "68%", winners: 42, points: 8200 },
  { name: "Новак Джокович", flag: "🇷🇸", rank: 1, ace: 10.1, first: "72%", winners: 38, points: 9800 },
  { name: "Янник Синнер", flag: "🇮🇹", rank: 3, ace: 11.8, first: "70%", winners: 36, points: 7900 },
  { name: "Даниил Медведев", flag: "🇷🇺", rank: 4, ace: 9.5, first: "65%", winners: 30, points: 6800 },
];

export const NOTIFICATIONS = [
  { id: 1, icon: "TrendingUp", color: "neon-text-green", title: "Коэф изменился", text: "Джокович: 1.75 → 1.62 (Фонбет)", time: "2 мин назад", read: false },
  { id: 2, icon: "Radio", color: "neon-text-red", title: "Матч начался", text: "Синнер vs Руне — Уимблдон 1/2", time: "18 мин назад", read: false },
  { id: 3, icon: "Target", color: "neon-text-yellow", title: "Прогноз подтверждён", text: "Медведев победил в 3-х сетах ✓", time: "2 ч назад", read: true },
  { id: 4, icon: "TrendingDown", color: "neon-text-blue", title: "Резкий рост котировок", text: "Циципас: 1.50 → 1.95 (+30%)", time: "4 ч назад", read: true },
  { id: 5, icon: "AlertCircle", color: "neon-text-yellow", title: "Травма игрока", text: "Руне запросил медицинский тайм-аут", time: "5 ч назад", read: true },
];

export const TICKER_ITEMS = [
  "🎾 Джокович [6:4] Алькарас — 3-й сет",
  "🟢 Синнер ведёт 2:0 в матче с Руне",
  "📈 Коэф на Медведева упал до 1.62",
  "🏆 Roland Garros — следующий тур в 15:00",
  "⚡ Алькарас сделал 3 эйса подряд",
  "📊 Свёнтек выиграла 8 из последних 10",
];

