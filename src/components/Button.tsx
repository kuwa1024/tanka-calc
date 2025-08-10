import { Button as MuiButton } from '@mui/material';

interface props {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  sx?: React.CSSProperties;
}
export const Button = ({ type, label, onClick, fullWidth = false, sx }: props) => {
  return (
    <MuiButton type={type} variant="contained" onClick={onClick} fullWidth={fullWidth} sx={sx}>
      {label}
    </MuiButton>
  );
};
