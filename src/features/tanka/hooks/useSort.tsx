import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { sort } from '../constants';
import { setSelectSort } from '../tankaSlice';

const schema = z.object({
  sortValue: z.string(),
});
type formValues = z.infer<typeof schema>;

export const useSort = () => {
  const dispatch = useAppDispatch();
  const selectSort = useAppSelector((state) => state.tanka.selectSort);

  const methods = useForm<formValues>({
    resolver: zodResolver(schema),
    defaultValues: { sortValue: selectSort },
  });
  const { watch } = methods;
  const sortValue = watch('sortValue');

  useEffect(() => {
    dispatch(setSelectSort(sortValue));
  }, [sortValue, dispatch]);

  return {
    sort,
    methods,
  };
};
