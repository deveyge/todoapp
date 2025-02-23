import UseTheme from "app/providers/ThemeProvider/lib/UseTheme";
import React from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "shared/ThemeSwitcher";
import LogoutBtn from "./Auth/LogoutBtn";
import LoginBtn from "./Auth/LoginBtn";
import RegisterBtn from "./Auth/RegisterBtn";
import useAuth from "shared/lib/hooks/useAuth";
function header() {
  const { user, isLoading } = useAuth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-secondary py-1 dark:border-none">
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
            {user ? (
              <LogoutBtn />
            ) : (
              <div className="flex items-center gap-4">
                <LoginBtn />
                <RegisterBtn />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
