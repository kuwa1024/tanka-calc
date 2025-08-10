import { FormProvider } from 'react-hook-form';
import SelectInput from '../../../components/SelectInput';
import { useSort } from '../hooks/useSort';

export const SideSort = () => {
  const { sort, methods } = useSort();
  return (
    <FormProvider {...methods}>
      <SelectInput name="sortValue" label="カテゴリー選択" options={sort} />
    </FormProvider>
  );
};
