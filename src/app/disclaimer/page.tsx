import { getPageSEO } from "@/app/seo/getPageSEO";
import type { Metadata } from "next";

export const metadata: Metadata = getPageSEO({
  title: "Disclaimer | KojiLab",
  description:
    "Disclaimer for KojiLab: All information is provided in good faith for general informational purposes only.",
  url: "https://kojilab.vercel.app/disclaimer",
  ogImage: "https://kojilab.vercel.app/og/Disclaimer-og-img.png",
});

export default function Disclaimer() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-16 text-[#e0e0e0] leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        <span className="text-[#29D8FF]">Disclaimer</span>
      </h1>

      <p className="mb-4">
        The information provided on <strong>KojiLab</strong> is for general
        informational purposes only. All content is provided in good faith, but
        we make no representation or warranty regarding accuracy, adequacy,
        validity, reliability, or completeness of any information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Professional Disclaimer</h2>
      <p className="mb-4">
        The website may contain technical, design, or educational information,
        but it is not a substitute for professional advice. You should always
        verify information before making decisions based on it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. External Links Disclaimer</h2>
      <p className="mb-4">
        Our website may contain links to other websites. We are not responsible
        for the content, privacy policies, or practices of any third-party
        websites.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Affiliate Disclosure</h2>
      <p className="mb-4">
        Some links may be affiliate links, meaning we may earn a small
        commission at no extra cost to you if you purchase through those links.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        Last updated: {new Date().getFullYear()}
      </p>
    </main>
  );
}
