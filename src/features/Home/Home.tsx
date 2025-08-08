import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

export const Home = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {/* サイドバー */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Grid container spacing={2} direction="row">
              <Grid size={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">カテゴリー</InputLabel>
                  <Select labelId="demo-select-small-label" id="demo-select-small" label="Age">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={3}>
                <Button variant="contained">登録</Button>
              </Grid>
            </Grid>
            <hr />
            {isMobile ? (
              '商品登録（モーダル）'
            ) : (
              <Grid container spacing={1}>
                <Grid size={12}>
                  <TextField
                    id="category"
                    label="カテゴリー"
                    value={'カテゴリーA'}
                    variant="outlined"
                    size="small"
                    disabled
                    fullWidth
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    id="product"
                    label="商品名"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    id="price"
                    label="金額"
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    slotProps={{
                      input: {
                        endAdornment: <InputAdornment position="start">円</InputAdornment>,
                      },
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    id="quantity"
                    label="数量"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    slotProps={{
                      input: {
                        endAdornment: <InputAdornment position="start">個</InputAdornment>,
                      },
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    id="discount"
                    label="割引"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    slotProps={{
                      input: {
                        endAdornment: <InputAdornment position="start">円</InputAdornment>,
                      },
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    id="discountRate"
                    label="割引率"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    slotProps={{
                      input: {
                        endAdornment: <InputAdornment position="start">％</InputAdornment>,
                      },
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <Button fullWidth variant="contained">
                    商品登録
                  </Button>
                </Grid>
              </Grid>
            )}
            <hr />
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-small-label">並び替え</InputLabel>
              <Select labelId="demo-select-small-label" id="demo-select-small" label="Age">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <hr />
          </Grid>

          {/* メインコンテンツ */}
          <Grid size={{ xs: 12, md: 9 }}>
            {rows.map((row) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id={row.id.toString()}
                  >
                    <Grid container spacing={2} width={'100%'}>
                      <Grid size={6}>
                        <Typography variant="caption">商品名</Typography>
                        <Typography variant="body1" noWrap>
                          {row.product}
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
                          {row.unitPrice.toLocaleString()}円
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2} width={'100%'}>
                      <Grid size={3}>
                        <Typography variant="caption">数量</Typography>
                        <Typography variant="body1" noWrap width={80}>
                          {row.quantity}個
                        </Typography>
                      </Grid>
                      <Grid size={3}>
                        <Typography variant="caption">割引</Typography>
                        <Typography variant="body1" noWrap width={80}>
                          {row.discount}円
                        </Typography>
                      </Grid>
                      <Grid size={3}>
                        <Typography variant="caption">割引率</Typography>
                        <Typography variant="body1" noWrap width={80}>
                          {row.discountRate}％
                        </Typography>
                      </Grid>
                      <Grid size={2}>
                        <Typography variant="caption">登録日</Typography>
                        <Typography variant="body1" noWrap width={80}>
                          08/08
                        </Typography>
                      </Grid>
                      <Grid size={1}>
                        <DeleteIcon />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const rows = [
  {
    id: 1,
    product: '商品A商品A商品A商品A商品A商品A',
    price: 10000,
    quantity: 10,
    discount: 35,
    discountRate: 35,
    unitPrice: 30000,
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
    unitPrice: 0,
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
