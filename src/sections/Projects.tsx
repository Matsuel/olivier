import React from 'react'
import { projects } from '@/datas/projects';
import Image from 'next/image';

const Projects = () => {

    let images = require.context('../../public/projects', true);
    let sortedImages = images.keys()
        .map(key => key.match(/(\d+)\.png/)) // Extract the number part
        .filter(match => match !== null) // Filter out non-matching keys
        .map(match => parseInt(match![1], 10)) // Convert to integers with type assertion
        .sort((a, b) => b - a) // Sort numerically
        .map(num => `/${num}.png`) // Convert back to the key format

    console.log(sortedImages)


    return (
        <section id="projects" className='w-full h-[5vh] flex flex-col items-center pt-24 pb-12'>
            {projects.map((project, index) => (
                <div key={project.description} className='w-3/4 h-auto flex flex-row items-center justify-between'>
                    <Image
                        src={`/projects${sortedImages[index]}`}
                        alt={project.title}
                        width={300}
                        height={300}
                    />
                </div>
            ))}

        </section>
    )
}

export default Projects