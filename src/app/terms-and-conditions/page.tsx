import { getPageSEO } from "@/app/seo/getPageSEO";
import type { Metadata } from "next";

export const metadata: Metadata = getPageSEO({
  title: "Terms and Conditions | KojiLab",
  description:
    "Read KojiLab's terms and conditions for using our website, services, and digital content responsibly.",
  url: "https://kojilab.vercel.app/terms-and-conditions",
  ogImage: "https://kojilab.vercel.app/og/Terms-og-img.png",
});

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-16 text-[#e0e0e0] leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Terms and <span className="text-[#29D8FF]">Conditions</span>
      </h1>

      <p className="mb-4">
        Welcome to <strong>KojiLab</strong>. By accessing or using this website,
        you agree to comply with these Terms and Conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p>
        By using this website, you agree to these terms. If you disagree, please
        do not continue using KojiLab.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
      <p>
        All content, designs, code, and materials on KojiLab are owned or
        licensed by KojiLab. Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Limitation of Liability</h2>
      <p>
        KojiLab is not responsible for any damages arising from the use or
        inability to use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. External Links</h2>
      <p>
        Our website may contain links to external sites. We are not responsible
        for their content or privacy practices.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to Terms</h2>
      <p>
        We may update these Terms occasionally. Continued use of the website
        implies acceptance of any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href="mailto:sujitkoji@gmail.com" className="text-blue-500 underline">
          sujitkoji@gmail.com
        </a>.
      </p>
    </main>
  );
}
