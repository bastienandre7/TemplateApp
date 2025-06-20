import HeaderCPN from "@/components/Header/HeaderCPN";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-4 bg-gray-950">
      <HeaderCPN />
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! This page does not exist or is no longer available.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
