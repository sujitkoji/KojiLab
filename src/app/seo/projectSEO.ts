import type { Metadata } from "next";
import { defaultMetadata } from "./index";

interface Project {
  title: string;
  description: string;
  slug: string;
  preview?: string;
}

export function generateProjectSEO(project: Project): Metadata {
  const url = `https://kojilab.vercel.app/projects/${project.slug}`;
  const image = project.preview || "https://kojilab.vercel.app/og/Home-og-img.png";

  return {
    ...defaultMetadata,
    title: { default: project.title, template: "%s | KojiLab" },
    description: project.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: project.title,
      description: project.description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: project.title,
      description: project.description,
      images: [image],
    },
    alternates: { canonical: url },
  };
}
