import { CattleStatus, Gender } from "./types";

export const GENDERS: { value: Gender; label: string }[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const STATUSES: {
  value: CattleStatus;
  label: string;
  color: "success" | "warning" | "info" | "default" | "error";
}[] = [
  { value: "healthy", label: "Healthy", color: "success" },
  { value: "sick", label: "Sick", color: "error" },
  { value: "pregnant", label: "Pregnant", color: "info" },
  { value: "sold", label: "Sold", color: "default" },
  { value: "deceased", label: "Deceased", color: "warning" },
];

export const BREEDS = [
  "Holstein",
  "Simmental",
  "Jersey",
  "Angus",
  "Black-and-white",
  "Brown Swiss",
];

export const statusMeta = (value: CattleStatus) =>
  STATUSES.find((s) => s.value === value) ?? STATUSES[0];

export const genderLabel = (value: Gender) =>
  GENDERS.find((g) => g.value === value)?.label ?? value;