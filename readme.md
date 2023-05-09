# Mobile Phone Filter

dataset about mobile phone specification & prices is used from https://www.kaggle.com/datasets/pratikgarai/mobile-phone-specifications-and-prices

## Ziele & Anforderungen:

Legende: ✅ - erledigt

## Min:

- Git Version Control & Github ✅
- leeres Projekt zum Stand der Projektvorlage(next-starter) bringen, aber projektspezifisch anpassen ✅
- ein möglichst frühes Deploy in Vercel✅

- ### Supabase:

  - ein neues Projekt erstellen ✅
  - Das Dataset importieren & Tabelle "MobilePhones" einrichten ✅
  - RLS Row Level Security für Lesen einstellen [Enable read access for all users] ✅

- ### Frontend:

  - **Kommunikation mit supabase**✅

  - Header, Footer ✅
  - Main-Bereich teilt sich auf Filter-Spalte rechts und Übersicht-Spalte links ✅
  -
  - Filter sollte im allgemein multiplies choice und/oder combobox und/oder aufklappende Menü mit Checkboxen / Radio-Buttons haben.
  - Filter-Menüs:
    - Hersteller✅
  -
  - Produktionsübersicht besteht aus Kacheln ✅
  - Je Kachel:
    - Model-Name, ausgewählte Eigenschaften✅
    - Platzhalter-Bild im Hintergrund
  -
  - Generierte Seite für je Produkt✅

- ### **Fixes**:
  - bis jetzt keine Bugs

---

## Optional:

- Benutzen ZOD für Prüfung der Eingangsdaten:

  - von supabase oder,
  - falls hinzugefügt wird, vom Eingabeform

- Google-Font importieren (S. Haupt-layout in next-starter)
- themeColor für dark/light mode in metadata in Haupt-layout

- Supabase:

  - RLS Row Level Security für Schreiben & Löschen nur für autorisierte Users einstellen
  - GraphQL zur Kommunikation einstellen
  - Spalte price_EUR ausfüllen

- Frontend:

  - Login / Auth
  - Favorite-List
  - Vergleichstabelle aus Fav.-List

- WordPress:
  - Product-Bilder unter WordPress ablegen
  - Frontend greift auf die Bilder durch API
