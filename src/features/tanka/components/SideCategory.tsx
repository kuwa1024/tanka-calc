import { Grid } from '@mui/material';
import { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { Button } from '../../../components/Button';
import SelectInput from '../../../components/SelectInput';
import { useSelectCategory } from '../hooks/useSelectCategory';
import { CategoryDialog } from './CategoryDialog';

export const SideCategory = () => {
  const { category, methods } = useSelectCategory();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid container spacing={2} direction="row">
        <Grid size={8}>
          <FormProvider {...methods}>
            <SelectInput name="categoryValue" label="カテゴリー選択" options={category} />
          </FormProvider>
        </Grid>
        <Grid size={3}>
          <Button label="編集" onClick={() => setOpen(true)} sx={{ margin: 1 }} />
        </Grid>
      </Grid>
      <CategoryDialog open={open} handleClose={handleClose} />
    </>
  );
};
