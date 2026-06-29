# Cattle Management System

A simple, responsive web app for a farmer to manage livestock — full CRUD,
search & filtering, and an analytics dashboard. Built as a technical assignment.

**Live demo:** [Demo](https://cattle-management-theta.vercel.app/)

## Features

- **Register, view, update, and remove cattle** — full CRUD with a validated form
- **Search & filter** — by tag, name, or breed; filter by status and gender
- **Analytics dashboard** — herd totals, status & gender distribution, breed breakdown
- **Responsive** — table view on desktop, card view on mobile/tablet
- **Persistent** — data is saved to `localStorage`, survives page reloads


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

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app seeds a few sample
animals on first run so the dashboard isn't empty.
