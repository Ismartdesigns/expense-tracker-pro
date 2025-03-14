export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'Food & Dining': '#FF6B6B',
    'Income': '#4CAF50',
    'Shopping': '#2196F3',
    'Transportation': '#9C27B0',
    'Bills': '#FF9800',
    'Other': '#757575',
  };
  return colors[category] || colors['Other'];
};

export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};
