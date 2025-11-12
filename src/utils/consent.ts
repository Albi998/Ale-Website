export type Consent = { essential: true; analytics: boolean };
const KEY = "consent.v1";

export function readConsent(): Consent | null {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}
export function saveConsent(c: Consent) {
  localStorage.setItem(KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent("consentchange", { detail: c }));
}
export function hasAnalytics(): boolean {
  return readConsent()?.analytics === true;
}
