import BannerCPN from "@/components/Main/BannerCPN";
import MainContainer from "@/components/Main/MainContainer";
import PromoBanner from "@/components/PromoBanner";

export default async function Home() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store", // ou "force-cache" si c’est une liste stable
  });
  const data = await res.json();
  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <BannerCPN />
      <MainContainer products={data} />
    </div>
  );
}
