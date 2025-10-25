import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projectData";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import ClientProject from "@/app/projects/ClientProject";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  // 🧩 If project not found
  if (!project) {
    return {
      title: "Project Not Found | KojiLab",
      description:
        "The requested project could not be found. Explore premium Three.js, WebGL, and GLSL shader projects on KojiLab.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // 🧠 Dynamic SEO values
  const siteUrl = `https://kojilab.vercel.app/projects/${project.slug}`;
  const siteImage = project.preview || "https://kojilab.vercel.app/og/default-og.jpg";
  const siteTitle = `${project.title} | Three.js GLSL Shader Project | KojiLab`;
  const siteDesc =
    project.description ||
    `Explore ${project.title}, a premium WebGL & GLSL shader experience built using React Three Fiber and Three.js. Discover cinematic real-time graphics on KojiLab.`;

  // 🚀 SEO-optimized metadata (fixed kebab-case keys)
  return {
    title: siteTitle,
    description: siteDesc,
    alternates: {
      canonical: siteUrl,
    },
    metadataBase: new URL("https://kojilab.vercel.app"),
    openGraph: {
      title: siteTitle,
      description: siteDesc,
      url: siteUrl,
      siteName: "KojiLab",
      type: "article",
      locale: "en_US",
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: `${project.title} | Three.js GLSL Shader by KojiLab`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDesc,
      images: [siteImage],
      creator: "@KojiLab3D",
    },
    keywords: [
      "Three.js",
      "GLSL shader",
      "WebGL",
      "React Three Fiber",
      "3D shaders",
      "procedural graphics",
      "KojiLab",
      "ShaderToy style",
      "visual effects",
      "real-time rendering",
      "3D portfolio",
      "creative coding",
      "JavaScript shaders",
      "custom GLSL",
    ],
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    authors: [{ name: "KojiLab", url: "https://kojilab.vercel.app" }],
    category: "3D Web Development",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const Component = project.component as ComponentType;
  return <ClientProject project={project} Component={Component} />;
}
