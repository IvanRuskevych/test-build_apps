export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

export const baseOption = [
  { value: 'all', label: 'All' },
]

const nationalities = ['us', 'gb', 'fr', 'de', 'au']

export const natOptions = [...nationalities.map((nat) => ({ value: nat, label: nat.toUpperCase() }))]