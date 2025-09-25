import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./styles/fonts.css";
import "./styles/global.css";
import { MotionConfig } from "framer-motion";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="never">
      <App />
    </MotionConfig>
  </StrictMode>
);
