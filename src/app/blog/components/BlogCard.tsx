"use client";
import React from "react";
import Link from "next/link";
import { BlogData } from "@/app/blog/data";

export default function BlogCard({ blog }: { blog: BlogData }) {
  return (
    <div className="bg-[#111111] border border-[#333333]/50 p-6 rounded-2xl shadow-lg hover:shadow-[#29D8FF]/40 transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-[#a0a0a0]/60 text-sm mb-4">{blog.date}</p>
      <p className="text-[#cacaca] mb-4">{blog.summary}</p>
      <Link
        href={`/blog/${blog.slug}`}
        className="text-[#29D8FF]/90 hover:text-[#29D8FF] underline font-medium"
      >
        Read More →
      </Link>
    </div>
  );
}
