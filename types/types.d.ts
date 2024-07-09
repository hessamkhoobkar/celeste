declare global {
  interface ExpenseType {
    created_by?: string;
    amount: number;
    category: string;
    date: Date;
    description: string;
  }
}

export default global;
