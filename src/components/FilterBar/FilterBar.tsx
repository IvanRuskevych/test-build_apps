import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { memo } from 'react'
import { baseOption, genderOptions, natOptions } from '~/components/FilterBar/options.ts'
import { useBreakpoints } from '~/hooks'
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
  
  const { isMobile } = useBreakpoints()
  
  return (
    <Box display="flex"
         flexDirection={isMobile ? 'column' : 'row'}
         gap={2}
         mb={2}>
      <LabeledSelectCustom label={'Gender'}
                           value={gender}
                           options={[...baseOption, ...genderOptions]}
                           onChange={onGenderChange}
                           sx={{
                             flex: isMobile ? '1 1 auto' : 1,
                           }} />
      
      <LabeledSelectCustom label={'Nationality'}
                           value={nationality}
                           options={[...baseOption, ...natOptions]}
                           onChange={onNationalityChange}
                           sx={{
                             flex: isMobile ? '1 1 auto' : 1,
                           }} />
      
      <Button
        variant="contained"
        onClick={onReset}
        fullWidth
        sx={{
          backgroundColor: 'secondary.main',
          width: isMobile ? '100%' : 125,
          flexShrink: 0,
        }}>
        Reset filters
      </Button>
    </Box>
  )
}

export const FilterBar = memo(FilterBarComponent)