import type { Metadata } from "next";
import { defaultMetadata } from "./index";

interface PageSEOProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
}

export function getPageSEO({ title, description, url, ogImage }: PageSEOProps): Metadata {
  const image = ogImage || "https://kojilab.vercel.app/og/Home-og-img.png";
  return {
    ...defaultMetadata,
    title: { default: title, template: "%s | KojiLab" },
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      images: [image],
    },
    alternates: { canonical: url },
  };
}
