import { InputAdornment, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface props {
  name: string;
  label: string;
  type?: string;
  fullWidth?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  adornment?: string;
}

export const TextInput = ({
  name,
  label,
  type = 'text',
  fullWidth = false,
  autoFocus = false,
  disabled = false,
  adornment,
}: props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = errors[name]?.message as string | undefined;

  return (
    <TextField
      size="small"
      label={label}
      type={type}
      {...register(name)}
      error={!!fieldError}
      helperText={fieldError}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      disabled={disabled}
      margin="dense"
      slotProps={{
        htmlInput: {
          maxLength: 100,
        },
        input: {
          endAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
        },
      }}
    />
  );
};
