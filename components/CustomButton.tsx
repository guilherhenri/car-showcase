'use client'

import Image from 'next/image'

import { CustomButtonProps } from '@/types'

export function CustomButton({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      type={btnType ?? 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}
