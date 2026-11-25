# Product Requirements Document

## 1. Product Overview

- **Product Name:** SYSHHB Map
- **Tagline:** Find any room at Yayasan Sultan Haji Hassanal Bolkiah schools by code or class name.
- **Description:** A web app (installable on a phone) that shows the school floor plans for the Secondary school, the Admin and canteen area, the Primary school and the Taska. Staff search a room code or a class name and the map jumps to it. Class names change every year, so each year keeps its own record, and admins edit them in the app instead of redrawing PDFs.

## 2. Problem

- The floor plans were static PDFs with one set of class names baked in.
- Class names move every year, so the PDFs go out of date and have to be redrawn.
- Finding a room meant scanning the whole plan by eye.
- There was no record of who changed what, or who could change it.

## 3. Goal

Any staff member finds a room in under 10 seconds. An admin updates the class names for a new year without redrawing the maps.
(Proposed targets. Adjust them if you measure differently.)

## 4. Target Users

- **Admin** (IT team, set in `config.js`): edits class names, manages users, reads the audit log.
- **Editor** (school office): edits class names, creates years, imports CSV.
- **Viewer** (all staff, the default for anyone who signs in): searches, views and prints.

## 5. Core Features (Version 1)

- **Floor plans:** four maps with the original design, in 2D, 3D relief and Stack views, with a floor filter (Ground, Lower ground, First, Second).
- **Search:** by room code or class name, on the current year or across all years. Rooms light up and the map zooms to the match.
- **Class names per year:** each year has its own names. "New year" copies the previous year. The Records page edits many rooms at once, with CSV import and export.
- **Yellow label links:** TO PRIMARY SCHOOL, TO TASKA, TO CANTEEN and similar labels open the matching map.
- **Print:** each map fitted to one A4 landscape page, with the year in the title.
- **Microsoft sign-in:** staff sign in with their school account. Data lives in the it.helpdesk OneDrive.
- **Roles and users:** Admin, Editor, Viewer. New users are Viewers automatically and are listed on the Admin page. Admins can change roles and the app tries to share the OneDrive folder.
- **Audit log:** renamed rooms, new years, imports, access changes and every sign-in, with name, email, role and device. Filter and CSV export.
- **Look and feel:** green and gold theme, dark mode, loading screen and split-screen sign-in that match the other SYSHHB systems, English and Bahasa Melayu on the sign-in page.
- **Phone use:** bottom tab bar, swipeable room sheet, pinch and double-tap zoom, installable app named "SYSHHB Map".

## 6. Out of Scope (for now)

- Editing the floor plan shapes inside the app (the maps come from the PDFs).
- A campus overview map (built once, then removed on request).
- A server or database other than OneDrive files.
- Email notifications and timetable or student data.
- Full Bahasa Melayu translation outside the sign-in page.

## 7. Success Metrics

- Every room on all four maps has a class name or a deliberate blank for the current year.
- A new year is set up in one sitting by one admin.
- Every sign-in appears in the audit log.
(Proposed. Replace with numbers you care about.)
