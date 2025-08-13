import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from '../../../components/Button';
import { ProductForm } from './ProductForm';

interface props {
  open: boolean;
  handleClose: () => void;
}

export const ProductDialog = ({ open, handleClose }: props) => {
  return (
    <Dialog open={open} onClose={handleClose} disableRestoreFocus>
      <DialogTitle>商品登録</DialogTitle>
      <DialogContent>
        <ProductForm />
      </DialogContent>
      <DialogActions>
        <Button label="閉じる" onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};
