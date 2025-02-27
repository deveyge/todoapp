import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
const root = createRoot(document.getElementById("root"));
import store from "./redux/store";
import { Provider } from "react-redux";

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);
