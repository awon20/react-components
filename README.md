# React Components

Sammlung von React-Übungen und UI-Komponenten mit eigener Webpack- und Babel-Konfiguration.

## Umfang

- Formulare und wiederverwendbare Formularelemente
- Zähler, Bildansichten und Tabs
- Beispiele zu Komponenten und Zustandsänderungen

## Wartungsstand

Die Sicherheits- und Abhängigkeitsänderungen werden in [PR #1](https://github.com/awon20/react-components/pull/1) verfolgt. Sie sind noch nicht in den Quellcode-Hauptbranch übernommen. Die README-Ergänzung führt diesen Pull Request nicht zusammen.

## Lokal starten

Die folgenden Befehle verwenden ausdrücklich den vorbereiteten Wartungsbranch. Dessen Änderungen sind noch in Prüfung; offene Paketwarnungen stehen im zugehörigen PR. Der bisherige Hauptbranch verwendet teilweise ältere Build-Werkzeuge und kann mit neueren Node-Versionen fehlschlagen.

Voraussetzungen: Git, Node.js und npm. Die lokalen Web-Builds des Wartungsstands wurden mit Node.js 24.19.0 und npm 11.21.0 geprüft. Ein erfolgreicher Build bedeutet keine vollständige Behebung aller Paketwarnungen.

```sh
git clone --branch codex/security-maintenance-2026-10-13 https://github.com/awon20/react-components.git
cd react-components
npm ci --ignore-scripts
npm start
```

Die vom Entwicklungsserver ausgegebene lokale Adresse öffnen. Zum Beenden im Terminal `Ctrl+C` drücken.

## Build und Prüfungen

```sh
npm run build
npm audit
```

Webpack schreibt den Build nach `dist/`. Ein Testskript ist derzeit nicht definiert.

## Projektstruktur

- [`src/app`](https://github.com/awon20/react-components/tree/main/src/app)
- [`src/index.jsx`](https://github.com/awon20/react-components/blob/main/src/index.jsx)
- [`webpack.config.js`](https://github.com/awon20/react-components/blob/main/webpack.config.js)
- [`babel.config.json`](https://github.com/awon20/react-components/blob/main/babel.config.json)

## Beiträge

Änderungen mit einer kurzen Beschreibung und passenden Prüfergebnissen als Pull Request einreichen. Keine Zugangsdaten, privaten Schlüssel oder lokalen Abhängigkeitsordner hinzufügen.
