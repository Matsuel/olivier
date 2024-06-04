import { WorkType } from '@/datas/works'
import Image from 'next/image'
import React from 'react'
import { PlugZap } from 'lucide-react'

const Work = (props: WorkType) => {
    return (
        <div className='w-[80%] h-auto flex flex-row justify-start gap-12'>
            {props.src !== "" ?
                <Image src={props.src} alt={props.title} width={0} height={0} className='rounded-xl bg-white p-1 w-10 h-10' />
                :
                <div className='w-[40px] h-[40px] bg-white rounded-xl flex justify-center items-center'>
                    <PlugZap size={20} strokeWidth={2} />
                </div>
            }
            <div className='w-auto h-auto flex flex-col justify-center gap-1'>
                <h3 className='font-medium'>{props.title} at <span className='font-bold'>{props.company}</span></h3>
                <p className='text-[#9a9fab] font-semibold'>{props.date}</p>
            </div>
        </div>
    )
}

export default Work