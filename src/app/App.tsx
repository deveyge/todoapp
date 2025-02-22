import "./styles/index.css";
import Layout from "../pages/Layout";
import UseTheme from "./providers/ThemeProvider/lib/UseTheme";

export default function App() {
  const { theme } = UseTheme();
  return (
    <div className={theme}>
      <Layout />
    </div>
  );
}
