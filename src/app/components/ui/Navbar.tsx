"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import LinkButton from "@/app/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    gsap.fromTo(
      ".nav-logo",
      { backgroundPosition: "200% 0" },
      { backgroundPosition: "0% 0", duration: 3, ease: "power2.out" }
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent border-b border-transparent">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 text-[#e0e0e0]">
        
        {/* ✦ Logo Section */}
        <Link
          href="/"
          className="nav-logo flex items-center gap-0 font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-[#29D8FF] via-[#b8f2ff] to-[#29D8FF] bg-[length:200%_auto] text-transparent bg-clip-text"
        >
          <Image
            src="/Crystal_PNG.png"
            alt="KojiLab Logo"
            width={30}
            height={30}
            className="h-7 w-7 md:h-8 md:w-8"
          />
          KOJILAB
        </Link>

        {/* ✦ Desktop Menu */}
        {!isProjectPage && (
          <>
            <div className="hidden md:flex items-center space-x-7 text-[15px] font-medium tracking-wide">
              <LinkButton href="/" lowBorder={true}>Home</LinkButton>
              <LinkButton href="/about" lowBorder={true}>About</LinkButton>
              <LinkButton href="/blog" lowBorder={true}>Blog</LinkButton>
              <LinkButton href="/contacts" lowBorder={true} showArrow={true}>
                Contact
              </LinkButton>
            </div>

            {/* ✦ Right glowing dot */}
            <div className="hidden md:block w-2 h-2 rounded-full bg-[#29D8FF]/90 shadow-[0_0_12px_#29D8FF] animate-pulse-glow" />

            {/* ✦ Mobile Hamburger Menu (OLD SVG VERSION) */}
            <div className="md:hidden absolute right-4 top-3">
              <label className="hamburger">
                <input
                  type="checkbox"
                  checked={menuOpen}
                  onChange={() => setMenuOpen(!menuOpen)}
                />
                <svg viewBox="0 0 32 32" className="w-9 h-9">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 
                       9 3.5 10.8 2 13 2 
                       15.2 2 17 3.8 17 6L17 26 
                       C17 28.2 18.8 30 21 30 
                       23.2 30 25 28.2 25 26 
                       25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>

              {/* ✦ Mobile Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-44 flex flex-col items-center justify-center bg-[#0f0f0f]/90 backdrop-blur-xl border border-[#1a1a1a] rounded-xl shadow-lg p-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li>
                      <Link href="/" onClick={() => setMenuOpen(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" onClick={() => setMenuOpen(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" onClick={() => setMenuOpen(false)}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacts" onClick={() => setMenuOpen(false)}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
