"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center px-4 lg:px-4">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="w-full">
              <div className="rounded-xl shadow-lg overflow-hidden border border-gray-300 w-full">
                <Image
                  src={img}
                  alt={`Product image ${idx + 1}`}
                  width={1200}
                  height={600}
                  unoptimized
                  className="rounded-xl object-cover w-full h-auto max-h-[800px]"
                  priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
