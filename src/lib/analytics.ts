import { Cattle } from "./types";
import { STATUSES, GENDERS } from "./constants";

export function ageInYears(dob: string): number {
  const birth = new Date(dob).getTime();
  if (Number.isNaN(birth)) return 0;
  return (Date.now() - birth) / (1000 * 60 * 60 * 24 * 365.25);
}

export function getAnalytics(cattle: Cattle[]) {
  const total = cattle.length;

  const byStatus = STATUSES.map((s) => ({
    key: s.value,
    label: s.label,
    value: cattle.filter((c) => c.status === s.value).length,
  }));

  const byGender = GENDERS.map((g) => ({
    key: g.value,
    label: g.label,
    value: cattle.filter((c) => c.gender === g.value).length,
  }));

  const breedMap = new Map<string, number>();
  cattle.forEach((c) =>
    breedMap.set(c.breed, (breedMap.get(c.breed) ?? 0) + 1)
  );
  const byBreed = Array.from(breedMap, ([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const activeHerd = cattle.filter(
    (c) => c.status !== "sold" && c.status !== "deceased"
  ).length;

  const avgAge =
    total === 0
      ? 0
      : cattle.reduce((sum, c) => sum + ageInYears(c.dateOfBirth), 0) / total;

  return { total, activeHerd, avgAge, byStatus, byGender, byBreed };
}