import { CattleStatus, Gender } from "./types";

export const GENDERS: { value: Gender; label: string }[] = [
  { value: "male", label: "Erkak" },
  { value: "female", label: "Urg'ochi" },
];

export const STATUSES: {
  value: CattleStatus;
  label: string;
  color: "success" | "warning" | "info" | "default" | "error";
}[] = [
  { value: "healthy", label: "Sog'lom", color: "success" },
  { value: "sick", label: "Kasal", color: "error" },
  { value: "pregnant", label: "Bo'g'oz", color: "info" },
  { value: "sold", label: "Sotilgan", color: "default" },
  { value: "deceased", label: "O'lgan", color: "warning" },
];

export const BREEDS = [
  "Golshtin",
  "Simmental",
  "Jersey",
  "Angus",
  "Qora-ola",
  "Shvits",
];

export const statusMeta = (value: CattleStatus) =>
  STATUSES.find((s) => s.value === value) ?? STATUSES[0];

export const genderLabel = (value: Gender) =>
  GENDERS.find((g) => g.value === value)?.label ?? value;