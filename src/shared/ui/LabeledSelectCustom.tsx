import type { SelectChangeEvent } from '@mui/material'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import type { FC } from 'react'

interface LabeledSelectCustomProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const LabeledSelectCustom: FC<LabeledSelectCustomProps> = ({
  label,
  value,
  options,
  onChange,
}) => (
  <FormControl>
    <InputLabel>{label}</InputLabel>
    <Select variant={'filled'}
            value={value}
            label={label}
            onChange={(e: SelectChangeEvent) => onChange(e.target.value)}>
      {options.map((opt) => (
        <MenuItem key={opt.label}
                  value={value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)