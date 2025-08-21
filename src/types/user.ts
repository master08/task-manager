export interface User {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  avatar?: string;
}

export interface UserFormData {
  email: string;
  displayName: string;
  password?: string;
  role: 'admin' | 'user';
}

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}