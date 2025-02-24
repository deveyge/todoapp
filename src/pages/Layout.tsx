import { AppRouter } from "app/providers/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function layout() {
  return (
    <div className="">
      <Header />
      <main className="container mx-auto min-h-screen px-4">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default layout;
