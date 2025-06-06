"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center px-4">
      <div className="rounded-xl shadow-lg overflow-hidden mb-4 w-full border border-gray-800">
        <Image
          src={selectedImage}
          alt="Selected product"
          width={1200}
          height={600}
          unoptimized
          className="rounded-xl object-cover w-full h-auto max-h-[800px]"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`border-4 ${
              selectedImage === img ? "border-indigo-400" : "border-gray-700"
            } rounded-md cursor-pointer`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="object-cover  w-[60px] h-[60px] transition-transform transform hover:scale-101"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
