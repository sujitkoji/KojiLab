import { Metadata } from "next";
import ClientContactPage from "@/app/contacts/ClientContactPage";

export const metadata: Metadata = {
  title: "Contact | KojiLab - Get in Touch with Sujit Koji",
  description:
    "Reach out to KojiLab for collaborations, freelance projects, or creative partnerships. Connect directly with Sujit Koji - let's craft something extraordinary together.",

  keywords: [
    "Contact KojiLab",
    "Sujit Koji",
    "KojiLab Studio",
    "WebGL Developer",
    "Creative Coding",
    "Freelance Web Designer",
    "Shader Artist",
    "React Three Fiber",
    "3D Portfolio",
    "Next.js Developer",
  ],

  openGraph: {
    title: "Contact | KojiLab - Collaborate with Sujit Koji",
    description:
      "Get in touch with KojiLab for WebGL, GLSL, and creative technology collaborations. Sujit Koji is ready to help you bring 3D web ideas to life.",
    url: "https://kojilab.vercel.app/contacts",
    siteName: "KojiLab",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://kojilab.vercel.app/og/Contact-og-img.png",  
        width: 1200,
        height: 630,
        alt: "Contact KojiLab - Sujit Koji WebGL Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | KojiLab - Get in Touch with Sujit Kumar",
    description:
      "Collaborate with KojiLab - a creative WebGL & shader studio led by Sujit Koji. Let’s connect and create impactful digital experiences together.",
    site: "@sujitkoji",
    images: ["https://kojilab.vercel.app/og/Contact-og-img.png"],
  },

  alternates: {
    canonical: "https://kojilab.vercel.app/contacts",
  },

  metadataBase: new URL("https://kojilab.vercel.app"),
  authors: [{ name: "Sujit Koji", url: "https://kojilab.vercel.app" }],
  creator: "Sujit Koji",
  publisher: "KojiLab Studio",
  category: "Creative Technology",
};

export default function ContactPage() {
  return <ClientContactPage />;
}
