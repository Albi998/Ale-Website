import { useEffect, useState } from "react";
import { readConsent, saveConsent } from "../utils/consent";

type Props = {
  policyUrl?: string;
  position?: "bottom" | "top";
  brand?: string;
};

export default function CookieBar({
  policyUrl = "/privacy",
  position = "bottom",
  brand = "Questo sito",
}: Props) {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setOpen(!readConsent());
  }, []);

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true });
    setOpen(false);
  };
  const rejectAll = () => {
    saveConsent({ essential: true, analytics: false });
    setOpen(false);
  };
  const savePrefs = () => {
    saveConsent({ essential: true, analytics });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className={`cookiebar ${position}`}>
      <div className="cookiebar__row">
        <div className="cookiebar__copy">
          <strong>{brand}</strong> usa cookie tecnici e, con consenso, cookie di
          analisi.
          <a href={policyUrl} target="_blank" rel="noopener">
            {" "}
            Privacy & Cookie
          </a>
        </div>

        {!prefs ? (
          <div className="cookiebar__actions" id="cookiebar-actions">
            <button className="btn-cookie ghost" id="cb-reject" onClick={rejectAll}>
              Rifiuta
            </button>
            {/* <button className="btn-cookie" id="cb-prefs">
              Preferenze
            </button> */}
            <button className="btn-cookie primary" id="cb-accept" onClick={acceptAll}>
              Accetto
            </button>
          </div>
        ) : (
          <div className="cookiebar__prefs">
            <label className="check small">
              <input type="checkbox" checked disabled />
              <span className="control" aria-hidden="true" />
              Essenziali (sempre attivi)
            </label>

            <label className="check small">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span className="control" aria-hidden="true" />
              Analytics
            </label>

            <div className="cookiebar__actions">
              <button className="btn ghost" onClick={() => setPrefs(false)}>
                Indietro
              </button>
              <button className="btn primary" onClick={savePrefs}>
                Salva preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
