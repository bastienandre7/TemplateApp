import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TemplateCardProps = {
  id?: string | number;
  name: string;
  slug: string;
  description?: string;
  category: string;
  price: number;
  image?: string;
  imageUrl?: string;
  demoUrl?: string;
  openGraphImage?: string;
  created_at?: string | Date;
  owned?: boolean;
  discount?: number;
};

export default function TemplateCard({
  id,
  name,
  slug,
  description,
  category,
  price,
  image,
  imageUrl,
  openGraphImage,
  created_at,
  owned = false,
}: TemplateCardProps) {
  const isOwned = owned;
  const isNew =
    created_at &&
    new Date().getTime() - new Date(created_at).getTime() <
      14 * 24 * 60 * 60 * 1000;

  return (
    <Card
      key={id}
      className="group flex flex-col h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 bg-card"
    >
      <div className="relative aspect-[1200/630] bg-card">
        <div className="absolute inset-0">
          <div className="relative w-full h-full overflow-hidden bg-white">
            <Link href={`/nextjs-templates/${slug}`}>
              <Image
                src={
                  openGraphImage || imageUrl || image || "/images/NoImage.jpg"
                }
                alt={`${name} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
            </Link>
            {/* NEW Badge */}
            {isNew && (
              <span className="absolute top-3 right-3 bg-violet-600 text-white text-[11px] px-2 py-1 rounded-full font-medium shadow-sm">
                NEW
              </span>
            )}
            {/* Owned Badge */}
            {isOwned && (
              <span className="absolute bottom-3 right-3 bg-green-100 text-green-700 text-[11px] px-2 py-1 rounded-full font-medium shadow-sm">
                ✓ Owned
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <CardHeader className="pt-4 px-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs px-2 py-0.5">
              {category}
            </Badge>
            <div className="flex items-baseline gap-1">
              {Number(price) > 0 ? (
                <>
                  <span className="text-xs text-gray-900">From</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {price}$
                  </span>
                </>
              ) : (
                <span className="font-semibold text-gray-900 text-lg">
                  Free
                </span>
              )}
            </div>
          </div>
          <CardTitle className="text-lg font-semibold">
            <Link
              href={`/nextjs-templates/${slug}`}
              className="hover:text-primary transition-colors line-clamp-1"
            >
              {name}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-4">
          <CardDescription className="text-sm text-gray-500 line-clamp-2 mt-1">
            {description ||
              "A beautifully crafted template ready for your next project."}
          </CardDescription>
        </CardContent>
      </div>

      <CardFooter className="flex px-4 pt-4 pb-6">
        <Button
          variant="default"
          className="flex-1 justify-center flex items-center rounded-md"
          asChild
        >
          <Link href={`/nextjs-templates/${slug}`}>
            View Details <ExternalLink />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
