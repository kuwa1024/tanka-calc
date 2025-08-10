import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import z from 'zod';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { addProduct } from '../tankaSlice';

const schema = z.object({
  category: z.string(),
  name: z
    .string()
    .min(1, { message: '商品名を入力してください' })
    .max(100, '商品名は100文字以内で入力してください'),
  price: z.coerce
    .number({ message: '金額を入力してください' })
    .positive({ message: '金額は1円以上を入力してください' })
    .int({ message: '金額は整数を入力してください' }),
  quantity: z.coerce
    .number({ message: '数量を入力してください' })
    .positive({ message: '数量は1個以上を入力してください' })
    .int({ message: '数量は整数を入力してください' }),
  discount: z.coerce
    .number({ message: '割引を入力してください' })
    .nonnegative({ message: '割引は0円以上を入力してください' })
    .int({ message: '割引は整数を入力してください' }),
  discountRate: z.coerce
    .number({ message: '割引率  を入力してください' })
    .nonnegative({ message: '割引率は0％以上を入力してください' })
    .lte(100, { message: '割引率は100％以下を入力してください' })
    .int({ message: '割引率は整数を入力してください' }),
});
type formSaveValues = z.infer<typeof schema>;

export const useProduct = () => {
  const dispatch = useAppDispatch();
  const category = [
    { value: 'none', label: '未設定' },
    ...useAppSelector((state) => state.tanka.category),
  ];
  const selectCategory = useAppSelector((state) => state.tanka.selectCategory);
  const categoryName = category.find((cat) => cat.value === selectCategory)?.label || '未設定';

  const saveMethods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      category: categoryName,
    },
  });

  const onSaveSubmit = (data: formSaveValues) => {
    const product = {
      id: v4(),
      category: selectCategory,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      discount: data.discount,
      discountRate: data.discountRate,
      unitPrice: ((data.price - data.discount) * data.discountRate) / 100 / data.quantity,
    };
    dispatch(addProduct(product));
    saveMethods.reset();
  };

  const { setValue } = saveMethods;
  useEffect(() => {
    setValue('category', categoryName);
  }, [categoryName, setValue]);

  return {
    categoryName,
    saveMethods,
    onSaveSubmit,
  };
};
