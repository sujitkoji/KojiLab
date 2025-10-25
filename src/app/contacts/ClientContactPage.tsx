"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ClientContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setToast({ type: "success", message: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({ type: "error", message: "❌ Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("Error:", error);
      setToast({ type: "error", message: "⚠️ Something went wrong." });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#e0e0e0] px-6 sm:px-12 pt-32 pb-16 max-w-6xl mx-auto flex flex-col justify-center relative">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center leading-tight"
      >
        Get in <span className="text-[#29D8FF]">Touch</span>
      </motion.h1>

      <p className="text-base sm:text-lg text-[#a0a0a0]/90 mb-16 text-center italic max-w-2xl mx-auto">
        Let’s collaborate, build, and create something{" "}
        <span className="text-[#29D8FF] font-semibold">extraordinary</span>.
      </p>

      {/* Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#111111] border border-[#1b1b1b] rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/30 hover:shadow-[#29D8FF]/20 transition-all duration-500 relative"
        >
          <div className="mb-5 sm:mb-6">
            <label htmlFor="name" className="block mb-2 text-sm text-[#a0a0a0] tracking-wide">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Sujit Kumar"
              className="w-full p-3 sm:p-4 rounded-lg bg-[#0F0F0F] border border-[#333333] text-[#e0e0e0] focus:border-[#29D8FF] outline-none transition duration-300"
            />
          </div>

          <div className="mb-5 sm:mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-[#a0a0a0] tracking-wide">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full p-3 sm:p-4 rounded-lg bg-[#0F0F0F] border border-[#333333] text-[#e0e0e0] focus:border-[#29D8FF] outline-none transition duration-300"
            />
          </div>

          <div className="mb-6 sm:mb-8">
            <label htmlFor="message" className="block mb-2 text-sm text-[#a0a0a0] tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Let’s build something beautiful together..."
              rows={5}
              className="w-full p-3 sm:p-4 rounded-lg bg-[#0F0F0F] border border-[#333333] text-[#e0e0e0] focus:border-[#29D8FF] outline-none resize-none transition duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 sm:py-4 rounded-xl bg-[#29D8FF]/90 hover:bg-[#29D8FF] text-[#0F0F0F] font-semibold text-base sm:text-lg tracking-wide transition-all duration-300 ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {/* Toast */}
          {toast && (
            <div
              className={`absolute bottom-[-60px] left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg font-medium ${
                toast.type === "success" ? "bg-green-600" : "bg-red-600"
              } text-white shadow-lg`}
            >
              {toast.message}
            </div>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#e0e0e0]">
            Contact Information
          </h2>
          <p className="text-[#a0a0a0]/90 mb-8 leading-relaxed text-base sm:text-lg">
            Reach out for collaborations, freelance projects, or just to say hello!  
            <br />KojiLab connects with global creators, studios, and tech enthusiasts 🌍.
          </p>

          <ul className="space-y-4 text-[#cacaca] text-base sm:text-lg">
            <li>
              ✉️ <span className="text-[#a0a0a0] font-medium">Email:</span> <span className="text-[#29D8FF]">sujitkoji@gmail.com</span>
            </li>
            <li>
              🪄 Portfolio:{" "}
              <Link
                href="https://kojilab.vercel.app"
                target="_blank"
                className="text-[#29D8FF]/90 hover:text-[#29D8FF] underline"
              >
                kojilab.vercel.app
              </Link>
            </li>
            <li>
              🧠 GitHub:{" "}
              <Link
                href="https://github.com/sujitkoji"
                target="_blank"
                className="text-[#29D8FF]/90 hover:text-[#29D8FF] underline"
              >
                github.com/sujitkoji
              </Link>
            </li>
            <li>
              🎨 ShaderToy:{" "}
              <Link
                href="https://www.shadertoy.com/user/sujitkoji"
                target="_blank"
                className="text-[#29D8FF]/90 hover:text-[#29D8FF] underline"
              >
                shadertoy.com/user/sujitkoji
              </Link>
            </li>
          </ul>

          <p className="text-[#777] mt-12 text-sm sm:text-base italic text-center sm:text-left">
            The future is visual, interactive, and alive. — <span className="text-[#29D8FF]">KojiLab Vision ✨</span>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
