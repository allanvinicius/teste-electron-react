import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyle } from "./styles/global.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <App />

    <GlobalStyle />
  </>
);
