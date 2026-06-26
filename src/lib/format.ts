import { ageInYears } from "./analytics";

export function formatAge(dob: string): string {
  const years = ageInYears(dob);
  if (years < 1) {
    const months = Math.max(0, Math.round(years * 12));
    return `${months} oy`;
  }
  return `${years.toFixed(1)} yil`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("uz-UZ");
}