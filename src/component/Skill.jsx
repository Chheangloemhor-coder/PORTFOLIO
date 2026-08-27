import React from 'react'

function Skills() {
    return (
        <section id="skills" className="bg-[#1A1A1A] text-white px-6 py-20">

            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    My <span className="text-amber-500">Skills</span>
                </h2>
                

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Programming
                </h2>


                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* HTML */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">HTML</h3>
                            <span className="text-amber-500">90%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[90%]"></div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">CSS</h3>
                            <span className="text-amber-500">85%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[85%]"></div>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">JavaScript</h3>
                            <span className="text-amber-500">75%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[75%]"></div>
                        </div>
                    </div>

                    {/* React */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">React</h3>
                            <span className="text-amber-500">80%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[80%]"></div>
                        </div>
                    </div>

                    {/* Tailwind */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Tailwind CSS</h3>
                            <span className="text-amber-500">85%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[85%]"></div>
                        </div>
                    </div>

                    {/* Git */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Git / GitHub</h3>
                            <span className="text-amber-500">70%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[70%]"></div>
                        </div>
                    </div>

                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-12">
                    Graphic Design
                </h2>


                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* PS */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Adobe Photoshop</h3>
                            <span className="text-amber-500">99%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[99%]"></div>
                        </div>
                    </div>

                    {/* AI */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Adobe Illustrator</h3>
                            <span className="text-amber-500">95%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[95%]"></div>
                        </div>
                    </div>

                    {/* Figma */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Figma</h3>
                            <span className="text-amber-500">75%</span>
                        </div>

                        <div className="w-full bg-[#0F0F0F] rounded-full h-3">
                            <div className="bg-amber-500 h-3 rounded-full w-[75%]"></div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills
