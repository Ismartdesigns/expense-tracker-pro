export interface Settings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  currency: string;
  language: string;
  theme: 'light' | 'dark';
  budgetAlerts: boolean;
  twoFactorAuth: boolean;
  defaultView: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export interface ProfileSettings {
  name: string;
  email: string;
  avatar?: string;
}
