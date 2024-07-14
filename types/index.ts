import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export interface CustomButtonProps {
  title: string
  btnType?: 'button' | 'submit'
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface FilterProps {
  manufacturer?: string
  year?: number
  model?: string
  limit?: number
  fuel?: string
}

export interface HomeProps {
  searchParams: FilterProps
}

export interface SearchManufacturerProps {
  selected: string
  setSelected: (selected: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface OptionProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string
  options: OptionProps[]
  setFilter: Dispatch<SetStateAction<string> | SetStateAction<number>>
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
  setLimit: (limit: number) => void
}

export interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void
  setModel: (model: string) => void
}
