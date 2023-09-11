'use client'

import Link from 'next/link'
import Image from 'next/image'

import HeroButton  from './HeroButton'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className='max-w-[1440px] flex mx-auto justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className="  justify-center items-center">
            <Image src="/logo.svg"
                width={118}
                height={18}
                alt='Logo Cars Shop'
                className='object-contain'
            />
        </Link>
        <HeroButton
        title='Sign In'
        btnType="button"
        handleClick={()=> {}}
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  )
}

export default Navbar
