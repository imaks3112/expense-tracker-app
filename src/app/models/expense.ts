export interface Expense {
  description: string;
  amount: number;
  date: string;
  id?: number;
  isEditing?: boolean;
}
