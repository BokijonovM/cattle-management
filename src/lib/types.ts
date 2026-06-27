export type Gender = "male" | "female";

export type CattleStatus =
  | "healthy"
  | "sick"
  | "pregnant"
  | "sold"
  | "deceased";

export interface Cattle {
  id: string;
  tagId: string;
  name?: string;
  breed: string;
  gender: Gender;
  dateOfBirth: string;
  status: CattleStatus;
  weight?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type CattleFormValues = Omit<Cattle, "id" | "createdAt" | "updatedAt">;