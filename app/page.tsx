'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { CarCard } from '@/components/CarCard'
import { CustomFilter } from '@/components/CustomFilter'
import { Hero } from '@/components/Hero'
import { SearchBar } from '@/components/SearchBar'
import { ShowMore } from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'

export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)

    try {
      const result = await fetchCars({
        manufacturer: manufacturer ?? '',
        year: year ?? 2022,
        fuel: fuel ?? '',
        limit: limit ?? 10,
        model: model ?? '',
      })

      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuel, limit, year, manufacturer, model])

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="padding-x padding-y max-width mt-12" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => <CarCard car={car} />)}
            </div>

            {loading && (
              <div className="flex-center mt-16 w-full">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
