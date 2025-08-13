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
            単価は(金額 - 割引) × 割引率 ÷ 数量で計算されます。
          </Typography>
        </Grid>
        {/* メインコンテンツ */}
        <Grid size={{ xs: 12, md: 9 }}>
          <MainList />
          <Typography variant="h1" sx={{ fontSize: '1rem', marginTop: '1rem' }}>
            単価計算ツール｜割引・数量・カテゴリーで安くお得に比較
          </Typography>
          <hr />
          <Typography variant="h2" sx={{ fontSize: '1rem' }}>
            簡単に単価を計算して安くお得に買える
          </Typography>
          <Typography variant="body1" component="p" sx={{ fontSize: '0.8rem' }}>
            金額、数量、割引、割引率を入力するだけで商品の単価を自動計算。カテゴリーを作成して絞り込み可能なので、用途ごとに商品を分類して安くお得に比較できます。
          </Typography>
          <hr />
          <Typography variant="h2" sx={{ fontSize: '1rem' }}>
            こんな方におすすめ
          </Typography>
          <Typography component="div" sx={{ fontSize: '0.8rem' }}>
            <ul>
              <li>仕入れや購入時のコストを簡単に確認したい方</li>
              <li>複数の商品をカテゴリー別に比較して、安くてお得な商品をすぐに見つけたい方</li>
              <li>割引額や割引率を含めて正確な単価を知りたい方</li>
            </ul>
          </Typography>
          <hr />
          <Typography variant="h2" sx={{ fontSize: '1rem' }}>
            単価計算の例
          </Typography>
          <Typography variant="body1" component="p" sx={{ fontSize: '0.8rem' }}>
            例えば、商品A：金額1,000円、数量5個、割引10%、カテゴリー「文房具」の場合、単価は198円と安さとお得度を一目で確認可能です。
          </Typography>
          <hr />
          <Typography variant="h2" sx={{ fontSize: '1rem' }}>
            カテゴリーで絞り込み可能
          </Typography>
          <Typography variant="body1" component="p" sx={{ fontSize: '0.8rem' }}>
            作成したカテゴリーごとに商品を表示・比較できるので、トイレットペーパー・ティッシュペーパー・オムツなど目的別に管理しつつ、安くお得な商品をすぐに見つけられます。
          </Typography>
          <hr />
          <Typography variant="h2" sx={{ fontSize: '1rem' }}>
            さらに便利な使い方
          </Typography>
          <Typography component="div" sx={{ fontSize: '0.8rem' }}>
            <ul>
              <li>複数の割引率や数量をまとめて計算</li> <li>安い順に並べてお得度を比較</li>
              <li>仕入れリストや買い物リストの作成にも活用可能</li>
            </ul>
          </Typography>
          <hr />
          <Typography variant="h2" sx={{ fontSize: '1rem' }}>
            無料で使えるWEBツール
          </Typography>
          <Typography variant="body1" component="p" sx={{ fontSize: '0.8rem' }}>
            会員登録不要、ブラウザだけで利用可能。スマホ・PCどちらでも快適に使用できます。
          </Typography>
          <hr />
          <Typography variant="h2" sx={{ fontSize: '1rem' }}>
            よくある質問（FAQ）
          </Typography>
          <Typography component="div" sx={{ fontSize: '0.8rem' }}>
            <dl>
              <dt>Q1. 割引額と割引率はどちらでも計算できますか？</dt>
              <dd>A. はい。金額と数量、どちらの情報でも単価を自動計算可能です。</dd>
              <dt>Q2. カテゴリーは自由に作れますか？</dt>
              <dd>A. はい。自分の目的に合わせて複数のカテゴリーを作成・編集できます。</dd>
              <dt>Q3. 計算結果は保存できますか？</dt>
              <dd>
                A.
                ブラウザ上のローカルストレージに自動で保存されるので、タブを閉じたりページを更新しても安心です。ブラウザのキャッシュを消すとデータも消えるのでお気をつけください。
              </dd>
            </dl>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
