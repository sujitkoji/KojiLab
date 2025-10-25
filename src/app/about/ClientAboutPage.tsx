"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function ClientAboutPage() {

  useEffect(() => {
     const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();  
  }, []);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#e0e0e0] px-6 sm:px-12 pt-32 pb-16 max-w-5xl mx-auto leading-relaxed">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-[#e0e0e0] mb-6"
      >
        About <span className="text-[#29D8FF]">KojiLab</span>
      </motion.h1>

      <p className="text-lg text-[#a0a0a0]/90 mb-12 italic">
        Shaping the future of the web — one shader at a time.
      </p>

      <section className="space-y-6 text-[#e0e0e0]/90">
        <p>
          <strong>KojiLab</strong> is a next-generation creative technology studio dedicated to pushing the
          boundaries of what’s possible with{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"
            target="_blank"
            className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
          >
            <strong>WebGL</strong>
          </Link>
          , <strong>GLSL shaders</strong>,{" "}
          <Link
            href="https://lenis.studiofreight.com"
            target="_blank"
            className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
          >
            <strong>Lenis</strong>
          </Link>{" "}
          and <strong>real-time 3D experiences</strong>. We craft immersive, cinematic, and highly interactive
          web environments where art and code merge into a single expression.
        </p>

        <p>
          Founded by <strong>Sujit Kumar (SujitKoji)</strong>, KojiLab operates globally with a vision to redefine how
          people experience websites — not as static pages, but as{" "}
          <strong>living digital worlds</strong>. From conceptual shader art to complex{" "}
          <Link
            href="https://r3f.docs.pmnd.rs/getting-started/introduction"
            target="_blank"
            className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
          >
            <strong>React Three Fiber</strong>
          </Link>{" "}
          environments, KojiLab focuses on premium design, storytelling, and motion aesthetics.
        </p>

        <h2 className="text-2xl font-semibold text-[#e0e0e0] mt-10">🎨 What We Do</h2>
        <p>
          Every project at KojiLab is a fusion of <strong>visual science</strong> and <strong>creative emotion</strong>.
          We experiment, we iterate, and we code visuals that react, breathe, and move. Our expertise includes:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Building immersive 3D websites using React Three Fiber, Lenis & GLSL</li>
          <li>Creating real-time particle systems, lighting effects, and raymarching shaders</li>
          <li>
            Designing visually rich landing pages with{" "}
            <Link
              href="https://gsap.com"
              target="_blank"
              className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
            >
              GSAP
            </Link>
            ,{" "}
            <Link
              href="https://www.framer.com/motion"
              target="_blank"
              className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
            >
              Framer Motion
            </Link>
            ,{" "}
            <Link
              href="https://lenis.studiofreight.com"
              target="_blank"
              className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
            >
              Lenis
            </Link>{" "}
            &{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
            >
              Tailwind
            </Link>
          </li>
          <li>Developing high-performance Next.js web applications for global brands</li>
          <li>Crafting procedural visual effects inspired by nature, music, and light</li>
          <li>Publishing educational blogs and open-source creative coding projects</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#e0e0e0] mt-10">🚀 Our Vision</h2>
        <p>
          The web is no longer just text and buttons — it’s a <strong>canvas of experiences</strong>. KojiLab believes in
          transforming traditional websites into interactive digital art, where users don’t just view but feel the
          environment. Our mission is to make web experiences cinematic, fluid, and emotionally engaging for a global
          audience.
        </p>

        <p>
          We aim to build a global hub for shader artists, developers, and designers who want to explore the endless
          creative potential of real-time graphics. Whether it’s a brand story, product reveal, or portfolio showcase —
          KojiLab brings it to life with light, depth, and motion.
        </p>

        <h2 className="text-2xl font-semibold text-[#e0e0e0] mt-10">🧠 Behind the Studio</h2>
        <p>
          <strong>Sujit Kumar (SujitKoji)</strong> is a <strong>Creative Technologist</strong> and{" "}
          <strong>Shader Artist</strong> from India, building projects that blend art, code, and storytelling. His
          expertise includes{" "}
          <strong>
            WebGL, React Three Fiber,{" "}
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
            >
              Next.js
            </Link>
            , GSAP,
          </strong>{" "}
          and{" "}
          <Link
            href="https://en.wikipedia.org/wiki/OpenGL_Shading_Language"
            target="_blank"
            className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
          >
            <strong>GLSL shader programming</strong>
          </Link>
          . His vision is to inspire the next generation of creative coders by showing how technology can become an
          artistic medium.
        </p>

        <p>
          Sujit shares his experimental shaders and projects openly on platforms like{" "}
          <Link
            href="https://www.shadertoy.com/user/sujitkoji"
            target="_blank"
            className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
          >
            ShaderToy
          </Link>
          ,{" "}
          <Link
            href="https://github.com/sujitkoji"
            target="_blank"
            className="text-[#29D8FF]/90 underline underline-offset-2 hover:text-[#29D8FF]"
          >
            GitHub
          </Link>
          , and across his creative studio site <strong>KojiLab</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-[#e0e0e0] mt-10">💡 Our Philosophy</h2>
        <p>
          We believe in <strong>code as an art form</strong>. Each line of GLSL, each pixel rendered, and each animation
          curve tells a story. The KojiLab philosophy revolves around merging{" "}
          <strong>mathematical precision</strong> with <strong>artistic emotion</strong> — to create visuals that move
          both technically and emotionally.
        </p>

        <p>
          Innovation and experimentation are at the heart of everything we build. We don’t just follow trends; we create
          new ones by exploring the intersection of design, performance, and imagination.
        </p>

        <h2 className="text-2xl font-semibold text-[#e0e0e0] mt-10">📈 Future Goals</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Launch a <strong>Shader Library</strong> for public use and learning</li>
          <li>Develop a cinematic <strong>3D Shader Gallery</strong> with interactive lighting and physics</li>
          <li>Publish technical and creative <strong>blog articles</strong> about GLSL and WebGL</li>
          <li>Collaborate with global <strong>brands and design studios</strong> for creative web projects</li>
          <li>Monetize educational & artistic shader experiments through <strong>AdSense</strong> and partnerships</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#e0e0e0] mt-10">🤝 Collaborate With Us</h2>
        <p>
          KojiLab welcomes collaboration with forward-thinking brands, agencies, and creators who want to build
          something <strong>visually stunning and technically advanced</strong>. Whether it’s a 3D showcase, interactive
          storytelling website, or digital art experiment — we bring imagination to reality.
        </p>

        <h2 className="text-2xl font-semibold text-[#e0e0e0] mt-10">🌐 Join the Movement</h2>
        <p>
          The future of the web is immersive — and KojiLab is here to shape it. Explore, learn, and experience the
          beauty of real-time graphics. Because at KojiLab, <strong>the future is visual, interactive, and alive.</strong>
        </p>
      </section>
    </main>
  );
}
