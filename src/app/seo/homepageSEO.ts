import type { Metadata } from "next";
import { defaultMetadata } from "./index";

export const homepageSEO: Metadata = {
  ...defaultMetadata,
  title: {
    default: "KojiLab Three.js Studio | Premium WebGL & GLSL Shader Gallery",
    template: "%s | KojiLab",
  },
  description:
    "KojiLab Three.js Studio by Sujit Koji — a premium hub for advanced Three.js, React Three Fiber, and GLSL shader art. Explore real-time 3D visuals, raymarching effects, and cinematic WebGL experiences crafted with precision and creativity.",
  keywords: [
    "KojiLab",
    "Three.js Studio",
    "React Three Fiber",
    "WebGL Portfolio",
    "GLSL Shaders",
    "3D Shader Gallery",
    "Shader Art",
    "Raymarching",
    "Procedural Graphics",
    "Next.js WebGL",
    "Creative Coding Studio",
    "Sujit Koji",
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "KojiLab Three.js Studio | Premium WebGL & GLSL Shader Gallery",
    description:
      "Discover KojiLab — a premium Three.js Studio specializing in WebGL, React Three Fiber, and GLSL shaders. Experience cinematic raymarching visuals and interactive 3D art.",
    url: "https://kojilab.vercel.app",
    siteName: "KojiLab Three.js Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://kojilab.vercel.app/og/Home-og-img.png",
        width: 1200,
        height: 630,
        alt: "KojiLab Three.js Studio - WebGL GLSL Shader Gallery",
      },
    ],
  },
  twitter: {
    ...defaultMetadata.twitter,
    card: "summary_large_image",
    title: "KojiLab Three.js Studio | Premium WebGL & GLSL Shader Gallery",
    description:
      "Explore premium WebGL and GLSL shaders built using Three.js and React Three Fiber at KojiLab — a creative studio by Sujit Koji.",
    site: "@kojilab",
    creator: "@sujitkoji",
    images: ["https://kojilab.vercel.app/og/Home-og-img.png"],
  },
  alternates: { canonical: "https://kojilab.vercel.app" },
  metadataBase: new URL("https://kojilab.vercel.app"),
  authors: [{ name: "Sujit Koji", url: "https://kojilab.vercel.app" }],
  creator: "Sujit Koji",
  publisher: "KojiLab Studio",
  category: "Creative Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
