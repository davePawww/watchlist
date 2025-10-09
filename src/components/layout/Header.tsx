import darkLogo from "@/assets/aether-dark.svg";
import lightLogo from "@/assets/aether-light.svg";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/hooks/useTheme";
import Nav from "../navigation/nav";

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
        <Nav />
        <ModeToggle />
      </div>
    </header>
  );
}
