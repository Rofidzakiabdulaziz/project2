export interface Equipment {
  id: number;
  name_equipment: string;
  image: string;
  description: string | null;
  quantity: number;
  status: string;
  availability: boolean;
  created_at: string;
  updated_at: string;
}
