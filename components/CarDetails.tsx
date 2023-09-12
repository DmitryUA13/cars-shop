'use client'

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition} from '@headlessui/react';


import { CarProps } from "@/types";



interface CarDetailsProps{
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps
}


const CarDetails = ({isOpen,closeModal, car }:CarDetailsProps) => {
  return (
   <>
   <Transition appear show={isOpen} as={Fragment}>
    <Dialog as='div' className='relative z-10' onClose={closeModal}>
      <Transition.Child
      as={Fragment}
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='ease-in duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'

      >
        <div className='fixed inset-0 bg-black bg-opacity-25'/>
      </Transition.Child>
    </Dialog>
   </Transition>
   </>
  )
}

export default CarDetails