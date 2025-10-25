import { getPageSEO } from "@/app/seo/getPageSEO";
import type { Metadata } from "next";

export const metadata: Metadata = getPageSEO({
  title: "Cookie Policy | KojiLab",
  description:
    "Learn how KojiLab uses cookies to improve your browsing experience and personalize content.",
  url: "https://kojilab.vercel.app/cookie-policy",
  ogImage: "https://kojilab.vercel.app/og/Cookie-og-img.png",
});

export default function CookiePolicy() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-16 text-[#e0e0e0] leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Cookie <span className="text-[#29D8FF]">Policy</span>
      </h1>

      <p className="mb-4">
        KojiLab uses cookies to enhance your user experience. Cookies are small
        files stored on your device that help us analyze traffic, improve
        functionality, and personalize content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Types of Cookies</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Essential cookies: Required for website functionality.</li>
        <li>Analytics cookies: Help us understand user behavior.</li>
        <li>Advertising cookies: Used for personalized ads via Google AdSense.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Managing Cookies</h2>
      <p>
        You can disable cookies in your browser settings. Please note that some
        website features may not function properly without cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Google AdSense</h2>
      <p>
        KojiLab uses Google AdSense to serve personalized ads. Google may use
        cookies to show ads based on your interests. Learn more on{" "}
        <a
          href="https://www.google.com/policies/technologies/ads/"
          className="text-blue-500 underline"
          target="_blank"
        >
          Google Ads Policies
        </a>.
      </p>
    </main>
  );
}
