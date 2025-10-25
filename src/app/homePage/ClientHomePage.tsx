"use client";
import Hero from "@/app/components/ui/Hero";
import Filter from "@/app/components/grid/ProjectGrid";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

export default function ClientHomePage() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-section",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.15 }
    );
  }, []);

  return (
    <main className="min-h-screen">
      <motion.section
        className="fade-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.section>

      <motion.section
        className="fade-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Filter />
      </motion.section>
    </main>
  );
}
