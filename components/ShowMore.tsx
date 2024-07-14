'use client'

import { ShowMoreProps } from '@/types'

import { CustomButton } from './CustomButton'

export function ShowMore({ pageNumber, isNext, setLimit }: ShowMoreProps) {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10

    setLimit(newLimit)
  }

  return (
    <div className="flex-center mt-10 w-full gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}
