# Finn 15 Fel — Control & Analys

Interaktivt "hitta felen"-spel för avdelningspresentation.

## Snabbstart (lokalt)

Dubbelklicka `start.py` — öppnar spelet i webbläsaren.

## Publicera på GitHub Pages

### 1. Skapa repo
1. Gå till https://github.com/new
2. Välj repo-namn, t.ex. `finn-15-fel`
3. Klicka **Create repository**

### 2. Pusha filerna
```bash
cd "Presentation torsdag"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DITT-KONTO/finn-15-fel.git
git branch -M main
git push -u origin main
```

### 3. Aktivera GitHub Pages
1. Gå till repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Klicka **Save**
5. Vänta ~1 min, sedan finns spelet på:
   `https://DITT-KONTO.github.io/finn-15-fel/`

### 4. Skapa QR-kod
Gå till t.ex. https://www.qr-code-generator.com/ och klistra in URL:en.

## Redigera innehåll

### Personer (`config.js`)
- **Namn & roll**: Ändra `name` och `role`
- **Beskrivning**: Fyll i `description`
- **Porträttbild**: Ändra `photo` (sökväg till bild i `photos/`-mappen)
- **Klickzon**: Justera `x, y, width, height` (procent av bildens storlek)
- **Avdelningstext**: Redigera `intro.heading` och `intro.text`

### Bilder
- `original.jpg` — Gruppbilden utan fel
- `errors.jpg` — Gruppbilden med 15 inlagda fel
- `photos/` — Porträttbilder (namngivna fritt, matcha mot `config.js`)

### Utvecklarverktyg
Sätt `devMode: true` i `config.js` för att se:
- **Visa hjälplinjer** — rutnät + koordinatvisare för att placera klickzoner
- **Visa klickzoner** — visar alla klickbara områden

Sätt `devMode: false` när ni är klara — då döljs verktygen.

## Uppdatera efter publicering

Ändra filer → commit → push:
```bash
git add .
git commit -m "Uppdaterade bilder"
git push
```
GitHub Pages uppdateras automatiskt inom ~1 minut.
