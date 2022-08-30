
import CarouselHome from "../../components/CarouselHome";
import WelcomeBanner from "../../components/Home/WelcomeBanner";
import FirstBanner from "../../components/Home/FirstBanner";
import SecondBanner from "../../components/Home/SecondBanner";
function Home() {
  return (
    <div>
      <CarouselHome />
      <WelcomeBanner />
      <FirstBanner />
      <SecondBanner />
    </div>
  );
}

export default Home;
