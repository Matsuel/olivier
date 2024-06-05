import { ProjectType } from '@/datas/projects'
import Image from 'next/image'
import React from 'react'
import Macos from '@/assets/macos.svg';
import Windows from '@/assets/windows.svg';
import Linux from '@/assets/linux.svg';

const Project = (props : {project: ProjectType, index: number, sortedImages: string[]}) => {

    const platforms: { [key: string]: string } = {
        "W": Windows,
        "L": Linux,
        "Apple": Macos
    }

    return (
        <div key={props.project.description} className='w-1/2 h-auto flex flex-row items-center justify-between bg-[#f5f5f0] hover:bg-[#e6e9ed] rounded-xl overflow-hidden'>
            <div className='w-[40%] h-auto flex flex-col justify-center pl-10 px-5 pt-10 pb-8 pr-2'>
                <h3 className='text-2xl font-medium'>{props.project.title}</h3>
                {props.project.platforms.length > 0 &&
                    <div className='flex flex-row gap-2 mt-2 mb-2'>
                        {props.project.platforms.length > 0 && props.project.platforms.map((platform, index) => (
                            <Image key={index} src={platforms[platform]} alt={platform} width={32} height={32} />
                        ))}
                    </div>}
                <p className='text-[#9a9fab] font-semibold'>{props.project.description}</p>
            </div>
            <div className='w-[60%] h-auto flex flex-row items-center justify-end p-4 -mr-16'>
                <Image src={`/projects${props.sortedImages[props.index]}`} alt={props.project.title} width={400} height={300} className='rounded-xl' />
            </div>
        </div>
    )
}

export default Project