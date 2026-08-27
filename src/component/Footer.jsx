import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              LOEMHOR <span className="text-amber-500">CHHEANG</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer & Creative Designer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Chheangloemhor-coder"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#242424] hover:bg-amber-500 hover:text-black transition duration-300"
            >
              <FaGithub size={20}/>
            </a>

            <a
              href="https://www.facebook.com/chheang.loem.hao"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#242424] hover:bg-amber-500 hover:text-black transition duration-300"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/chheang_loemhao/"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#242424] hover:bg-amber-500 hover:text-black transition duration-300"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@chheangloemhao"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#242424] hover:bg-amber-500 hover:text-black transition duration-300"
            >
              <FaTiktok size={20} />
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Loemhor Chheang. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-amber-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-amber-500 transition">
              About
            </a>

            <a href="#projects" className="hover:text-amber-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-amber-500 transition">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-black hover:bg-amber-400 transition"
          >
            <FaArrowUp />
          </button>

        </div>
      </div>
    </footer>
  );
}

export default Footer;