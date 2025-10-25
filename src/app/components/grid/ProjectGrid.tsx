"use client";
import { useState, useEffect } from "react";
import { projects } from "@/app/lib/projectData";
import ProjectCard from "@/app/components/card/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = ["All", "Galaxy", "Water", "Energy", "Science", "Particles"];

export default function ProjectGrid() {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  // 🔹 Detect screen size for items per page
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) setItemsPerPage(10);
      else setItemsPerPage(16);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // 🔹 Filter logic
  const filteredProjects = projects.filter((p) => {
    const matchCategory = selected === "All" || p.category === selected;
    const matchSearch = p.title.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 🔹 Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

   useEffect(() => {
    setCurrentPage(1);
  }, [selected, query]);

  return (
    <section className="px-5 lg:px-12 py-8">
      {/* 🔹 Search + Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border 
                ${
                  selected === cat
                    ? "bg-[#29D8FF]/20 text-[#29D8FF] border-[#29D8FF]"
                    : "text-[#a0a0a0] border-[#2a2a2a] hover:text-white hover:border-[#29D8FF]/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔍 Search Input */}
        <div className="relative w-full md:w-64">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aaa]" />
          <input
            type="text"
            placeholder="Search shader..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#111111]/80 border border-[#2a2a2a] rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#29D8FF] transition-all duration-300"
          />
        </div>
      </div>

      {/* 🔹 Project Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence>
          {visibleProjects.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 🔹 Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center text-[#999] mt-10">No results found 😅</div>
      )}

      {/* 🔹 Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300
              ${
                currentPage === 1
                  ? "border-[#2a2a2a] text-[#555] cursor-not-allowed"
                  : "border-[#29D8FF]/50 text-[#29D8FF] hover:bg-[#29D8FF]/10"
              }`}
          >
            <FiChevronLeft /> Prev
          </button>

          <span className="text-sm text-[#a0a0a0]">
            Page <span className="text-[#29D8FF]">{currentPage}</span> of{" "}
            <span className="text-[#29D8FF]">{totalPages}</span>
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300
              ${
                currentPage === totalPages
                  ? "border-[#2a2a2a] text-[#555] cursor-not-allowed"
                  : "border-[#29D8FF]/50 text-[#29D8FF] hover:bg-[#29D8FF]/10"
              }`}
          >
            Next <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
