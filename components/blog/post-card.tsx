"use client"

import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Post } from "@/lib/mdx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

interface PostCardProps {
    post: Post;
    index?: number;
}

// Category color mapping
const categoryColors: Record<string, { badge: string; border: string }> = {
    "Bio Knowledge": {
        badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
        border: "group-hover:border-emerald-500/50"
    },
    "Daily Life": {
        badge: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
        border: "group-hover:border-orange-500/50"
    },
    "Revenue": {
        badge: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
        border: "group-hover:border-purple-500/50"
    },
};

export function PostCard({ post, index = 0 }: PostCardProps) {
    const categoryStyle = categoryColors[post.category] || {
        badge: "bg-primary/10 text-primary border-primary/20",
        border: "group-hover:border-primary/50"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
        >
            <Link href={`/blog/${post.slug}`}>
                <Card className={`group flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${categoryStyle.border}`}>
                    <CardHeader>
                        <div className={`inline-flex items-center w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-3 ${categoryStyle.badge}`}>
                            {post.category}
                        </div>
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                            <time dateTime={post.date}>
                                {format(new Date(post.date), "yyyy. MM. dd")}
                            </time>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <CardDescription className="line-clamp-3 leading-relaxed">
                            {post.description}
                        </CardDescription>
                    </CardContent>
                    {post.tags && post.tags.length > 0 && (
                        <CardFooter className="flex gap-2 flex-wrap">
                            {post.tags.slice(0, 3).map(tag => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </CardFooter>
                    )}
                </Card>
            </Link>
        </motion.div>
    );
}
