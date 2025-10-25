import { getPageSEO } from "@/app/seo/getPageSEO";
import type { Metadata } from "next";

export const metadata: Metadata = getPageSEO({
  title: "Privacy Policy | KojiLab",
  description:
    "Read KojiLab's privacy policy to learn how we protect your data, maintain confidentiality, and use cookies for better user experience.",
  url: "https://kojilab.vercel.app/privacy-policy",
  ogImage: "https://kojilab.vercel.app/og/Privacy-og-img.png",
});

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-16 text-[#e0e0e0] leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Privacy <span className="text-[#29D8FF]">Policy</span>
      </h1>

      <p className="mb-4">
        At <strong>KojiLab</strong>, we respect your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how we
        collect, use, and safeguard your data when you visit our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <p>
        We may collect personal details such as your name, email address, or
        communication messages when you contact us or subscribe to updates.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <p>
        Your information is used to improve our website experience, respond to
        inquiries, and occasionally send updates or newsletters.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
      <p>
        We use cookies to analyze website traffic and personalize content. You
        can disable cookies in your browser settings at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Google AdSense</h2>
      <p>
        KojiLab uses Google AdSense to display ads. Google may use cookies to
        serve ads based on your prior visits to our site or other websites. You
        can opt out of personalized advertising by visiting Google Ads Settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
      <p>
        We use SSL encryption and secure hosting to protect your personal data
        against unauthorized access or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:sujitkoji@gmail.com" className="text-blue-500 underline">
          sujitkoji@gmail.com
        </a>.
      </p>
    </main>
  );
}
