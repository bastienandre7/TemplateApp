import BannerCPN from "@/components/Main/BannerCPN";
import MainContainer from "@/components/Main/MainContainer";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <BannerCPN />
      <MainContainer />
    </div>
  );
}
