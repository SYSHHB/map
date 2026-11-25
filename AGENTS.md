# Agent Instructions

## Purpose

This file gives AI coding agents the context and rules for working on this project. Follow it every session.

## Before You Start

- Read `docs/PRD.md` to understand the product and its goals.
- Read `docs/DESIGN_SYSTEM.md` before building any UI.
- Read `docs/ARCHITECTURE.md` before creating files or adding tools.
- Check what already exists before creating something new.

## Working Principles

These bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## Project Rules

- Only build what is in the PRD. Ask before adding features.
- Follow the design system exactly. No new colours or fonts.
- Reuse existing components and utilities before writing new ones.
- Handle loading, error and empty states.
- Don't add a tool, service or dependency without updating `docs/ARCHITECTURE.md`.
- When the stack, features or design change, update the matching file in `docs/`.

<!-- stack:begin -->
## Stack Rules

- Plain JavaScript, HTML and CSS in one `index.html`. No framework and no build step. Do not add one without asking.
- The floor plan drawing is the original design from the PDFs. Never redraw it or change its colours. Labels and overlays sit on top.
- Room data lives in `DATA.cells` (2D position, floor, colour) and `G3` (Stack view geometry). Keep both in step. Room keys look like `SM_GF_14` (the code with dots as underscores).
- Adding or renaming a default room name: update `DATA.seed`, add a `NEWKEYS` entry, raise `DATA_REV`, so existing OneDrive data is migrated once.
- Put text from users or OneDrive into the page with `textContent` or `esc()`, never raw `innerHTML`.
- All OneDrive access goes through `graph()`. Writes use `If-Match` and handle a 412 conflict.
- Room labels are horizontal, and rooms of the same size share one text size (`computeFS`). Keep it that way.
- Roles are Admin, Editor, Viewer. Owners in `config.js` can never be removed from inside the app.
- When files change, bump `CACHE` in `sw.js` so phones pick up the update.
- `CLIENT_ID` and `TENANT` are public by design. Never add a client secret or any token to the repo.
- Test in a headless browser (Playwright) with a mocked OneDrive before handing over, on desktop and phone widths, in light and dark mode.

## Commands

```sh
python3 -m http.server 8000   # Run locally, then open http://localhost:8000
# No install or build step. Publishing = upload the folder to GitHub Pages.
# No automated test runner yet. Verify by hand or with a Playwright script.
```
<!-- stack:end -->

## Security

- Never put API keys or secrets in code, and never commit them.
- Keep anything sensitive in environment variables or the platform's secret store.
- Validate all user input.

## When Unsure

- Check the `docs/` folder first.
- Look at how existing code does it.
- Ask before making big changes.
