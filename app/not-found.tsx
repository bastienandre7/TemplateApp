import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-100">
        <div className="flex flex-col items-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
          <h1 className="text-6xl font-extrabold text-primary mb-2">404</h1>
          <p className="text-2xl font-semibold mb-2 text-gray-800">
            Page not found
          </p>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-md">
            Oops! The page you’re looking for doesn’t exist or has been moved.
            <br />
            Try checking the URL or return to the homepage.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow hover:bg-primary/90 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
