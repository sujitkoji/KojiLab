"use client";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/lib/projectData";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-[#2a2a2a]/70 bg-[#111111]/70 backdrop-blur-md 
                 shadow-lg hover:shadow-[#29D8FF]/40 transition-all duration-400 ease-in-out"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-t-2xl">
          <Image
            src={project.preview}
            alt={project.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 
                          group-hover:opacity-50 transition-opacity duration-500 rounded-t-2xl" />
        </div>

        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-lg md:text-xl font-semibold text-[#e0e0e0] group-hover:text-[#29D8FF] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-[#a0a0a0] line-clamp-3">{project.description}</p>
          <span className="text-xs text-[#29D8FF]/80 border border-[#29D8FF]/30 px-2 py-1 w-fit rounded-full">
            {project.category}
          </span>
        </div>

        <div className="absolute top-5 right-5 text-[#29D8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FiExternalLink size={22} />
        </div>

        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#29D8FF]/50 transition-all duration-300 pointer-events-none"></div>
      </Link>
    </motion.div>
  );
}
