import DeleteIcon from '@mui/icons-material/Delete';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { Button } from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';
import { useCategory } from '../hooks/useCategory';

interface props {
  open: boolean;
  handleClose: () => void;
}

export const CategoryDialog = ({ open, handleClose }: props) => {
  const { category, saveMethods, onSaveSubmit, deleteMethods, onDeleteSubmit } = useCategory();

  return (
    <Dialog open={open} onClose={handleClose} disableRestoreFocus>
      <DialogTitle>カテゴリー編集</DialogTitle>
      <DialogContent>
        <FormProvider {...saveMethods}>
          <form onSubmit={saveMethods.handleSubmit(onSaveSubmit)}>
            <Grid container spacing={2} direction="row">
              <Grid size={8}>
                <TextInput name="label" label="カテゴリー名" autoFocus />
              </Grid>
              <Grid size={3}>
                <Button type={'submit'} label="保存" sx={{ margin: 1 }} />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
        <List>
          <form onSubmit={deleteMethods.handleSubmit(onDeleteSubmit)}>
            <input type="hidden" {...deleteMethods.register('value')} />
            {category.map((cat) => (
              <ListItem
                key={cat.value}
                disablePadding
                secondaryAction={
                  <IconButton
                    type="submit"
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteMethods.setValue('value', cat.value)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={cat.label}
                  slotProps={{
                    primary: {
                      noWrap: true,
                    },
                  }}
                  sx={{ marginRight: 5 }}
                />
              </ListItem>
            ))}
          </form>
        </List>
      </DialogContent>
      <DialogActions>
        <Button label="閉じる" onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};
