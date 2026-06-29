import { ageInYears } from "./analytics";

export function formatAge(dob: string): string {
  const years = ageInYears(dob);
  if (years < 1) {
    const months = Math.max(0, Math.round(years * 12));
    return `${months} mo`;
  }
  return `${years.toFixed(1)} yr`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US");
}