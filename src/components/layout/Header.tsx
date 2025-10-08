import darkLogo from "@/assets/aether-dark.svg";
import lightLogo from "@/assets/aether-light.svg";
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/bitcoinAnalysis", label: "BTC Analysis" },
  { to: "/watchlist", label: "Watchlist" },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { theme } = useTheme();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    setActiveTab(event.currentTarget.textContent);
  };

  return (
    <header className="container mx-auto flex h-12 items-center justify-between border-r border-l border-dashed p-4">
      <div>
        {theme === "dark" ? (
          <img src={darkLogo} alt="Aether Logo Dark" />
        ) : (
          <img src={lightLogo} alt="Aether Logo Light" />
        )}
      </div>
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-8">
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
        <ModeToggle />
      </div>
    </header>
  );
}
