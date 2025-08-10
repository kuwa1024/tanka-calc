import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import z from 'zod';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { addCategory, removeCategory } from '../tankaSlice';

const saveSchema = z.object({
  label: z
    .string()
    .min(1, { message: 'カテゴリー名を入力してください' })
    .max(100, 'カテゴリー名は100文字以内で入力してください'),
});
type formSaveValues = z.infer<typeof saveSchema>;

const deleteSchema = z.object({
  value: z.string().min(1),
});
type formDeleteValues = z.infer<typeof deleteSchema>;

export const useCategory = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.tanka.category);

  const saveMethods = useForm<formSaveValues>({
    resolver: zodResolver(saveSchema),
  });

  const onSaveSubmit = (data: formSaveValues) => {
    dispatch(addCategory({ value: v4(), label: data.label }));
    saveMethods.reset();
  };

  const deleteMethods = useForm<formDeleteValues>({
    resolver: zodResolver(deleteSchema),
  });

  const onDeleteSubmit = (data: formDeleteValues) => {
    dispatch(removeCategory(data.value));
  };

  return {
    category,
    saveMethods,
    onSaveSubmit,
    deleteMethods,
    onDeleteSubmit,
  };
};
