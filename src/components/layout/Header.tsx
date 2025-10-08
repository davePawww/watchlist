import darkLogo from "@/assets/aether-dark.svg";
import lightLogo from "@/assets/aether-light.svg";
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/bitcoinAnalysis", label: "BTC Analysis" },
  { to: "/watchlist", label: "Watchlist" },
];

export default function Header() {
  const { theme } = useTheme();

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
        <nav className="flex gap-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
