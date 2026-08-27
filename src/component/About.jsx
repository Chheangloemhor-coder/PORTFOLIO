import React from 'react'

function About() {
    return (
        <section
            id="about"
            className="bg-[#0F0F0F] text-white px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20"
        >

            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12">
                    About <span className="text-amber-500">Me</span>
                </h2>


                {/* Introduction */}
                <div className="mb-10 md:mb-12">

                    <h3 className="text-xl sm:text-2xl font-bold text-amber-500 mb-3 md:mb-4">
                        Introduction
                    </h3>

                    <p className="text-sm sm:text-base text-gray-400 leading-7 md:leading-8 max-w-3xl">
                        I am a passionate Frontend Developer who enjoys
                        creating modern, responsive, and user-friendly websites.
                        I am continuously learning new technologies and improving
                        my development skills.
                    </p>

                </div>


                {/* Education & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">


                    {/* Education */}
                    <div
                        className="bg-[#1A1A1A] p-6 md:p-8 rounded-xl
                        border border-gray-800
                        hover:border-amber-500
                        hover:-translate-y-1
                        transition duration-300"
                    >

                        <h3 className="text-xl md:text-2xl font-bold text-amber-500 mb-4 md:mb-5">
                            Education
                        </h3>

                        <h4 className="text-lg md:text-xl font-semibold mb-2">
                            Management Information System
                        </h4>

                        <p className="text-sm md:text-base text-gray-400 leading-7">
                            Currently studying Management Information System
                            and developing my skills in web development,
                            programming, design, and software development.
                        </p>

                    </div>


                    {/* Frontend Experience */}
                    <div
                        className="bg-[#1A1A1A] p-6 md:p-8 rounded-xl
                        border border-gray-800
                        hover:border-amber-500
                        hover:-translate-y-1
                        transition duration-300"
                    >

                        <h3 className="text-xl md:text-2xl font-bold text-amber-500 mb-4 md:mb-5">
                            Experience
                        </h3>

                        <h4 className="text-lg md:text-xl font-semibold mb-2">
                            Frontend Development
                        </h4>

                        <p className="text-sm md:text-base text-gray-400 leading-7">
                            I have worked on personal projects using HTML, CSS,
                            JavaScript, React, and Tailwind CSS to create
                            responsive and interactive websites.
                        </p>

                    </div>


                    {/* Graphic Design */}
                    <div
                        className="bg-[#1A1A1A] p-6 md:p-8 rounded-xl
                        border border-gray-800
                        hover:border-amber-500
                        hover:-translate-y-1
                        transition duration-300"
                    >

                        <h3 className="text-xl md:text-2xl font-bold text-amber-500 mb-4 md:mb-5">
                            Experience
                        </h3>

                        <h4 className="text-lg md:text-xl font-semibold mb-2">
                            Graphic Design
                        </h4>

                        <p className="text-sm md:text-base text-gray-400 leading-7">
                            I have worked on personal and university projects
                            using Adobe Photoshop, Adobe Illustrator, and Figma
                            to create posters, billboards, logos, packaging,
                            shirts, J-flags, and umbrellas.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About