 import { CarCard, Hero, HeroFilter, SearchBar } from '@/components'
import { fetchCars } from '@/utils';
import Image from 'next/image'

export default async function Home() {
  const cars = await fetchCars("10", "corolla");
  const isCars = !Array.isArray(cars) || !cars || cars.length < 1
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            {/* <HeroFilter title='fuel'/>
            <HeroFilter title='year'/> */}
          </div>
        </div>
        {!isCars ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map(car => (
              <CarCard key={car.model} car={car} />
              ))}
            </div>
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className="text-black text-xl">Opps... no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
