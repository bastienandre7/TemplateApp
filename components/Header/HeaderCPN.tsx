"use client";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PromoBanner from "../PromoBanner";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import AuthButton from "./sign-in";

export default function HeaderCPN() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { isFixed } = useScrollHeader();

  const navLinks = [
    { name: "Templates", path: "/template" },
    { name: "Components", path: "/components" },
    { name: "Bundle", path: "/bundle/ultimate" },
    { name: "Docs", path: "/docs" },
    { name: "Contact", path: "/contact" },
  ];

  const headerBgClass: { [key: string]: string } = {
    // "/": "bg-[#c2bbf0]",
    // "/template": "bg-[#CEE5ED]",
    "/bundle/ultimate": "bg-[#fff380]",
  };

  return (
    <header
      className={`transform transition-all duration-300 z-50 left-0 right-0 ${
        isFixed
          ? `fixed top-0 shadow-lg translate-y-0 ${headerBgClass[pathname] ?? "bg-white"}`
          : "absolute bg-transparent"
      }`}
    >
      <PromoBanner />
      <nav className="transition-all duration-300 px-6 py-4">
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse group"
            >
              <span className="self-center text-2xl font-bold whitespace-nowrap">
                BloomTPL
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <ul className="flex space-x-2 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`py-2 px-4 text-gray-900  font-medium rounded-lg transition-all duration-200 hover:bg-purple-50 hover:underline ${
                      pathname === link.path
                        ? "bg-purple-50 underline shadow-sm"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="py-2 px-4 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:bg-purple-50 hover:underline cursor-pointer">
                  More
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/#faq">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/license">License</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/blog">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Bouton de connexion et menu mobile */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <AuthButton />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg lg:hidden hover:bg-purple-50 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile (liens de navigation) */}
      {isOpen && (
        <div
          className="lg:hidden w-full pt-2 animate-in slide-in-from-top-2 duration-200"
          id="navbar-sticky"
        >
          <div className="flex flex-col p-6 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-xl mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block my-1 py-2 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                  pathname === link.path
                    ? "bg-purple-100 text-purple-700 shadow-sm"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#faq"
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                pathname === "/#faq"
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : ""
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/license"
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                pathname === "/license"
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : ""
              }`}
            >
              License
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                pathname === "/blog"
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : ""
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
