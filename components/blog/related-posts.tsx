"use client"

import { Post } from "@/lib/mdx"
import { PostCard } from "./post-card"

interface RelatedPostsProps {
    posts: Post[]
    currentSlug: string
    currentCategory: string
    currentTags: string[]
}

export function RelatedPosts({ posts, currentSlug, currentCategory, currentTags }: RelatedPostsProps) {
    // Calculate relevance score for each post
    const scoredPosts = posts
        .filter(post => post.slug !== currentSlug)
        .map(post => {
            let score = 0

            // Same category gets highest priority
            if (post.category === currentCategory) {
                score += 10
            }

            // Count matching tags
            const matchingTags = post.tags.filter(tag => currentTags.includes(tag))
            score += matchingTags.length * 3

            return { post, score }
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)

    if (scoredPosts.length === 0) {
        return null
    }

    return (
        <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold font-heading mb-6">관련 글</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {scoredPosts.map(({ post }, index) => (
                    <PostCard key={post.slug} post={post} index={index} />
                ))}
            </div>
        </div>
    )
}
