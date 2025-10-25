import React from "react";
// import GLSLGuide from "@/app/blog/data/lib/glslBlog";
 
export interface BlogData {
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: React.ReactNode;
  description?: string;
  category?: string;
  author?: string;
  keywords?: string[];
}

export const blogs: BlogData[] = [
  // {
  //   title: "The Ultimate GLSL Guide for WebGL and Shaders",
  //   slug: "glsl-guide",
  //   date: "2024-05-10",
  //   summary: "Learn the basics of shaders, including vertex & fragment shaders, and uniforms.",
  //   content: React.createElement(GLSLGuide),
  //   description: "Learn GLSL shader programming for WebGL and R3F.",
  //   category: "WebGL",
  //   author: "Sujit Koji",
  //   keywords: ["GLSL", "WebGL", "Shader", "Three.js"],
  // },
  
];

export async function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
