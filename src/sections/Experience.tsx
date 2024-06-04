import Work from '@/components/Work'
import { formations } from '@/datas/formations'
import { works } from '@/datas/works'
import React from 'react'

const Experience = () => {
    return (
        <section id="experiences" className='w-full h-auto flex flex-row items-center py-24 bg-[#f5f5f0]'>
            <div className='w-1/2 h-auto flex flex-col items-center justify-center'>
                <h2 className='text-4xl font-medium'>Programmes & Degrees</h2>

                <div className='w-3/4 h-auto flex flex-col items-center justify-center mt-12'>
                    {formations.map((formation, index) => (
                        <>
                            <Work key={index} {...formation} />
                            <div className='w-[64%] h-[2px] bg-[#e7e9de] my-6' />
                        </>
                    ))}
                </div>
            </div>
            <div className='w-1/2 h-auto flex flex-col items-center justify-center'>
                <h2 className='text-4xl font-medium'>Working Experiences</h2>

                <div className='w-3/4 h-auto flex flex-col items-center justify-center mt-12'>
                    {works.map((formation, index) => (
                        <>
                            <Work key={index} {...formation} />
                            <div className='w-[64%] h-[2px] bg-[#e7e9de] my-6' />
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience