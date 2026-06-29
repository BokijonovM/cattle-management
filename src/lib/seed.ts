import { Cattle } from "./types";

const t = "2026-01-01T00:00:00.000Z";

export const seedCattle: Cattle[] = [
  { id: "seed-1", tagId: "UZ-001", name: "Olapar", breed: "Holstein", gender: "female", dateOfBirth: "2021-03-15", status: "healthy", weight: 520, notes: "High milk yield.", createdAt: t, updatedAt: t },
  { id: "seed-2", tagId: "UZ-002", name: "Toshbosar", breed: "Angus", gender: "male", dateOfBirth: "2022-07-02", status: "healthy", weight: 610, createdAt: t, updatedAt: t },
  { id: "seed-3", tagId: "UZ-003", name: "Gulnoz", breed: "Simmental", gender: "female", dateOfBirth: "2020-11-20", status: "pregnant", weight: 540, createdAt: t, updatedAt: t },
  { id: "seed-4", tagId: "UZ-004", name: "Zarina", breed: "Jersey", gender: "female", dateOfBirth: "2023-05-10", status: "sick", weight: 410, notes: "Under veterinary supervision.", createdAt: t, updatedAt: t },
  { id: "seed-5", tagId: "UZ-005", name: "Bo'taloq", breed: "Black-and-white", gender: "male", dateOfBirth: "2019-02-28", status: "sold", weight: 700, createdAt: t, updatedAt: t },
  { id: "seed-6", tagId: "UZ-006", name: "Dilorom", breed: "Holstein", gender: "female", dateOfBirth: "2024-01-12", status: "healthy", weight: 280, createdAt: t, updatedAt: t },
];