# Design System

Sizes are CSS px for the interface and SVG units (about points) inside the maps.

## 1. Brand Identity

Official, calm, green and gold, easy to scan.

## 2. Colour Palette

| Name        | Light     | Dark      | Use for                                  |
|-------------|-----------|-----------|------------------------------------------|
| Brand       | #006b45   | #13804f   | Buttons, selected tab, links, headings   |
| Brand 2     | #00824f   | #18975e   | Hover on brand                           |
| Brand soft  | #e7f5ec   | #173327   | Selected segment, soft badges            |
| Header      | #168a4e to #0f7a45 | #245c30 to #143a21 | Top bar gradient           |
| Gold        | #f3d83d   | #f3d83d   | Header underline, highlights             |
| Background  | #f4f7f5   | #101a15   | Page background                          |
| Surface     | #ffffff   | #18241f   | Cards, panels                            |
| Surface 2   | #f8fbf9   | #13201a   | Inputs, hover                            |
| Text        | #132a22   | #e3eee8   | Main text                                |
| Muted       | #5f7a70   | #93ab9f   | Secondary text                           |
| Line        | #e1ebe5   | #26382d   | Borders                                  |
| Match       | #D6006C   | #D6006C   | Search match outline                     |
| Success     | #14915a   | #63d9a3   | Saved, connected                         |
| Warning     | #b7791f   | #f2c46a   | Demo mode, saving                        |
| Error       | #c53f4e   | #ff8f9b   | Errors                                   |
| Splash      | #0f4123 to #0b311c | same | Loading screen, app splash, status bar |

**Map colours (from the original floor plans, never change):**

| Meaning       | Colour    |
|---------------|-----------|
| Ground floor  | #C5E0B4   |
| Lower ground  | #B0D6D6   |
| First floor   | #F8CBAD   |
| Second floor  | #B4C7E7   |
| Link labels   | #FFD966   |

The map sheet stays light in dark mode.

## 3. Typography

- **Headings and titles:** Bricolage Grotesque, 600 to 700
- **Interface text:** Hanken Grotesk, 500 to 700, 14 body, 12 captions
- **Map labels:** Carlito, falling back to Calibri, bold
- **Room labels:** one size per group of same-size rooms, set by the longest name in the group. Class name on top of a smaller code line. Always horizontal.

## 4. Spacing

Gaps of 4, 6, 8, 10, 12, 16, 24. Page padding 16 (10 on phones).

## 5. Border Radius

- Buttons and inputs: 8 to 10
- Cards and map sheet: 14
- Chips and badges: 16 to 20 (pill)

## 6. Components

- **Primary button:** brand background, white text
- **Secondary button:** surface background, 1 line border
- **Segmented control:** surface with line border, brand soft when selected
- **Tabs:** pill group, brand when selected
- **Room panel:** code in brand colour, class name field, Save, Save and next, Prev, Next
- **Sign-in and loading:** dark green split screen, yellow ring around the logo, gold-to-green progress bar

## 7. Icons

Inline SVG line icons, 2 stroke, round caps. The Yayasan logo for brand marks. No icon library.

## 8. Breakpoints / Size Classes

- Phone: 860 and under. Bottom tab bar, bottom sheet, compact header.
- Desktop: over 860. Side panel 340 wide, tooltips, keyboard shortcuts.
- Print: A4 landscape, 6 mm margins.

## Rules

- Never use colours outside this palette.
- Never change the floor plan drawing, colours or layout. Only labels and overlays sit on top of it.
- Every screen must work on a phone first.
- Handle light and dark themes, and `prefers-reduced-motion`.
