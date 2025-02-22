import UseTheme from "app/providers/ThemeProvider/lib/UseTheme";
import React from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "shared/ThemeSwitcher";
import Button from "shared/ui/Button";

function header() {
  const { theme } = UseTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-secondary py-1">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold text-[var(--primary)]">
            TODO LIST
          </h1>
        </Link>
        <div id="header_menu" className="flex items-center gap-4">
          <div>
            <ThemeSwitcher className={`flex cursor-pointer items-center`} />
          </div>
          <div className="links flex items-center gap-4">
            <Link to={"/login"} className="text-primary">
              <Button>login</Button>
            </Link>
            <Link to={"/register"} className="text-primary">
              <Button>register</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
