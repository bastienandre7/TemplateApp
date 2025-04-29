import Link from "next/link";

export default function FooterCPN() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                BloomTPL
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/docs" className="hover:underline">
                    Docs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://x.com/BloomTPL" className="hover:underline ">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bloomtpl/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/terms-of-use" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/legal-notice" className="hover:underline">
                    Legal Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center text-gray-400">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              BloomTPL™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
