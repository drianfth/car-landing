'use client'

import { FC } from 'react'
import { CustomButton } from '.'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
    const handleScroll = () => {}
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>Find, book or rend a car - quickly and easi!ly</h1>

            <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>

            <CustomButton title="Explore Car" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll}/>
        </div>
    </div>
  )
}

export default Hero