import { BackgroundBeams } from '@/components/ui/background-beams'
import BlurIn from '@/components/ui/blur-in'
import React from 'react'

const Hero = () => {
    return (
        <section id="home" className='w-full h-[95vh] mt-[3%] flex items-center relative'>

            <div className='flex flex-row w-full h-full'>
                <div className='w-1/2 flex flex-col items-center justify-center gap-20'>
                    {/* <h1 className='w-4/6 text-5xl font-bold'>
                        Hello, I'm Olivier Tebar
                    </h1> */}
                    <BlurIn word='Hello, I am Olivier Tebar' className='w-4/6 font-bold' />
                    <p className='w-4/6 text-lg font-normal'>
                    </p>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    Image
                </div>
            </div>

            <BackgroundBeams />
        </section>
    )
}

export default Hero