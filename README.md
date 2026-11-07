# notfallbox.org

1. Preise, Kontakt, Firma und Partnerstufen stehen nur in `config.js` (Objekt `window.NB_CONFIG`).
2. Preise ändern: `prices.setup` (einmalig), `prices.annual` (pro Jahr), `prices.renewal` (je Erneuerung); Beträge ohne «CHF» eintragen.
3. Kontakt ändern: `company.*` (Impressum), `contact.*` (Telefon, Zeiten, E-Mail, Bestell- und Partner-E-Mail), `storage.location` (Lagerort).
4. Ein leerer Wert (`""`) blendet das zugehörige Element auf der Seite aus; es erscheint nie ein Platzhalter.
5. Ändern Sie die HTML-Fallbacks 490/49/79 in `index.html` mit, damit die Seite auch ohne JavaScript stimmt; dann committen, Vercel veröffentlicht automatisch.
