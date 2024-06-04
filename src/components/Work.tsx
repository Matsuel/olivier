import { WorkType } from '@/datas/works'
import Image from 'next/image'
import React from 'react'
import { PlugZap } from 'lucide-react'

const Work = (props: WorkType) => {
    return (
        <div className='w-[80%] h-auto flex flex-row justify-start gap-12'>
            {props.src !== "" ?
                <Image src={props.src} alt={props.title} width={40} height={40} className='rounded-xl' />
                :
                <div className='w-[40px] h-[40px] bg-white rounded-xl flex justify-center items-center'>
                    <PlugZap size={20} strokeWidth={2} />
                </div>
            }
            <div>
                <h3>{props.title} at {props.company}</h3>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default Work