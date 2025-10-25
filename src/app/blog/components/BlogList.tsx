"use client";
import React from "react";
import BlogCard from "@/app/blog/components/BlogCard";
import { BlogData } from "@/app/blog/data";

export default function BlogList({ blogs }: { blogs: BlogData[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
}
