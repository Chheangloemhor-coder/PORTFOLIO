import React from 'react'

function Navbar() {
    return (
        <nav className="flex flex-col md:flex-row
            justify-between items-center
            gap-5
            px-6 py-5 md:px-20
            bg-linear-to-r from-amber-300 to-amber-600
            text-white fixed w-full top z-100">

            {/* Logo */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                    LOEMHOR CHHEANG
                </h1>
            </div>

            {/* Menu */}
            <div>
                <ul className="flex flex-wrap justify-center
                    gap-4 md:gap-8
                    text-base md:text-xl font-semibold">

                    <li>
                        <a href="#home" className="hover:text-black transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-black transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-black transition">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-black transition">
                            Projects
                        </a>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar