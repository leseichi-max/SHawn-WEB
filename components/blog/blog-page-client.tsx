"use client"

import { useState, useMemo } from "react";
import { Post } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { BlogHeader } from "@/components/blog/blog-header";
import { CategoryFilter } from "@/components/blog/category-filter";

interface BlogPageClientProps {
    posts: Post[];
    categories: string[];
}

export function BlogPageClient({ posts, categories }: BlogPageClientProps) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter posts based on selected category
    const filteredPosts = useMemo(() => {
        if (selectedCategory === "All") return posts;
        return posts.filter(post => post.category === selectedCategory);
    }, [posts, selectedCategory]);

    // Separate featured posts
    const featuredPosts = filteredPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <main className="container max-w-screen-xl flex-1 py-12 md:py-16 mx-auto px-4">
            <BlogHeader />

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {filteredPosts.length > 0 ? (
                <>
                    {/* Featured Posts Section */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold font-heading mb-6">주요 글</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {featuredPosts.map((post, index) => (
                                    <PostCard key={post.slug} post={post} index={index} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Posts Grid */}
                    {regularPosts.length > 0 && (
                        <div>
                            {featuredPosts.length > 0 && (
                                <h2 className="text-2xl font-bold font-heading mb-6">모든 글</h2>
                            )}
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {regularPosts.map((post, index) => (
                                    <PostCard
                                        key={post.slug}
                                        post={post}
                                        index={featuredPosts.length + index}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-20">
                    <p className="text-muted-foreground text-lg">
                        {selectedCategory === "All"
                            ? "아직 작성된 글이 없습니다."
                            : `'${selectedCategory}' 카테고리에 글이 없습니다.`}
                    </p>
                </div>
            )}
        </main>
    );
}
