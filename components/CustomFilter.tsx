'use client'

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { CustomFilterProps } from '@/types'

export function CustomFilter({ options, setFilter }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
          setFilter(e.value)
        }}
      >
        <div className="relative z-10 w-fit">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none px-4 py-2
                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                    >
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
