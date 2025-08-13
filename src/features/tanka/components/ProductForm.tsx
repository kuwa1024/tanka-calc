import { Grid } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { Button } from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';
import { useProduct } from '../hooks/useProduct';

export const ProductForm = () => {
  const { saveMethods, onSaveSubmit } = useProduct();
  return (
    <FormProvider {...saveMethods}>
      <form onSubmit={saveMethods.handleSubmit(onSaveSubmit)}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <TextInput name="category" label="カテゴリー" fullWidth disabled />
          </Grid>
          <Grid size={12}>
            <TextInput name="name" label="商品名" fullWidth />
          </Grid>
          <Grid size={12}>
            <TextInput name="price" label="金額" type="number" adornment="円" fullWidth />
          </Grid>
          <Grid size={12}>
            <TextInput name="quantity" label="数量" type="number" adornment="個" fullWidth />
          </Grid>
          <Grid size={12}>
            <TextInput name="discount" label="割引" type="number" adornment="円" fullWidth />
          </Grid>
          <Grid size={12}>
            <TextInput name="discountRate" label="割引率" type="number" adornment="％" fullWidth />
          </Grid>
          <Grid size={12}>
            <Button type="submit" label="商品登録" fullWidth />
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};
