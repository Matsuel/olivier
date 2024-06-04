import { BackgroundBeams } from '@/components/ui/background-beams'
import BlurIn from '@/components/ui/blur-in'
import Image from 'next/image'
import React from 'react'
import Olivier from '@/assets/olivier.png'
import { Emoji } from 'emoji-picker-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <section id="home" className='w-full h-[90vh] flex flex-col items-center relative py-[10%]'>

            <BackgroundBeams className='absolute top-0 h-[80vh]' />

            <div className='flex flex-row w-full h-auto'>
                <div className='w-[60%] flex flex-col items-center justify-center gap-5'>
                    <BlurIn word="Hello, I'm Olivier Tebar" className='font-bold' />
                    <div className='w-[60%] h-[64px] flex flex-row items-center justify-center gap-14 dark:shadow-primary-foreground shadow-2xl z-10 bg-background rounded-xl'>
                        <p className='text-2xl font-medium'>Game designer, France 🇫🇷 </p>
                        <Emoji unified="1f1e8-1f1f5" size={50} />
                    </div>
                    <p className='w-[60%] text-xl font-normal'>
                        Hito, a former R&D engineer, transitioned to game design in 2021, blending technical and artistic aspects. He showcases his work and encourages feedback. Updates to his game, Climb, are underway.
                    </p>
                </div>
                <div className='w-[40%] flex justify-center items-center'>
                    <Image
                        src={Olivier}
                        alt='Olivier Tebar'
                        width={400}
                        height={400}
                        className='rounded-full border-1 bg-white z-10'
                    />
                </div>
            </div>

            <div className='w-full h-full z-10 flex flex-row justify-center'>
                <Link href='/#contact' passHref>
                    <Button variant='default' size='lg' className='m-5'>
                        Contact me
                    </Button>
                </Link>

                <Link href='https://www.linkedin.com/in/olivier-tebar-323151204/' passHref target='_blank'>
                    <Button variant='outline' size='lg' className='m-5 border-1 border-border text-black text-base'>
                        LinkedIn
                    </Button>
                </Link>


            </div>
        </section>
    )
}

export default Hero