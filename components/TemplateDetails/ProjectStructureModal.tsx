"use client";
import { useState } from "react";

export default function ProjectStructureModal({
  structure,
}: {
  structure: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="text-sm text-gray-700 border border-gray-200 rounded-lg px-4 py-2 bg-white hover:bg-gray-50 transition"
        onClick={() => setOpen(true)}
      >
        View project structure
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto mx-6">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">Project Structure</h3>
            <pre className="bg-gray-50 rounded-xl p-4 text-sm text-gray-800 overflow-x-auto">
              {structure}
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
