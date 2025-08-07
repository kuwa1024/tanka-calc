import { Button, Grid, TextField } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import './App.css';

const columns: GridColDef[] = [
  { field: 'product', headerName: '商品' },
  { field: 'price', headerName: '金額' },
  { field: 'quantity', headerName: '数量' },
  { field: 'discount', headerName: '割引' },
  { field: 'discountRate', headerName: '割引率' },
  { field: 'unitPrice', headerName: '単価' },
];

const rows = [
  {
    id: 1,
    product: '商品A',
    price: 10000,
    quantity: 10,
    discount: 35,
    discountRate: 35,
    unitPrice: 35,
  },
  {
    id: 2,
    product: '商品B',
    price: 10000,
    quantity: 10,
    discount: 42,
    discountRate: 42,
    unitPrice: 42,
  },
  {
    id: 3,
    product: '商品C',
    price: 10000,
    quantity: 10,
    discount: 45,
    discountRate: 45,
    unitPrice: 45,
  },
  {
    id: 4,
    product: '商品A',
    price: 10000,
    quantity: 10,
    discount: 16,
    discountRate: 16,
    unitPrice: 16,
  },
  {
    id: 5,
    product: '商品A',
    price: 10000,
    quantity: 10,
    discount: null,
    discountRate: null,
    unitPrice: null,
  },
  {
    id: 6,
    product: '商品A',
    price: 10000,
    quantity: 10,
    discount: 150,
    discountRate: 150,
    unitPrice: 150,
  },
  {
    id: 7,
    product: '商品A',
    price: 10000,
    quantity: 10,
    discount: 44,
    discountRate: 44,
    unitPrice: 44,
  },
  {
    id: 8,
    product: '商品A',
    price: 10000,
    quantity: 10,
    discount: 36,
    discountRate: 36,
    unitPrice: 36,
  },
  {
    id: 9,
    product: '商品A',
    price: 10000,
    quantity: 10,
    discount: 65,
    discountRate: 65,
    unitPrice: 65,
  },
];

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={4}>
          <TextField id="outlined-basic0" label="商品" variant="outlined" />
        </Grid>
        <Grid size={4}>
          <TextField id="outlined-basic1" label="金額" variant="outlined" />
        </Grid>
        <Grid size={4}>
          <TextField id="outlined-basic2" label="数量" variant="outlined" />
        </Grid>
        <Grid size={4}>
          <TextField id="outlined-basic3" label="割引" variant="outlined" />
        </Grid>
        <Grid size={4}>
          <TextField id="outlined-basic4" label="割引率" variant="outlined" />
        </Grid>
        <Grid size={4}>
          <Button variant="contained">Contained</Button>
        </Grid>
      </Grid>
      <DataGrid rows={rows} columns={columns} checkboxSelection sx={{ border: 0 }} />
    </>
  );
}

export default App;
