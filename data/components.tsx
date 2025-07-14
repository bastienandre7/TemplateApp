import { ReactNode } from "react";

export type FreeComponent = {
  name: string;
  slug: string;
  description: string;
  code: string;
  preview: ReactNode;
};

export const components: FreeComponent[] = [
  {
    name: "Simple Button",
    slug: "button-free",
    description: "A simple purple button.",
    code: `
export default function ButtonFree() {
  return (
    <button className="bg-purple-600 text-white px-4 py-2 rounded">
      Free Button
    </button>
  );
}
`.trim(),
    preview: (
      <button className="bg-purple-600 text-white px-4 py-2 rounded">
        Free Button
      </button>
    ),
  },
  // Ajoute d'autres composants ici
];
