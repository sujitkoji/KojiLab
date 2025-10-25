"use client";
import { useRouter } from "next/navigation";
import { Project } from "@/app/lib/projectData";
import { FiArrowLeft } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";

export default function Back_Code_Buttons({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <>
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute left-3 lg:left-8 top-20 lg:top-24 flex items-center justify-center 
                  w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#e0e0e0]/60 text-[#e0e0e0] 
                  hover:bg-[#e0e0e0] hover:text-[#111111] transition duration-300"
        aria-label="Go Back"
      >
        <FiArrowLeft size={22} />
      </button>

      {/* 💻 Code Button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 lg:right-8 top-20 lg:top-24 flex items-center justify-center 
                   w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#e0e0e0]/60 text-[#e0e0e0] 
                   hover:bg-[#e0e0e0] hover:text-[#111111] transition duration-300"
        aria-label="View Code on GitHub"
      >
        <BiCodeAlt size={22} />
      </a>
    </>
  );
}
