import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skill'
import Projects from './component/Projects'
import Sparkles from './component/Sparkles'
import Contact from './component/Contact'
import Footer from './component/Footer'
import ViewImages from './component/ViewImages'

function Home() {
    return (
        <div>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div
                    className="
                        absolute
                        -top-40
                        left-1/2
                        -translate-x-1/2
                        bg-purple-500/20
                        rounded-full
                        blur-[120px]
                        animate-pulse
                    "
                />
            </div>

            <Sparkles />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />

            
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Home */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Project Images */}
                <Route
                    path="/project/:id"
                    element={<ViewImages />}
                />

            </Routes>

        </BrowserRouter>
    )
}

export default App