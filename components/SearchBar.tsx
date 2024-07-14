'use client'

import Image from 'next/image'
import { useState } from 'react'

import { SearchBarProps } from '@/types'

import { SearchManufacturer } from './SearchManufacturer'

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`z-10 -ml-3 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

export function SearchBar({ setManufacturer, setModel }: SearchBarProps) {
  const [searchManufacturer, setSearchManufacturer] = useState('')
  const [searchModel, setSearchModel] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute ml-4 h-[20px] w-[20px]"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}
