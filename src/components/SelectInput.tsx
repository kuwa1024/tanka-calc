import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface option {
  label: string;
  value: string;
}

interface props {
  name: string;
  label: string;
  options?: option[];
}

export default function SelectInput({ name, label, options }: props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const fieldError = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth size="small" error={!!fieldError} variant="standard">
          <InputLabel id={`${name}Label`}>{label}</InputLabel>
          <Select {...field} labelId={`${name}Label`}>
            {options?.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{fieldError}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
