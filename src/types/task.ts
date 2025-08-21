export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  categoryId: string;
  userId: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  tags?: string[];
}

export interface TaskFormData {
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  categoryId: string;
  dueDate?: Date;
  tags?: string[];
}

export interface TaskFilters {
  status?: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority?: 'low' | 'medium' | 'high';
  categoryId?: string;
  userId?: string;
  dateFrom?: Date;
  dateTo?: Date;
  search?: string;
}

export const TASK_STATUSES = [
  { value: 'pending', label: 'Pendiente', color: 'bg-gray-100 text-gray-800' },
  { value: 'in_progress', label: 'En Progreso', color: 'bg-blue-100 text-blue-800' },
  { value: 'completed', label: 'Completada', color: 'bg-green-100 text-green-800' },
  { value: 'cancelled', label: 'Cancelada', color: 'bg-red-100 text-red-800' },
] as const;

export const TASK_PRIORITIES = [
  { value: 'low', label: 'Baja', color: 'bg-green-100 text-green-800' },
  { value: 'medium', label: 'Media', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'high', label: 'Alta', color: 'bg-red-100 text-red-800' },
] as const;