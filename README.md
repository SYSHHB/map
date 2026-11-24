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

## 3D view
Tap or click **3D** (top-left of the map) to see the same layout as a 3D building: ground, first and second floors stacked, the courtyard in the middle. Drag to rotate, scroll or pinch to zoom, Shift+drag (two fingers on a phone) to move, double-click a room to zoom to it, and use **Explode** to pull the floors apart. Search, floor filters, the class-name labels and the year all work in 3D too.

## Roles: Admin, Editor, Viewer
- **Admin**: edits class names, adds and removes users, changes roles, reads the audit log.
- **Editor**: edits class names, creates years, imports CSV.
- **Viewer**: looks, searches and prints only.

Users are managed inside the app: sign in as an Admin, open **Admin → Users**, type the school email, pick a role and click Add user. The list is saved as `access.json` in the OneDrive folder.
- The accounts in `ADMINS` in `config.js` are **Owners**: always Admin, and they cannot be removed from inside the app, so you can never lock yourself out.
- `DEFAULT_ROLE` in `config.js` is the role for anyone who signs in but is not on the list: `"viewer"` (default) or `"none"` (blocked until an Admin adds them).
- Share the OneDrive folder too: Admin and Editor need **Can edit**, Viewer needs **Can view**. The app roles control what each person can do in the app; the folder sharing controls what OneDrive allows.

**Admin → Audit log** shows who did what and when (Brunei time): renamed rooms, new years, CSV imports, users added, removed or changed, and editor and admin sign-ins. Filter by person or action, and export it as CSV. It is stored as `audit.json` in the same folder (latest 5000 entries).
