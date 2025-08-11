import type { SelectChangeEvent, SxProps, Theme } from '@mui/material'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { type FC, memo } from 'react'

interface LabeledSelectCustomProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  sx?: SxProps<Theme>
  size?: 'small' | 'medium'
}

const LabeledSelectCustomComponent: FC<LabeledSelectCustomProps> = ({
  label,
  value,
  options,
  onChange,
  sx,
  size,
}) => (
  <FormControl fullWidth
               sx={sx}
               size={size}>
    <InputLabel>{label}</InputLabel>
    <Select value={value}
            label={label}
            onChange={(e: SelectChangeEvent) => onChange(e.target.value)}>
      {options.map((opt) => (
        <MenuItem key={opt.value}
                  value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export const LabeledSelectCustom = memo(LabeledSelectCustomComponent)