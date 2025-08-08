import { Box } from '@mui/material'
import { memo } from 'react'
import { baseOption, genderOptions, natOptions } from '~/components/FilterBar/options.ts'
import { LabeledSelectCustom } from '~/shared/ui'

interface FilterBarProps {
  gender: string;
  nationality: string;
  onGenderChange: (value: string) => void;
  onNationalityChange: (value: string) => void;
}

const FilterBarComponent = ({
  gender,
  nationality,
  onGenderChange,
  onNationalityChange,
}: FilterBarProps) => {
  return (
    <Box>
      <LabeledSelectCustom label={'Gender'}
                           value={gender}
                           options={[...baseOption, ...genderOptions]}
                           onChange={onGenderChange} />
      
      <LabeledSelectCustom label={'Nationality'}
                           value={nationality}
                           options={[...baseOption, ...natOptions]}
                           onChange={onNationalityChange} />
    </Box>
  )
}

export const FilterBar = memo(FilterBarComponent)