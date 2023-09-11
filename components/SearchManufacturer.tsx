'use client'

import { SearchManufactorerProps } from '@/types'
import {useState, Fragment} from 'react'
import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';



const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufactorerProps) => {

    const [query, setQuery] = useState("");
    const filteredManufacterers = query === ''
    ? manufacturers
    : manufacturers.filter(item => (
      
      item.toLocaleLowerCase()
      .replace(/\s+/g, '')
      .includes(
        query.toLocaleLowerCase()
        .replace(/\s+/g, '')
        )
    ))
    // console.log(filteredManufacterers)
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className="absolute top-[14px]">
                <Image
                src="/car-logo.svg"
                alt="car logo"
                width={20}
                height={20}
                className='Car_Logo'
                />
            </Combobox.Button>
            <Combobox.Input 
                className='search-manufacturer__input'
                placeholder='Volcswagen'
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e)=>setQuery(e.target.value)}
            />
            <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leave-to='opacity-0'
            afterEnter={()=>setQuery('')}
            >
                <Combobox.Options>
                  {filteredManufacterers.length === 0 && query !== "" 
                    ?(
                    <Combobox.Option
                      value={query}
                      className="search-manufacturer__option"
                    >
                    </Combobox.Option>
                  ) : (filteredManufacterers.map(item => (
                      <Combobox.Option
                      key={item}
                      value={item}
                      className={({active})=> `
                      relative search-manufacturer__option
                      ${active ? 'bg-primary-blue text-white' : "text-gray"}
                      `}
                      >
                        {item}
                      </Combobox.Option>
                  )))
                }
                </Combobox.Options>
                
            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
