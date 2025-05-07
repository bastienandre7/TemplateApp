"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthButton from "./sign-in";

export default function HeaderCPN() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // menu fermé par défaut

  const navLinks = [
    { name: "Templates", path: "/" },
    // { name: "Components", path: "/components" },
    { name: "Docs", path: "/docs" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="px-4 ">
      <nav className="bg-transparent sticky w-full z-20 top-0 start-0">
        <div className="bg-white rounded-xl max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo et liens de navigation */}
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                BloomTPL
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <ul className="flex space-x-8 rtl:space-x-reverse">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`py-2 px-3 text-black text-sm font-medium rounded-sm md:p-0 ${
                        pathname === link.path
                          ? "underline "
                          : "hover:underline"
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
              onClick={() => setIsOpen(!isOpen)} // toggle le menu
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile (liens de navigation) */}
        {isOpen && (
          <div className="md:hidden w-full pt-2" id="navbar-sticky">
            <ul className="flex flex-col p-4 font-semibold border border-gray-100 rounded-lg bg-white dark:bg-gray-800">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)} // referme le menu quand on clique sur un lien
                    className={`block py-2 px-3 text-gray-900 rounded-sm md:p-0 dark:text-white ${
                      pathname === link.path
                        ? "underline text-blue-400"
                        : "hover:underline hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
