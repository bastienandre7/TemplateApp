"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthButton from "./sign-in";

export default function HeaderCPN() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Templates", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "Blog", path: "/blog" },
    { name: "License", path: "/license" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className="bg-white/90 backdrop-blur-lg rounded-2xl max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4 border border-gray-200/30 shadow-lg transition-all duration-300">
        <div className="flex items-center space-x-8 rtl:space-x-reverse">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              BloomTPL
            </span>
          </Link>
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <ul className="flex space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`py-2 px-4 text-gray-700 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                      pathname === link.path
                        ? "bg-purple-100 text-purple-700 shadow-sm"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bouton de connexion et menu mobile */}
        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
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
                className={`block py-3 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                  pathname === link.path
                    ? "bg-purple-100 text-purple-700 shadow-sm"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
