"use client";

import React from "react";
import Button from "@/app/components/ui/Button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();
  const isProjectPage =
    pathname === "/projects" || pathname.startsWith("/projects/");

  if (isProjectPage) return null;

  return (
    <footer className="relative w-full bg-[#0B0B0B] text-[#CFCFCF] border-t border-[#1F1F1F] overflow-hidden">
      {/* 🔹 Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#29D8FF]/60 to-transparent blur-[1px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-10xl mx-auto px-6 sm:px-10 lg:px-24 py-6 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-5 relative"
      >
        {/* 🔸 Left Section — Explore */}
        <div className="flex flex-col items-center md:items-start space-y-3 text-sm">
          <h3 className="text-white font-semibold uppercase tracking-[0.2em] text-[13px] mb-5">
            Explore
          </h3>
          <div className="flex flex-col justify-center items-center gap-2">
            <Button href="/" lowBorder>
              Home
            </Button>
            <Button href="/about" lowBorder>
              About
            </Button>
            <Button href="/blog" lowBorder>
              Blog
            </Button>
            <Button href="/contacts" lowBorder>
              Contact
            </Button>
          </div>
        </div>

        {/* 🔸 Center Section — Logo + Legal */}
        <div className="flex flex-col items-center text-center justify-center space-y-4">
          <div className="flex flex-col items-center space-y-1">
            <h2 className="text-white font-semibold text-lg tracking-wide">
              KojiLab Three.js Studio
            </h2>
            <p className="text-[#A9A9A9] text-[14px]">
              Crafting immersive 3D experiences for the web.
            </p>
          </div>

          <p className="text-sm text-[#BEBEBE]">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">KojiLab Studio</span>. All
            Rights Reserved.
          </p>

          <p className="text-xs sm:text-sm text-[#9A9A9A]">
            Designed & Developed by{" "}
            <a
              href="https://x.com/sujitkoji"
              target="_blank"
              className="text-[#29D8FF] hover:text-[#7DE3FF] font-semibold transition-colors"
            >
              SujitKoji
            </a>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <Button href="/privacy-policy" lowBorder>
              Privacy
            </Button>
            <Button href="/terms-and-conditions" lowBorder>
              Terms
            </Button>
            <Button href="/disclaimer" lowBorder>
              Disclaimer
            </Button>
            <Button href="/cookie-policy" lowBorder>
              Cookies
            </Button>
          </div>
        </div>

        {/* 🔸 Right Section — Social */}
        <div className="flex flex-col justify-center items-center  md:items-end space-y-3 text-sm">
          <h3 className="relative right-0 sm:right-5 lg:right-5 text-white font-semibold uppercase tracking-[0.2em] text-[13px] mb-5">
            Social
          </h3>
          <div className="flex flex-col justify-center items-center gap-2">
            <Button
              href="https://github.com/sujitkoji"
              lowBorder
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              href="https://linkedin.com/in/sujitkoji"
              lowBorder
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button href="https://x.com/sujitkoji" lowBorder target="_blank">
              X / Twitter
            </Button>
            <Button
              href="https://www.shadertoy.com/user/sujitkoji"
              lowBorder
              target="_blank"
            >
              ShaderToy
            </Button>
          </div>
        </div>
      </motion.div>

      {/* 🔹 Bottom Accent Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#29D8FF]/40 to-transparent opacity-70 mt-4" />

      {/* 🔹 Floating Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[10%] w-[200px] h-[200px] bg-[#29D8FF]/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[150px] h-[150px] bg-[#29D8FF]/10 blur-[100px]" />
      </div>
    </footer>
  );
}
