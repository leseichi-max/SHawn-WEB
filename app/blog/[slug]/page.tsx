import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <time>{post.date}</time>
          <span className="px-3 py-1 bg-secondary text-white rounded">
            {post.category}
          </span>
          <span>{post.readingTime}</span>
        </div>
        {post.description && (
          <p className="text-lg text-gray-600 italic border-l-4 border-secondary pl-4">
            {post.description}
          </p>
        )}
      </header>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Tags:</strong>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </footer>
      )}

      {/* Back to Blog */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:text-secondary transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
