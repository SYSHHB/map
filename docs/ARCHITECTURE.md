# Architecture

## 1. System Overview

Browser (installable web app) → `index.html` (single file: UI, map layers, room data) → Microsoft sign-in (MSAL.js) → Microsoft Graph → JSON files in the it.helpdesk OneDrive.

There is no server of our own. GitHub Pages serves static files.

## 2. Tech Stack

| Area         | Tool                                                              |
|--------------|-------------------------------------------------------------------|
| Language     | Plain JavaScript, HTML, CSS (no framework, no build step)         |
| Maps         | SVG layers traced from the original PDFs, rooms as an overlay     |
| 3D           | CSS 3D transforms (relief and Stack views)                        |
| Data         | JSON files in OneDrive, read and written through Microsoft Graph  |
| Auth         | Microsoft Entra ID, MSAL.js 2.38.3 (redirect flow)                |
| Hosting      | GitHub Pages                                                      |
| Offline      | Service worker (`sw.js`) caches the app shell                     |
| Testing      | None automated yet. Checked in a headless browser by hand         |
| Distribution | GitHub Pages, installable as an app from Chrome or Edge           |

## 3. Project Structure

```
school-map-github/
├ index.html              # The whole app. Embeds DATA (map layers, 170 rooms, link areas) and G3 (stack geometry)
├ config.js               # Client ID, tenant, OneDrive links, admins, default role
├ manifest.webmanifest    # App name "SYSHHB Map", colours, icons
├ sw.js                   # Service worker, bump CACHE when files change
├ logo.png, icon-*.png, apple-touch-icon.png
├ README.md               # Setup guide for the school (Entra, OneDrive, GitHub Pages)
├ CLAUDE.md, AGENTS.md    # Rules for AI coding agents
└ docs/                   # PRD, design system, this file
```

Files in OneDrive (folder `SYSHHB-School-Map`):

```
years.json                # Class names per year, plus rev (data version)
access.json               # Users and roles
audit.json                # Change log (latest 5000)
signins/signins.json      # Sign-in records (latest 5000)
```

## 4. Data Flow

1. The page loads, shows the loading screen, and checks for a Microsoft session (MSAL).
2. After sign-in it resolves the OneDrive folder through the share link and reads `access.json` and `years.json`.
3. The role is worked out: owners in `config.js` are Admin, then `access.json`, then `DEFAULT_ROLE`.
4. The map is drawn from embedded SVG plus room overlays. Class names come from the selected year.
5. An edit changes memory, then saves `years.json` (with an ETag check and a merge on conflict) and queues an audit entry.
6. Each sign-in is written to `signins/signins.json`, so Viewers appear in the log too.
7. If sign-in is not configured (`CLIENT_ID` empty) the app runs in demo mode and saves to the browser only.

## 5. Scalability

- Room geometry and layers live in `DATA` and never come from OneDrive. Only names, users and logs do.
- Adding rooms: add them to `DATA.cells` and `G3`, add the default name to `DATA.seed`, add a `NEWKEYS` entry and raise `DATA_REV` so existing OneDrive data gets the new names once.
- A room drawn on two maps shares one name with `alias`.
- Keep every Graph call going through the `graph()` helper.
- Don't add new tools, libraries or services without updating this file.
