// import darkLogo from "@/assets/aether-dark.svg";
import lightLogo from "@/assets/aether-light.svg";
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="container mx-auto flex h-12 items-center justify-between border-r border-l border-dashed p-4">
      <div>
        <img src={lightLogo} alt="Aether Logo Dark" />
        {/* <img src={darkLogo} alt="Aether Logo Light" /> */}
      </div>
      <div className="flex items-center gap-4">
        <nav className="flex gap-4">
          <Link to="/">Dashboard</Link>
          <Link to="/bitcoinAnalysis">BTC Analysis</Link>
          <Link to="/watchlist">Watchlist</Link>
        </nav>
        <div>
          <button>Toggle Theme</button>
        </div>
      </div>
    </header>
  );
}
