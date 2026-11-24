# School Map · Yayasan SHHB

Searchable floor plans (Secondary, Admin & canteen, Primary, Taska) with class names saved per year in OneDrive.

## 1. Register the app in Microsoft Entra (Azure), once
1. Entra admin centre → App registrations → New registration. Name: `SYSHHB School Map`. Account type: this organisation only.
2. Redirect URI: platform **Single-page application (SPA)**, value = the full GitHub Pages address, e.g. `https://zasystem147.github.io/school-map/` (the trailing slash matters).
3. API permissions → Microsoft Graph → Delegated: `User.Read`, `Files.ReadWrite.All` → Grant admin consent.
4. Copy the **Application (client) ID** and the **Directory (tenant) ID**.

## 2. Edit `config.js`
Paste the client ID into `CLIENT_ID`, the tenant ID into `TENANT`, and check the `ADMINS` list (only zulfa.zaini).

## 3. Share the OneDrive folder (this fixes "OneDrive error 403")
Data is saved in the OneDrive of `it.helpdesk@syayasan.edu.bn`. Microsoft only lets another person save there through a share, so:
1. Sign in to OneDrive as it.helpdesk and create the folder `SYSHHB-School-Map`.
2. Select the folder → Share → add `zulfa.zaini@syayasan.edu.bn` with **Can edit**, and the staff who should only look with **Can view**.
3. Select the folder → Share → Copy link → choose **People with existing access** → Copy. This link gives nobody extra rights; each person keeps their own edit or view permission.
4. Paste that link into `FOLDER_LINK` in `config.js`.

The app creates `years.json` (class names) and `audit.json` (change log) in that folder the first time the admin opens it.

## 4. Publish on GitHub Pages
(Upload every file in the folder, including `logo.png` and the `icon-*.png` files.)
Upload all files in this folder to a new repo (e.g. `school-map`), then Settings → Pages → deploy from the `main` branch. Open the address on a phone in Chrome or Edge and choose Install app.

Until `CLIENT_ID` is filled in, the app runs in demo mode and saves only in the browser.

## If the sign-in library won't load
The app loads Microsoft's sign-in library (MSAL) from several public sources. If your network blocks all of them, download `msal-browser.min.js` (version 2.38.3, from https://cdn.jsdelivr.net/npm/@azure/msal-browser@2.38.3/lib/msal-browser.min.js) on any computer that can reach it, and upload it to the repo next to `index.html`. The app uses that local copy first.

## Look and feel
The loading screen (shown on every refresh), the split-screen sign-in with Gregorian and Hijri dates, the green and gold colours and the dark mode switch follow the other SYSHHB systems. The theme choice is saved under the same `syshhb_theme` setting, and English or Bahasa Melayu on the sign-in page is saved under `syshhb_lang`.

## App name and splash
The installed app is called "SYSHHB Map". Its opening (splash) screen is solid green, the same colour as the loading page, and the status bar matches it. After changing the name or icon, uninstall the old app from the phone and install it again; Android keeps the old name and icon until then.
