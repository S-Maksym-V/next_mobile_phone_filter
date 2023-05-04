# Mobile Phone Filter

dataset about mobile phone specification & prices is used from https://www.kaggle.com/datasets/pratikgarai/mobile-phone-specifications-and-prices

## Ziele & Anforderungen:

---

## Min:

- Git Version Control & Github
- leeres Projekt zum Stand der Projektvorlage(next-starter) bringen, aber projektspezifisch anpassen
- ein möglichst frühes Deploy in Vercel

- ### Supabase:

  - ein neues Projekt erstellen ✅
  - Das Dataset importieren & Tabelle "MobilePhones" einrichten ✅
  - RLS Row Level Security für Lesen einstellen [Enable read access for all users] ✅

- ### Frontend:

  - **Kommunikation mit supabase**
    - api mit middleware
  -
  - Header, Footer
  - Main-Bereich teilt sich auf Filter-Spalte rechts und Übersicht-Spalte links
  -
  - Filter sollte im allgemein multiplies choice und/oder combobox und/oder aufklappende Menü mit Checkboxen / Radio-Buttons haben.
  - Filter-Menüs:
    - _Platzhalter_
    - _usw_.
  -
  - Produktionsübersicht besteht aus Kacheln
  - Je Kachel:
    - Model-Name, ausgewählte Eigenschaften
    - Platzhalter-Bild im Hintergrund
  -
  - Generierte Seite für je Produkt

- ### **Fixes**:
  - platzhalter

---

## Optional:

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
