/* Notfallbox: zentrale Konfiguration. Leere Werte ("") werden auf der Seite nicht angezeigt. */
window.NB_CONFIG = {
  company: { name: "Advisori GmbH", street: "", zip: "", city: "", uid: "", responsible: "" },
  contact: { phone: "", phoneHours: "", email: "", orderEmail: "", partnerEmail: "" },
  storage: { location: "" },
  prices: { setup: 490, annual: 49, renewal: 79, currency: "CHF", vatIncluded: true },
  partner: {
    tiers: [
      { name: "Bronze", rate: 30, criterion: "ab Start" },
      { name: "Silber", rate: 40, criterion: "ab 10 Boxen pro Jahr" },
      { name: "Gold", rate: 50, criterion: "ab 30 Boxen pro Jahr" }
    ],
    base: "Einrichtungsgebühr"
  }
};
