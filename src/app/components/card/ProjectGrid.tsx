"use client";
import { projects } from "@/app/lib/projectData";
import ProjectCard from "@/app/components/card/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectGrid() {
  return (
    <motion.section
      className="px-5 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </motion.section>
  );
}
