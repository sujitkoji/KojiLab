"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.fromTo(
        ".hero-title",
        { y: 60, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)" }
      )
        .fromTo(
          ".hero-sub",
          { y: 30, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)" },
          "-=0.4"
        )
        .fromTo(
          ".glow-star",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "elastic.out(1, 0.5)",
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.5,
          },
          "-=0.6"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        flex flex-col items-center justify-center text-center px-6
        pt-24 sm:pt-28 md:pt-28 lg:pt-36
        pb-6 sm:pb-10 md:pb-10 lg:pb-12    
        overflow-hidden relative
      "
    >
      {/* Background Gradient Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#0a0a0a] to-[#0f0f0f] opacity-50 -z-10" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#29D8FF]/3 blur-[50px] rounded-full -z-10" />

      {/* Title */}
      <h1 className="hero-title text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-tight">
        <span className="text-white">KojiLab</span>{" "}
        <span className="glow-star inline-block text-[#29D8FF] drop-shadow-[0_0_12px_#29D8FF]">
          ✦
        </span>{" "}
        <span className="text-[#29D8FF]">Three.js</span>{" "}
        <span className="text-white">Studio</span>
      </h1>

      {/* Subheading */}
      <p className="hero-sub mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#cacaca] max-w-3xl leading-relaxed font-light">
        Step into the world of{" "}
        <span className="text-[#29D8FF] font-medium">real-time 3D artistry</span>.  
        Explore interactive Three.js, WebGL and immersive GLSL shaders experiences  
        — built using{" "}
        <span className="font-semibold text-[#29D8FF]">React Three Fiber</span>,  
        <span className="font-semibold text-[#29D8FF]"> GSAP, Lenis</span>, and{" "}
        <span className="font-semibold text-[#29D8FF]">Framer Motion</span>.
      </p>

      {/* Decorative Line */}
      <div className="mt-4 sm:mt-5 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#29D8FF]/70 to-transparent blur-[1px]" />
    </section>
  );
}
