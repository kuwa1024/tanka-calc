import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import { ProductDialog } from './ProductDialog';
import { ProductForm } from './ProductForm';

export const SideProduct = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isMobile ? (
        <>
          <Button label="商品登録" fullWidth onClick={() => setOpen(true)} />
          <ProductDialog open={open} handleClose={handleClose} />
        </>
      ) : (
        <ProductForm />
      )}
    </>
  );
};
