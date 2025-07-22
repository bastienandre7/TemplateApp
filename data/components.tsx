import { ReactNode } from "react";

export type ComponentCategory =
  | "buttons"
  | "cards"
  | "forms"
  | "navigation"
  | "layout"
  | "feedback";

export type FreeComponent = {
  name: string;
  slug: string;
  description: string;
  category: ComponentCategory;
  code: string;
  preview: ReactNode;
  image: string;
};

export const categories: {
  value: ComponentCategory;
  label: string;
  count?: number;
}[] = [
  { value: "buttons", label: "Buttons" },
  { value: "cards", label: "Cards" },
  { value: "forms", label: "Forms" },
  { value: "navigation", label: "Navigation" },
  { value: "layout", label: "Layout" },
  { value: "feedback", label: "Feedback" },
];

export const components: FreeComponent[] = [
  // BUTTONS
  {
    name: "Primary Button",
    slug: "primary-button",
    description: "A simple purple primary button with hover effects.",
    category: "buttons",
    image: "/images/components/primary-button.png",
    code: `export default function PrimaryButton() {
  return (
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
      Primary Button
    </button>
  );
}`,
    preview: (
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
        Primary Button
      </button>
    ),
  },
  {
    name: "Outline Button",
    slug: "outline-button",
    description: "A clean outline button with hover fill effect.",
    category: "buttons",
    image: "/images/components/outline-button.png",
    code: `export default function OutlineButton() {
  return (
    <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
      Outline Button
    </button>
  );
}`,
    preview: (
      <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
        Outline Button
      </button>
    ),
  },
  {
    name: "Icon Button",
    slug: "icon-button",
    description: "Button with icon and text for better UX.",
    category: "buttons",
    image: "/images/components/icon-button.png",
    code: `export default function IconButton() {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Add Item
    </button>
  );
}`,
    preview: (
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Item
      </button>
    ),
  },

  // CARDS
  {
    name: "Product Card",
    slug: "product-card",
    description: "A beautiful product card with image, title, and price.",
    category: "cards",
    image: "/images/components/product-card.png",
    code: `export default function ProductCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow max-w-xs">
      <div className="relative h-48 overflow-hidden">
        <img 
          src="YourImageURLHere.jpg" 
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Product Name</h3>
        <p className="text-gray-600 text-sm mb-3">Short product description here.</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-purple-600">$99</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}`,
    preview: (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow max-w-xs">
        <div className="relative h-48 overflow-hidden">
          <img
            src="/images/NoImage.jpg"
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Product Name</h3>
          <p className="text-gray-600 text-sm mb-3">
            Short product description here.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-purple-600">$99</span>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Profile Card",
    slug: "profile-card",
    description: "User profile card with avatar and social links.",
    category: "cards",
    image: "/images/components/profile-card.png",
    code: `export default function ProfileCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow max-w-xs">
      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
        JD
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">John Doe</h3>
      <p className="text-gray-600 text-sm mb-4">Frontend Developer</p>
      <div className="flex justify-center gap-3">
        <button className="text-gray-400 hover:text-purple-600 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </button>
        <button className="text-gray-400 hover:text-purple-600 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}`,
    preview: (
      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow max-w-xs">
        <div
          className="rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
          style={{
            width: "64px",
            height: "64px",
            background: "linear-gradient(to right, #a855f7, #9333ea)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          JD
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">John Doe</h3>
        <p className="text-gray-600 text-sm mb-4">Frontend Developer</p>
        <div className="flex justify-center gap-3">
          <button className="text-gray-400 hover:text-purple-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-purple-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
        </div>
      </div>
    ),
  },
  // FORMS
  {
    name: "Contact Form",
    slug: "contact-form",
    description: "Simple contact form with validation styling.",
    category: "forms",
    image: "/images/components/contact-form.png",
    code: `export default function ContactForm() {
  return (
    <form className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition resize-none"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition"
      >
        Send Message
      </button>
    </form>
  );
}`,
    preview: (
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition"
        >
          Send Message
        </button>
      </form>
    ),
  },

  // NAVIGATION
  {
    name: "Navigation Bar",
    slug: "navbar",
    description: "Clean navigation bar with logo and menu items.",
    category: "navigation",
    image: "/images/components/navigation-bar.png",
    code: `export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl text-purple-600">
          Brand
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-purple-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition">
            Contact
          </a>
        </div>
        
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}`,
    preview: (
      <nav className="bg-white border-b border-gray-200 px-6 py-4 w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-bold text-xl text-purple-600">Brand</div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Contact
            </a>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
            Get Started
          </button>
        </div>
      </nav>
    ),
  },

  // FEEDBACK
  {
    name: "Alert Success",
    slug: "alert-success",
    description: "Success alert with icon and close button.",
    category: "feedback",
    image: "/images/components/alert-success.png",
    code: `export default function AlertSuccess() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-green-800">Success!</h3>
        <p className="text-sm text-green-700 mt-1">
          Your changes have been saved successfully.
        </p>
      </div>
      <button className="text-green-400 hover:text-green-600 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}`,
    preview: (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 max-w-md">
        <svg
          className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-green-800">Success!</h3>
          <p className="text-sm text-green-700 mt-1">
            Your changes have been saved successfully.
          </p>
        </div>
        <button className="text-green-400 hover:text-green-600 transition">
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
        </button>
      </div>
    ),
  },

  // LAYOUT
  {
    name: "Hero Section",
    slug: "hero-section",
    description: "Modern hero section with CTA buttons.",
    category: "layout",
    image: "/images/components/hero-section.png",
    code: `export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build Something
          <span className="text-yellow-300"> Amazing</span>
        </h1>
        <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
          Create stunning websites with our modern templates and components. 
          Start building your dream project today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition">
            Get Started
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}`,
    preview: (
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 rounded-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Build Something
            <span className="text-yellow-300"> Amazing</span>
          </h1>
          <p className="text-sm mb-6 text-purple-100 max-w-2xl mx-auto">
            Create stunning websites with our modern templates and components.
            Start building your dream project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition text-sm">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-2 rounded-lg font-semibold transition text-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>
    ),
  },
];

// Helper function to get components by category
export const getComponentsByCategory = (category: ComponentCategory) => {
  return components.filter((component) => component.category === category);
};

// Helper function to get categories with component counts
export const getCategoriesWithCounts = () => {
  return categories.map((category) => ({
    ...category,
    count: components.filter((comp) => comp.category === category.value).length,
  }));
};
