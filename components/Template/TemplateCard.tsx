import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  demoUrl,
  openGraphImage,
  created_at,
  owned = false,
  discount,
}: TemplateCardProps) {
  const isOwned = owned;
  const isNew =
    created_at &&
    new Date().getTime() - new Date(created_at).getTime() <
      14 * 24 * 60 * 60 * 1000;

  return (
    <Card
      key={id}
      className="group overflow-hidden border border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
    >
      <div className="relative aspect-[1200/630] bg-gray-50 cursor-pointer">
        <Link href={`/nextjs-templates/${slug}`}>
          <Image
            src={openGraphImage || imageUrl || image || "/images/NoImage.jpg"}
            alt={`${name} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
          {/* Tooltip on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30 text-white text-sm font-medium pointer-events-none group-hover:scale-105">
            View details →
          </div>
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

      <CardHeader className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs px-2 py-0.5">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-1">
          <Link
            href={`/nextjs-templates/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 line-clamp-2 mt-1">
          {description ||
            "A beautifully crafted template ready for your next project."}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between p-4 border-t border-gray-100">
        {/* Price */}
        <div className="flex items-baseline gap-1">
          {Number(price) > 0 ? (
            discount && discount < price ? (
              <>
                <span className="text-xs text-gray-900">From</span>
                <span className="text-sm text-gray-500 line-through">
                  {price}$
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {discount}$
                </span>
              </>
            ) : (
              <>
                <span className="text-xs text-gray-900">From</span>
                <span className="text-lg font-semibold text-gray-900">
                  {price}$
                </span>
              </>
            )
          ) : (
            <span className="text-sm font-semibold text-gray-900">FREE</span>
          )}
        </div>

        {/* Button */}
        {isOwned ? (
          <Button
            asChild
            variant="outline"
            className="text-sm border-green-200 text-green-700 hover:bg-green-50"
          >
            <Link href="/dashboard">Owned</Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="text-sm bg-white hover:bg-violet-50 hover:border-violet-200 transition-all"
            asChild
          >
            <Link
              href={demoUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
