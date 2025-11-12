import { useEffect } from "react";
import { hasAnalytics } from "../utils/consent";

function enableDeferredScripts() {
  document
    .querySelectorAll<HTMLScriptElement>(
      'script[type="text/plain"][data-consent="analytics"]'
    )
    .forEach((old) => {
      const s = document.createElement("script");
      s.type = "text/javascript";
      if (old.src) s.src = old.src;
      if (old.textContent) s.text = old.textContent;
      // copia attributi utili
      ["async", "defer", "crossorigin"].forEach((a) => {
        if (old.getAttribute(a) !== null)
          s.setAttribute(a, old.getAttribute(a)!);
      });
      old.replaceWith(s);
    });
}

export default function ConsentScripts() {
  useEffect(() => {
    if (hasAnalytics()) enableDeferredScripts();
    const onChange = () => {
      if (hasAnalytics()) enableDeferredScripts();
    };
    window.addEventListener("consentchange", onChange as EventListener);
    return () =>
      window.removeEventListener("consentchange", onChange as EventListener);
  }, []);
  return null;
}
