import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </ContextProvider>
  </ThemeProvider>
);
