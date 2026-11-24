# School Map · Yayasan SHHB

Searchable floor plans (Secondary, Admin & canteen, Primary, Taska) with class names saved per year in OneDrive.

## 1. Register the app in Microsoft Entra (Azure), once
1. Entra admin centre → App registrations → New registration. Name: `SYSHHB School Map`. Account type: this organisation only.
2. Redirect URI: platform **Single-page application (SPA)**, value = the full GitHub Pages address, e.g. `https://zasystem147.github.io/school-map/` (the trailing slash matters).
3. API permissions → Microsoft Graph → Delegated: `User.Read`, `Files.ReadWrite.All` → Grant admin consent.
4. Copy the **Application (client) ID** and the **Directory (tenant) ID**.

## 2. Edit `config.js`
Paste the client ID into `CLIENT_ID`, the tenant ID into `TENANT`, and check the `ADMINS` list (only zulfa.zaini).

## 3. Share the OneDrive folder
Data is saved in the OneDrive of `it.helpdesk@syayasan.edu.bn`, but only `zulfa.zaini@syayasan.edu.bn` is the admin. Sign in to OneDrive as it.helpdesk, create the folder `SYSHHB-School-Map` and share it:
- `zulfa.zaini@syayasan.edu.bn` (the admin): can edit.
- Everyone else who should view the map: can view.

The app creates `years.json` (class names by year) and `audit.json` (change log) inside that folder the first time an editor opens it.

## 4. Publish on GitHub Pages
Upload all files in this folder to a new repo (e.g. `school-map`), then Settings → Pages → deploy from the `main` branch. Open the address on a phone in Chrome or Edge and choose Install app.

Until `CLIENT_ID` is filled in, the app runs in demo mode and saves only in the browser.
