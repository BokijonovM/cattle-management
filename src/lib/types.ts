export type Gender = "male" | "female";

export type CattleStatus =
  | "healthy"
  | "sick"
  | "pregnant"
  | "sold"
  | "deceased";

export interface Cattle {
  id: string;
  tagId: string;        // Identifikatsiya (quloq tagi)
  name?: string;
  breed: string;        // Zot
  gender: Gender;
  dateOfBirth: string;  // ISO: yyyy-mm-dd
  status: CattleStatus;
  weight?: number;      // kg
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Formadan keladigan qiymatlar (id va vaqtlar avtomatik generatsiya qilinadi)
export type CattleFormValues = Omit<Cattle, "id" | "createdAt" | "updatedAt">;