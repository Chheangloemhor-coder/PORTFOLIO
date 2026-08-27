import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Hero() {

    const text = 'LOEMHOR CHHEANG'

    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        let timeout

        // Typing
        if (!isDeleting && displayText.length < text.length) {
            timeout = setTimeout(() => {
                setDisplayText(
                    text.slice(0, displayText.length + 1)
                )
            }, 120)
        }

        // Pause after typing
        else if (!isDeleting && displayText.length === text.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true)
            }, 1500)
        }

        // Deleting
        else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(
                    text.slice(0, displayText.length - 1)
                )
            }, 80)
        }

        // Pause before typing again
        else if (isDeleting && displayText.length === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false)
            }, 500)
        }

        return () => clearTimeout(timeout)

    }, [displayText, isDeleting])

    return (
        <section
            id="home"
            className="
                flex flex-col md:flex-row
                items-center justify-center
                gap-10 md:gap-16
                px-5 sm:px-8 md:px-16
                pt-28 pb-12
                md:pt-32 md:pb-20
                bg-[#1A1A1A]
                text-white
            "
        >

            {/* TEXT */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 max-w-xl"
            >

                <h1 className="text-3xl">
                    Hello,
                </h1>

                <h1 className="text-4xl font-bold">
                    I'm
                </h1>

                {/* TYPING NAME */}
                <h1 className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                ">
                    {displayText}
                    <span className="text-amber-500 animate-pulse">
                        |
                    </span>
                </h1>

                <h2 className="
                    text-2xl
                    mt-3
                    text-amber-400
                ">
                    Frontend Developer & Creative Design
                </h2>

                <p className="
                    text-lg
                    mt-3
                    text-gray-300
                ">
                    I build modern and responsive websites.
                </p>

                {/* BUTTONS */}
                <motion.div
                    className="flex flex-wrap gap-5 mt-7"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5
                    }}
                >

                    <a href="#projects" className="
                            px-6 py-3
                            bg-amber-500
                            hover:bg-amber-600
                            transition
                            rounded-md
                            text-lg
                            font-bold
                        ">
                    View Projects
                    </a>

                    <a href="#contact"
                        className="
                            px-6 py-3
                            border-2 border-amber-500
                            text-amber-400
                            hover:bg-amber-500
                            hover:text-white
                            transition
                            rounded-md
                            text-lg
                            font-bold
                        "
                    >
                        Contact Me
                    </a>

                </motion.div>

            </motion.div>

            {/* IMAGE */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="
                    w-full md:w-1/2
                    flex justify-center
                    mt-5 md:mt-0
                "
            >

                <img
                    src="/profile.png"
                    alt="Loemhor Chheang"
                    className="
                        w-56 h-56
                        sm:w-64 sm:h-64
                        md:w-72 md:h-72
                        lg:w-80 lg:h-80
                        rounded-full
                        object-cover
                        object-[center_top]
                        border-4 border-amber-500
                        shadow-2xl
                        shadow-amber-500/10
                        z-10
                    "
                />

            </motion.div>

        </section>
    )
}

export default Hero