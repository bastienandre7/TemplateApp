import HeaderCPN from "../Header/HeaderCPN";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-violet-100 to-pink-100 border-b pt-4">
      <HeaderCPN />
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        {/* Texte (3/4 de la largeur) */}
        <div className="w-full text-center">
          <h1 className="text-4xl text-black font-extrabold sm:text-6xl">
            Build with Ease.
            <strong className="font-extrabold text-blue-400 sm:block">
              Tailwind UI Components for Every Project.
            </strong>
          </h1>
          <p className="mt-4 mx-auto max-w-lg sm:text-lg text-gray-900">
            Speed up development with high-quality, customizable Tailwind CSS
            components. Designed for modern applications and optimized for
            performance.
          </p>
        </div>
      </div>
    </section>
  );
}
