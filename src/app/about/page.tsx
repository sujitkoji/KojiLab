import { Metadata } from "next";
import ClientAboutPage from "@/app/about/ClientAboutPage";

export const metadata: Metadata = {
  title: "About KojiLab - Creative Shader Studio by Sujit Koji",
  description:
    "KojiLab is a creative shader and WebGL studio founded by Sujit Koji. We craft immersive 3D experiences, GLSL shader art, and real-time graphics that merge design with cutting-edge web technology.",

  keywords: [
    "KojiLab",
    "About KojiLab",
    "WebGL Studio",
    "Shader Studio",
    "GLSL Art",
    "Creative Coding",
    "React Three Fiber",
    "3D Web Experiences",
    "Sujit Koji",
  ],

  openGraph: {
    title: "About KojiLab - Creative Shader & WebGL Studio",
    description:
      "Meet Sujit Kumar, the creator of KojiLab — a studio focused on GLSL shaders, WebGL art, and 3D interactive web design. Learn about the mission behind immersive creative coding.",
    url: "https://kojilab.vercel.app/about",
    siteName: "KojiLab",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://kojilab.vercel.app/og/About-og-img.png", 
        width: 1200,
        height: 630,
        alt: "About KojiLab - Creative Shader Studio by Sujit Koji",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About KojiLab - Creative Shader Studio by Sujit Koji",
    description:
      "Discover KojiLab - a WebGL and GLSL shader studio crafting futuristic 3D web experiences with real-time creativity and innovation.",
    site: "@sujitkoji",  
    images: ["https://kojilab.vercel.app/og/About-og-img.png"], 
  },

  alternates: {
    canonical: "https://kojilab.vercel.app/about",
  },

  metadataBase: new URL("https://kojilab.vercel.app"),
  authors: [{ name: "Sujit Koji", url: "https://kojilab.vercel.app" }],
  creator: "sujitkoji",
  publisher: "KojiLab Studio",
  category: "Creative Technology",
};

export default function AboutPage() {
  return <ClientAboutPage />;
}
