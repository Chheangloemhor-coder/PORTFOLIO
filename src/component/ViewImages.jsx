import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import projects from '../data/ProjectData'

function ViewImages() {

    const { id } = useParams()
    const navigate = useNavigate()

    // Find selected project
    const project = projects.find(
        (project) => project.id === Number(id)
    )

    // Project not found
    if (!project) {
        return (
            <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">

                <div className="text-center">

                    <h1 className="text-4xl font-bold mb-6">
                        Project Not Found
                    </h1>

                    <button
                        onClick={() => navigate('/')}
                        className="
                            bg-amber-500
                            hover:bg-amber-600
                            text-black
                            px-6
                            py-3
                            rounded-md
                            font-semibold
                            transition
                        "
                    >
                        Back Home
                    </button>

                </div>

            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#0F0F0F] text-white px-6 py-10">

            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="
                        mb-8
                        px-5
                        py-2
                        border
                        border-gray-700
                        hover:border-amber-500
                        hover:text-amber-500
                        rounded-md
                        transition
                    "
                >
                    ← Back
                </button>


                {/* Project Title */}
                <h1 className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    text-center
                    mb-4
                ">
                    {project.title}
                </h1>


                <p className="
                    text-gray-400
                    text-center
                    mb-10
                ">
                    Project <span className="text-amber-500">Image</span>
                </p>


                {/* Main Image */}
                <div className="
                    flex
                    justify-center
                    items-center
                    bg-[#151515]
                    rounded-xl
                    border
                    border-gray-800
                    p-4
                    md:p-8
                ">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                            max-w-full
                            max-h-[80vh]
                            object-contain
                            rounded-lg
                            shadow-2xl
                        "
                    />

                </div>


                {/* Description */}
                <div className="mt-8 text-center">

                    <p className="
                        text-gray-400
                        max-w-2xl
                        mx-auto
                        leading-7
                    ">
                        {project.description}
                    </p>


                    {/* Technologies */}
                    <div className="
                        flex
                        flex-wrap
                        justify-center
                        gap-2
                        mt-6
                    ">

                        {project.technologies?.map(
                            (technology, index) => (
                                <span
                                    key={index}
                                    className="
                                        px-4
                                        py-2
                                        bg-zinc-800
                                        text-amber-400
                                        rounded-full
                                        text-sm
                                    "
                                >
                                    {technology}
                                </span>
                            )
                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewImages