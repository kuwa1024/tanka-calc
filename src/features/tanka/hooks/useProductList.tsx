import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { removeProduct } from '../tankaSlice';

const deleteSchema = z.object({
  id: z.string().min(1),
});
type formDeleteValues = z.infer<typeof deleteSchema>;

export const useProductList = () => {
  const dispatch = useAppDispatch();
  const selectCategory = useAppSelector((state) => state.tanka.selectCategory);
  const selectSort = useAppSelector((state) => state.tanka.selectSort);
  const product = useAppSelector((state) => state.tanka.product);

  const list = product.filter((p) => p.category === selectCategory || selectCategory === 'all');

  if (selectSort === 'unitPriceAsc') {
    list.sort((a, b) => a.unitPrice - b.unitPrice);
  } else if (selectSort === 'unitPriceDesc') {
    list.sort((a, b) => b.unitPrice - a.unitPrice);
  } else if (selectSort === 'priceAsc') {
    list.sort((a, b) => a.price - b.price);
  } else if (selectSort === 'priceDesc') {
    list.sort((a, b) => b.price - a.price);
  } else if (selectSort === 'quantityAsc') {
    list.sort((a, b) => a.quantity - b.quantity);
  } else if (selectSort === 'quantityDesc') {
    list.sort((a, b) => b.quantity - a.quantity);
  } else if (selectSort === 'discountAsc') {
    list.sort((a, b) => {
      const discount_a = a.discount ?? 0;
      const discount_b = b.discount ?? 0;
      return discount_a - discount_b;
    });
  } else if (selectSort === 'discountDesc') {
    list.sort((a, b) => {
      const discount_a = a.discount ?? 0;
      const discount_b = b.discount ?? 0;
      return discount_b - discount_a;
    });
  } else if (selectSort === 'discountRateAsc') {
    list.sort((a, b) => {
      const discountRate_a = a.discountRate ?? 0;
      const discountRate_b = b.discountRate ?? 0;
      return discountRate_a - discountRate_b;
    });
  } else if (selectSort === 'discountRateDesc') {
    list.sort((a, b) => {
      const discountRate_a = a.discountRate ?? 0;
      const discountRate_b = b.discountRate ?? 0;
      return discountRate_b - discountRate_a;
    });
  }

  const deleteMethods = useForm<formDeleteValues>({
    resolver: zodResolver(deleteSchema),
  });

  const onDeleteSubmit = (data: formDeleteValues) => {
    dispatch(removeProduct(data.id));
  };

  return {
    list,
    deleteMethods,
    onDeleteSubmit,
  };
};
