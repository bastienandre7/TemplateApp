"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      fetch("/api/download", {
        method: "POST",
        body: JSON.stringify({ session_id: sessionId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.downloadUrl) {
            setDownloadUrl(data.downloadUrl);
          }
        })
        .catch((err) => console.error("Error retrieving link:", err));
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Thank you for your purchase!</h1>
      <p className="mt-4">Your template is ready to download:</p>
      {downloadUrl ? (
        <a
          href={downloadUrl}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg"
          download
        >
          Download my template
        </a>
      ) : (
        <p className="mt-4">Retrieving link...</p>
      )}
    </div>
  );
}
