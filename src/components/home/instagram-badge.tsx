
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "../ui/separator";

export function InstagramBadge() {
    const avatar = PlaceHolderImages.find(img => img.id === 'kirtan-avatar');

    return (
        <Card className="w-[240px] pt-4 text-left">
            <CardHeader className="flex flex-row items-center gap-4 p-4">
                {avatar && (
                    <Image 
                        src={avatar.imageUrl}
                        alt="Kirtan Kalathiya"
                        width={64}
                        height={64}
                        className="rounded-full"
                        data-ai-hint={avatar.imageHint}
                    />
                )}
                <div>
                    <h3 className="font-bold text-base">kirtankalathiyas</h3>
                    <p className="text-sm text-muted-foreground">Kirtan Kalathiya</p>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                 <div className="flex justify-around text-center">
                    <div>
                        <p className="font-bold">15</p>
                        <p className="text-xs text-muted-foreground">Posts</p>
                    </div>
                     <div>
                        <p className="font-bold">250</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                     <div>
                        <p className="font-bold">300</p>
                        <p className="text-xs text-muted-foreground">Following</p>
                    </div>
                </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-4">
                <Button asChild className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90 text-white">
                    <Link href="https://www.instagram.com/kirtankalathiyas/" target="_blank">
                        Follow on Instagram
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
