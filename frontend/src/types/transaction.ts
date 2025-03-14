export type TransactionStatus = 'pending' | 'completed' | 'failed';
export type TransactionCategory = 'Food & Dining' | 'Income' | 'Shopping' | 'Transportation' | 'Bills' | 'Other';

export interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  merchant: string;
  status: TransactionStatus;
  notes?: string;
  attachments?: string[];
}
