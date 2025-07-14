import HeaderCPN from "@/components/Header/HeaderCPN";
import { components } from "@/data/components";
import Link from "next/link";

export default function ComponentsPage() {
  return (
    <div className="pt-20">
      <HeaderCPN />
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-8">Free React Components</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {components.map((comp) => (
            <div
              key={comp.slug}
              className="border rounded-lg p-4 bg-gray-50 flex flex-col items-center"
            >
              <div className="mb-2">{comp.preview}</div>
              <div className="font-semibold mb-1">{comp.name}</div>
              <div className="text-xs text-gray-500 mb-2">
                {comp.description}
              </div>
              <Link
                href={`/components/${comp.slug}`}
                className="text-purple-600 hover:underline text-xs"
              >
                View details & code
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
