import { ProjectType } from '@/datas/projects'
import Image from 'next/image'
import React, { useState } from 'react'
import Macos from '@/assets/macos.svg';
import Windows from '@/assets/windows.svg';
import Linux from '@/assets/linux.svg';

const Project = (props : {project: ProjectType, index: number, sortedImages: string[]}) => {

    const [hovered, setHovered] = useState<boolean>(false)

    const platforms: { [key: string]: string } = {
        "W": Windows,
        "L": Linux,
        "Apple": Macos
    }

    return (
        <div key={props.project.description} className='w-2/5 h-auto flex flex-row items-center justify-between bg-[#f5f5f0] hover:bg-[#e6e9ed] rounded-xl overflow-hidden' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className='w-[50%] h-auto flex flex-col justify-center pl-10 px-5 pt-10 pb-8 pr-2'>
                <h3 className='text-2xl font-medium'>{props.project.title}</h3>
                    <div className='flex flex-row gap-2 mt-2 mb-2'>
                        <p className='text-[#9a9fab] text-xl font-semibold'>Made for:</p>
                        {props.project.platforms.length > 0 && props.project.platforms.map((platform, index) => (
                            <Image key={index} src={platforms[platform]} alt={platform} width={32} height={32} />
                        ))}
                    </div>
                <p className='text-[#9a9fab] font-semibold'>{props.project.description}</p>
            </div>
            <div className={`w-[50%] h-auto flex flex-row items-center justify-end p-4 -mr-16 -mb-12 transition-all ease-in-out ${hovered && "translate-x-3 translate-y-3 -rotate-2"}`}>
                <Image src={`/projects${props.sortedImages[props.index]}`} alt={props.project.title} width={400} height={300} className='rounded-xl' />
            </div>
        </div>
    )
}

export default Project