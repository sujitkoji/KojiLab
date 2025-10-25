import React from "react";
import { Metadata } from "next";
import ClientBlogPage from "@/app/blog/ClientBlogPage";

export const metadata: Metadata = {
  title: "KojiLab Blog - WebGL, R3F & Shader Tutorials",
  description: "Explore tutorials and experiments on WebGL, GLSL, React Three Fiber, and shaders.",
  keywords: ["KojiLab", "WebGL", "Shaders", "R3F", "Three.js", "React"],
  alternates: { canonical: "https://kojilab.vercel.app/blog" },
  openGraph: {
    title: "KojiLab Blog - WebGL, R3F & Shader Tutorials",
    description: "Explore tutorials and experiments on WebGL, GLSL, and React Three Fiber.",
    url: "https://kojilab.vercel.app/blog",
    siteName: "KojiLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KojiLab Blog - WebGL, R3F & Shader Tutorials",
    description: "Explore tutorials and experiments on WebGL, GLSL, React Three Fiber.",
  },
};

export default function BlogPage() {
  return <ClientBlogPage />;
}
