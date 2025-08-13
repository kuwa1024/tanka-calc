import { Container, Grid, Typography } from '@mui/material';
import { MainList } from './MainList';
import { SideCategory } from './SideCategory';
import { SideProduct } from './SideProduct';
import { SideSort } from './SideSort';

export const Tanka = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {/* サイドバー */}
        <Grid size={{ xs: 12, md: 3 }}>
          <SideCategory />
          <hr />
          <SideProduct />
          <hr />
          <SideSort />
          <hr />
          <Typography variant="caption" color="error">
            単価は(金額 - 割引) × 割引率 ÷ 数量で計算されます
          </Typography>
        </Grid>
        {/* メインコンテンツ */}
        <Grid size={{ xs: 12, md: 9 }}>
          <MainList />
        </Grid>
      </Grid>
    </Container>
  );
};
