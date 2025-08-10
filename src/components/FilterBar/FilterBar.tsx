import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { memo } from 'react'
import { baseOption, genderOptions, natOptions } from '~/components/FilterBar/options.ts'
import { LabeledSelectCustom } from '~/shared/ui'

interface FilterBarProps {
  gender: string;
  nationality: string;
  onGenderChange: (value: string) => void;
  onNationalityChange: (value: string) => void;
  onReset: () => void;
}

const FilterBarComponent = ({
  gender,
  nationality,
  onGenderChange,
  onNationalityChange,
  onReset,
}: FilterBarProps) => {
  return (
    <Box display="flex"
         flexDirection="row"
         gap={2}
         mb={2}>
      <LabeledSelectCustom label={'Gender'}
                           value={gender}
                           options={[...baseOption, ...genderOptions]}
                           onChange={onGenderChange} />
      
      <LabeledSelectCustom label={'Nationality'}
                           value={nationality}
                           options={[...baseOption, ...natOptions]}
                           onChange={onNationalityChange} />
      
      <Button
        variant="contained"
        onClick={onReset}
        fullWidth>
        Reset filters
      </Button>
    </Box>
  )
}

export const FilterBar = memo(FilterBarComponent)