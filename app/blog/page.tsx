import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary mb-8 border-b-4 border-primary pb-4">
        Blog Posts
      </h1>
      <p className="text-gray-600 mb-8">
        All research updates, insights, and announcements from SHawn Lab.
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No posts yet. Start writing in Obsidian!</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-primary hover:text-secondary transition mb-2">
                  {post.title}
                </h2>
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <time>{post.date}</time>
                <span className="px-2 py-1 bg-secondary text-white rounded text-xs">
                  {post.category}
                </span>
                <span>{post.readingTime}</span>
              </div>
              {post.description && (
                <p className="text-gray-700 mb-4">{post.description}</p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-block mt-4 text-primary hover:text-secondary transition font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
