import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/bitcoinAnalysis", label: "BTC Analysis" },
  { to: "/watchlist", label: "Watchlist" },
];

export default function Nav() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    setActiveTab(event.currentTarget.textContent);
  };

  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`${activeTab === item.label ? "scale-110 opacity-100" : "opacity-50"} transform text-sm transition-transform duration-200 hover:scale-110 hover:opacity-100`}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
