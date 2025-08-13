import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useProductList } from '../hooks/useProductList';

export const MainList = () => {
  const { list, deleteMethods, onDeleteSubmit } = useProductList();
  return (
    <form onSubmit={deleteMethods.handleSubmit(onDeleteSubmit)}>
      <input type="hidden" {...deleteMethods.register('id')} />
      {list.map((row) => {
        return (
          <Accordion key={row.id}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id={row.id.toString()}
            >
              <Grid container spacing={2} width={'100%'}>
                <Grid size={6}>
                  <Typography variant="caption">商品名</Typography>
                  <Typography variant="body1" noWrap>
                    {row.name}
                  </Typography>
                </Grid>
                <Grid size={3}>
                  <Typography variant="caption">金額</Typography>
                  <Typography variant="body1" noWrap>
                    {row.price.toLocaleString()}円
                  </Typography>
                </Grid>
                <Grid size={3}>
                  <Typography variant="caption">単価</Typography>
                  <Typography variant="body1" noWrap>
                    {row.unitPrice.toFixed(2).toLocaleString()}円
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2} width={'100%'}>
                <Grid size={3}>
                  <Typography variant="caption">数量</Typography>
                  <Typography variant="body1" noWrap>
                    {row.quantity}個
                  </Typography>
                </Grid>
                <Grid size={3}>
                  <Typography variant="caption">割引</Typography>
                  <Typography variant="body1" noWrap>
                    {row.discount}円
                  </Typography>
                </Grid>
                <Grid size={3}>
                  <Typography variant="caption">割引率</Typography>
                  <Typography variant="body1" noWrap>
                    {row.discountRate}％
                  </Typography>
                </Grid>
                <Grid size={2}>
                  <Typography variant="caption">登録日</Typography>
                  <Typography variant="body1" noWrap>
                    {row.date}
                  </Typography>
                </Grid>
                <Grid size={1}>
                  <IconButton
                    type="submit"
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteMethods.setValue('id', row.id)}
                    sx={{ margin: 1 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </form>
  );
};
