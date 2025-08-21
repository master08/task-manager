export interface Category {
  id: string;
  name: string;
  description?: string;
  color: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  tasksCount?: number;
}

export interface CategoryFormData {
  name: string;
  description?: string;
  color: string;
}

export const DEFAULT_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Yellow
  '#EF4444', // Red
  '#8B5CF6', // Purple
  '#F97316', // Orange
  '#06B6D4', // Cyan
  '#84CC16', // Lime
  '#EC4899', // Pink
  '#6B7280', // Gray
];