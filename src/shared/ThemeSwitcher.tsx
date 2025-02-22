import UseTheme from "app/providers/ThemeProvider/lib/UseTheme";
import { Moon, Sun } from "lucide-react";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = UseTheme();
  const isDark = theme === "dark";
  return (
    <button className={className} onClick={toggleTheme}>
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-[var(--primary)]" />
      )}
    </button>
  );
};
