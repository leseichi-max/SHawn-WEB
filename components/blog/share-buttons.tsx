"use client"

import { useState } from "react"
import { Share2, Twitter, Facebook, Linkedin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareButtonsProps {
    title: string
    url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy:", err)
        }
    }

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-muted-foreground mr-2">공유하기:</span>

            <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(shareLinks.twitter, "_blank")}
                className="gap-2"
            >
                <Twitter className="w-4 h-4" />
                <span className="hidden sm:inline">Twitter</span>
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(shareLinks.facebook, "_blank")}
                className="gap-2"
            >
                <Facebook className="w-4 h-4" />
                <span className="hidden sm:inline">Facebook</span>
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(shareLinks.linkedin, "_blank")}
                className="gap-2"
            >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="gap-2"
            >
                {copied ? (
                    <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="hidden sm:inline text-green-500">복사됨!</span>
                    </>
                ) : (
                    <>
                        <Share2 className="w-4 h-4" />
                        <span className="hidden sm:inline">링크 복사</span>
                    </>
                )}
            </Button>
        </div>
    )
}
