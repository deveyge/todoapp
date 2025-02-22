import { AppRouter } from "app/providers/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeSwitcher } from "shared/ThemeSwitcher";

function layout() {
  return (
    <div className="">
      <Header />
      <main className="container mx-auto min-h-screen px-4 py-8">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default layout;
