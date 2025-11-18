"use client";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

type Template = {
  price: number;
  demoUrl: string;
};

export default function HeroCtaButtons({ template }: { template: Template }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <Button
        size="lg"
        variant="outline"
        className="w-full sm:flex-1 h-[50px] text-foreground"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Download className="size-4" />
        Purchase for {template.price === 0 ? "FREE" : `$${template.price}`}
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-full bg-transparent sm:flex-1 h-[50px] text-white border-white hover:bg-transparent hover:text-black"
        asChild
      >
        <Link href={template.demoUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="size-4" />
          Live Preview
        </Link>
      </Button>
    </div>
  );
}
