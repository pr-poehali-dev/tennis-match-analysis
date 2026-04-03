import { useState } from "react";
import { NOTIFICATIONS } from "@/components/tennis/data";
import Header from "@/components/tennis/Header";
import TabForecasts from "@/components/tennis/TabForecasts";
import TabStats from "@/components/tennis/TabStats";
import TabLive from "@/components/tennis/TabLive";
import TabAlerts from "@/components/tennis/TabAlerts";

export default function Index() {
  const [activeTab, setActiveTab] = useState("forecasts");
  const unread = NOTIFICATIONS.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background font-body">
      <Header activeTab={activeTab} unread={unread} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === "forecasts" && <TabForecasts />}
        {activeTab === "stats" && <TabStats />}
        {activeTab === "live" && <TabLive />}
        {activeTab === "alerts" && <TabAlerts />}
      </main>
    </div>
  );
}
