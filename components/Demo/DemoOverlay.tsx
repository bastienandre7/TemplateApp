"use client";

import { Template } from "@/lib/types";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import HeaderCPN from "../Header/HeaderCPN";

interface DemoOverlayProps {
  template: Template;
  ownedTemplates?: string[];
}

export default function DemoViewer({
  template,
  ownedTemplates = [],
}: DemoOverlayProps) {
  const [viewMode, setViewMode] = useState("desktop");
  const { data: session } = useSession();

  const isOwned = ownedTemplates.includes(template.name);

  return (
    <div className="bg-gray-100 pt-4">
      <HeaderCPN />
      <div className="flex flex-col h-screen max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mt-8 gap-4">
          <h1 className="text-black font-bold text-3xl">{template.name}</h1>
          <p className="text-gray-600 max-w-2xl">{template.description}</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href={`/template/${template.id}`}>
              <button className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-black transition">
                More Info
              </button>
            </Link>
            {isOwned ? (
              <Link href="/dashboard">
                <button className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition">
                  Owned – View in Dashboard
                </button>
              </Link>
            ) : (
              <button
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition"
                onClick={() => {
                  if (!session) {
                    signIn();
                  } else if (session.user?.email) {
                    const email = encodeURIComponent(session.user.email);
                    const url = `${template.lemonLink}?checkout[email]=${email}`;
                    window.location.href = url;
                  }
                }}
              >
                Buy Now – {template.price}€
              </button>
            )}
          </div>
        </div>

        <div className="pt-8 hidden md:flex justify-center gap-4">
          <button
            onClick={() => setViewMode("desktop")}
            className={`px-6 py-2 rounded-lg text-white flex items-center gap-2 ${
              viewMode === "desktop" ? "bg-blue-600" : "bg-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            PC
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`px-6 py-2 rounded-lg text-white flex items-center gap-2 ${
              viewMode === "mobile" ? "bg-blue-600" : "bg-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            Mobile
          </button>
        </div>

        <div className="flex-1 bg-gray-100 py-4 md:py-8 flex items-center justify-center overflow-hidden">
          <div
            className={`bg-white rounded-lg overflow-hidden ${
              viewMode === "desktop" ? "w-full h-full" : "w-[430px] h-[667px]"
            }`}
          >
            {template.demoUrl ? (
              <iframe
                src={template.demoUrl}
                className="w-full h-full bg-white border-2"
                title={`${template.name} Demo`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-center p-6 text-red-500 font-semibold">
                Sorry, this template has no live demo available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
