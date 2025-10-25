import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/app/blog/data";
import type { Metadata } from "next";

// ✅ 1. Correct props typing for Next.js 15+
interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// ✅ 2. Metadata Function (async params)
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params; // <- await params
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | KojiLab",
      description: "The requested blog could not be found on KojiLab.",
    };
  }

  const siteUrl = `https://kojilab.vercel.app/blog/${blog.slug}`;

  return {
    title: `${blog.title} | KojiLab Blog`,
    description: blog.description || "Explore premium WebGL shader tutorials by KojiLab.",
    keywords: blog.keywords,
    alternates: { canonical: siteUrl },
  };
}

// ✅ 3. Page Component (async params bhi await kar)
export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params; // <- await params
  const blog = await getBlogBySlug(slug);
  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-16 px-4 text-gray-200">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-8">
        {blog.date} • {blog.category} • {blog.author}
      </p>
      <div className="prose prose-invert max-w-none">{blog.content}</div>
    </article>
  );
}
