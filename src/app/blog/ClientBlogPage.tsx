"use client";

import React from "react";
import { blogs } from "@/app/blog/data";
import BlogList from "@/app/blog/components/BlogList";
import { motion } from "framer-motion";

export default function ClientBlogPage() {
  return (
    <section className="min-h-screen bg-[#0F0F0F] text-[#e0e0e0] px-6 sm:px-12 py-32 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-6 text-center"
      >
        KojiLab <span className="text-[#29D8FF]">Blog</span>
      </motion.h1>

      <p className="text-lg text-[#a0a0a0]/90 mb-12 text-center italic">
        Explore tutorials, experiments, and creative insights from Sujit Koji.
      </p>

      <BlogList blogs={blogs} />
    </section>
  );
}
