import { z } from 'zod';

export const useTodoFormSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  createdAt: z.date(),
  isDone: z.boolean(),
});

export type CreateTodoFormData = z.infer<typeof useTodoFormSchema>;

