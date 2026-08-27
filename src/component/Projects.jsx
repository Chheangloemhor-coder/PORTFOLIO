import React from 'react'
import projects from '../data/ProjectData'

function Projects() {

    return (
        <section id="projects" className="bg-[#0F0F0F] text-white px-6 py-20">

            <div className="max-w-6xl mx-auto mb-10">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    My <span className="text-amber-500">Projects</span>
                </h2>

                <p className="text-gray-400 text-center mb-12">
                    Here are some of the projects I have worked on.
                </p>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((projects, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] rounded-xl overflow-hidden
                            border border-gray-800
                            hover:border-amber-500
                            transition duration-300"
                        >

                            {/* Image */}
                            <img
                                src={projects.image}
                                alt={projects.title}
                                className="w-full h-52 object-cover contain-cover_top"
                            />

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-2xl font-bold mb-3">
                                    {projects.title}
                                </h3>

                                <p className="text-gray-400 leading-7 mb-5">
                                    {projects.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {projects.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm
                                            text-amber-500
                                            border border-amber-500
                                            rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <a
                                    href={projects.link}
                                    className="inline-block bg-amber-500
                                    hover:bg-amber-600
                                    text-white font-semibold
                                    px-5 py-2 rounded-md
                                    transition"
                                >
                                    View Project
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects