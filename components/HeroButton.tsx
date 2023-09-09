'use client'
import { HeroButtonProps } from "@/types"
import Image from "next/image"


const HeroButton = ({title, containerStyles, handleClick} : HeroButtonProps) => {
  return (
    <button
    disabled={false}
    type="button"
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={'flex-1'}>{title}</span>
    </button>
  )
}

export default HeroButton
