import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      const result = await emailjs.sendForm(
        "service_loemhor",     // Your REAL Service ID
        "template_tv5n18a",    // Your REAL Template ID
        form.current,
        {
          publicKey: "XcEUnXGMn6ILALobq",
        }
      );

      console.log("EMAILJS SUCCESS");
      console.log("STATUS:", result.status);
      console.log("TEXT:", result.text);

      alert("Message sent successfully! 🎉");

      form.current.reset();
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      console.error("STATUS:", error.status);
      console.error("TEXT:", error.text);

      alert(
        `Failed to send message ❌\n\n${
          error.text || "Unknown EmailJS error"
        }`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen bg-[#1A1A1A] text-white px-6 py-20 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* =========================
            CONTACT TITLE
        ========================== */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold text-lg">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project or opportunity? Feel free to contact me.
            I would love to hear from you.
          </p>
        </div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <div className="space-y-6">

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <div className="bg-amber-500 p-4 rounded-full">
                <FaEnvelope className="text-black text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <p className="text-gray-400">
                  chheangloemhor130608@email.com
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4">
              <div className="bg-amber-500 p-4 rounded-full">
                <FaPhone className="text-black text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +855 11 213818
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4">
              <div className="bg-amber-500 p-4 rounded-full">
                <FaMapMarkerAlt className="text-black text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Location
                </h3>

                <p className="text-gray-400">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                bg-[#242424]
                border
                border-gray-700
                rounded-lg
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-amber-500
                transition
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                bg-[#242424]
                border
                border-gray-700
                rounded-lg
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-amber-500
                transition
              "
            />

            {/* SUBJECT */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                bg-[#242424]
                border
                border-gray-700
                rounded-lg
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-amber-500
                transition
              "
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="
                w-full
                bg-[#242424]
                border
                border-gray-700
                rounded-lg
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-amber-500
                transition
                resize-none
              "
            />

            {/* SEND BUTTON */}
            <button
              type="submit"
              disabled={sending}
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-amber-500
                text-black
                font-semibold
                px-6
                py-3
                rounded-lg
                hover:bg-amber-400
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <FaPaperPlane />

              {sending ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;