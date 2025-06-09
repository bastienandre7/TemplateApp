import BannerCPN from "@/components/Main/BannerCPN";
import MainContainer from "@/components/Main/MainContainer";

export default async function Home() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="min-h-screen bg-white">
      <BannerCPN />
      <MainContainer products={data} />
    </div>
  );
}
