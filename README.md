# 🐄 Cattle Management System

A simple, responsive web app for a farmer to manage livestock — full CRUD,
search & filtering, and an analytics dashboard. Built as a technical assignment.

**Live demo:** [Demo](https://cattle-management-theta.vercel.app/)

---

## Features

- **Register, view, update, and remove cattle** — full CRUD with a validated form
- **Search & filter** — by tag, name, or breed; filter by status and gender
- **Analytics dashboard** — herd totals, status & gender distribution, breed breakdown
- **Responsive** — table view on desktop, card view on mobile/tablet
- **Persistent** — data is saved to `localStorage`, survives page reloads

---

## Tech Stack

| Concern        | Choice                    | Why                                                        |
| -------------- | ------------------------- | ---------------------------------------------------------- |
| Framework      | Next.js (App Router) + TS | Modern React, type safety end-to-end                       |
| State          | Redux Toolkit             | Single source of truth for the cattle list                 |
| Validation     | Zod                       | Schema-driven validation, decoupled from state             |
| UI             | MUI + MUI X Charts        | Accessible components + ready-made charts                  |
| Persistence    | localStorage              | No backend needed for the brief; isolated behind one layer |

> **State and validation are kept separate on purpose:** Redux owns the *data*,
> Zod owns *correctness*.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app seeds a few sample
animals on first run so the dashboard isn't empty.

---

## Project Structure
---

## Data Model

```ts
interface Cattle {
  id: string;
  tagId: string;        // Identification
  name?: string;
  breed: string;
  gender: "male" | "female";
  dateOfBirth: string;  // ISO date
  status: "healthy" | "sick" | "pregnant" | "sold" | "deceased";
  weight?: number;      // kg
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## Assumptions

- **Single user** — no authentication; one farmer manages one herd.
- **localStorage over a backend** — appropriate for the scope, but data is tied
  to one browser/device. It lives behind a thin persistence layer, so swapping
  in a real API is a one-file change.
- **`tagId` is treated as the identifier** but uniqueness isn't enforced yet.
- **Status drives "active herd"** — `sold` and `deceased` are excluded from
  active counts.

---

## Future Improvements

- Enforce unique `tagId` and add per-field async validation
- Replace localStorage with a real API + database (data layer is ready for it)
- Switch the form to `react-hook-form` + `zodResolver` as fields grow
- Pagination / virtualization for large herds (500+ animals)
- Unit tests for pure logic (`getAnalytics`, Zod schema)
- Health & vaccination history, CSV import/export

---

## Notes

Scoped to ~2–3 hours per the brief. The focus is on engineering approach, code
quality, and clear design decisions rather than feature completeness.