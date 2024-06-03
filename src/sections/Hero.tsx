import React from 'react'

const Hero = () => {
    return (
        <section id="home" className='w-full h-[85vh] mt-[8%] flex items-center'>
            {/* <div className='bg-[#fbe2e3] dark:bg-transparent absolute top-[8rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]' />
            <div className='bg-[#dbd7fb] dark:bg-transparent absolute top-[7rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]' /> */}

            <div className='flex flex-row w-full h-full'>
                <div className='w-1/2 flex flex-col items-center justify-center gap-20'>
                    <h1 className='w-4/6 text-5xl font-bold'>
                        Hello, I'm Olivier Tebar
                    </h1>
                    <p className='w-4/6 text-lg font-normal'>
                    </p>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    Image
                </div>
            </div>
        </section>
    )
}

export default Hero