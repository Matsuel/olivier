import React from 'react'
import { projects } from '@/datas/projects';
import Project from '@/components/Project';

const Projects = () => {

    let images = require.context('../../public/projects', true);
    let sortedImages = images.keys()
        .map(key => key.match(/(\d+)\.png/)) // Extract the number part
        .filter(match => match !== null) // Filter out non-matching keys
        .map(match => parseInt(match![1], 10)) // Convert to integers with type assertion
        .sort((a, b) => b - a) // Sort numerically
        .map(num => `/${num}.png`) // Convert back to the key format

    

    return (
        <section id="projects" className='w-full h-auto flex flex-col items-center pt-24 gap-6'>
            <h2 className='text-4xl font-medium mb-10'>My Projects</h2>
            {projects.map((project, index) => (
                <Project index={index} key={project.title} project={project} sortedImages={sortedImages} />
            ))}

        </section>
    )
}

export default Projects