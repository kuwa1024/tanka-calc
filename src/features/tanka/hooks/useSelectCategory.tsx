import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { setSelectCategory } from '../tankaSlice';

const schema = z.object({
  categoryValue: z.string(),
});
type formValues = z.infer<typeof schema>;

export const useSelectCategory = () => {
  const dispatch = useAppDispatch();
  const category = [
    { value: 'none', label: '未設定' },
    ...useAppSelector((state) => state.tanka.category),
  ];
  const selectCategory = useAppSelector((state) => state.tanka.selectCategory);

  const methods = useForm<formValues>({
    resolver: zodResolver(schema),
    defaultValues: { categoryValue: selectCategory },
  });
  const { watch } = methods;
  const categoryValue = watch('categoryValue');

  useEffect(() => {
    dispatch(setSelectCategory(categoryValue));
  }, [categoryValue, dispatch]);

  return {
    category,
    methods,
  };
};
