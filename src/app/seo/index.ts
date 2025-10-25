import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://kojilab.vercel.app"),

  title: {
    default: "KojiLab Three.js Studio | Premium WebGL & GLSL Shader Gallery",
    template: "%s | KojiLab Three.js Studio",
  },

  description:
    "KojiLab Three.js Studio by Sujit Koji — a professional WebGL & GLSL Shader Gallery built with React Three Fiber and Next.js. Explore cinematic shaders, raymarching effects, and real-time 3D art powered by Three.js.",

  keywords: [
    "KojiLab",
    "Three.js Studio",
    "WebGL Shaders",
    "GLSL Shader Gallery",
    "React Three Fiber",
    "3D Shader Portfolio",
    "Procedural Graphics",
    "Raymarching Shaders",
    "Shader Art",
    "Next.js WebGL",
    "Three.js Developer",
    "Creative Coding",
    "Realtime 3D Experience",
    "Sujit Koji",
  ],

  authors: [{ name: "Sujit Koji", url: "https://kojilab.vercel.app" }],
  creator: "Sujit Koji",
  publisher: "KojiLab Studio",
  category: "Creative Technology",

  alternates: { canonical: "https://kojilab.vercel.app" },

  icons: {
    icon: [
      { url: "/logo/favicon.ico", sizes: "any" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logo/apple-touch-icon.png",
  },

  manifest: "/logo/manifest.json",

  openGraph: {
    title: "KojiLab Three.js Studio | Premium WebGL & GLSL Shader Gallery",
    description:
      "Discover KojiLab — a global Three.js Studio showcasing real-time WebGL, GLSL, and React Three Fiber shaders. Experience premium 3D visuals, cinematic raymarching, and interactive shader art.",
    url: "https://kojilab.vercel.app",
    siteName: "KojiLab Three.js Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://kojilab.vercel.app/og/Home-og-img.png",
        width: 1200,
        height: 630,
        alt: "KojiLab Three.js Studio - WebGL & GLSL Shader Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KojiLab Three.js Studio | Premium WebGL & GLSL Shader Gallery",
    description:
      "Explore Three.js, WebGL, and GLSL shader art built with React Three Fiber — KojiLab Studio by Sujit Koji.",
    images: ["https://kojilab.vercel.app/og/Home-og-img.png"],
    creator: "@sujitkoji",
    site: "@sujitkoji",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
