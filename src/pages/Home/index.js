import CarouselHome from "../../components/CarouselHome";
import WelcomeBanner from "../../components/Home/WelcomeBanner";
import TemplateBanner from "../../components/Home/TemlateBanner";
import Feature from "../../components/Home/Feature";

import bgImage from "../../assets/homebg_3.png";
import firstBanner from "../../assets/firstBanner.png";
import Partner from "../../components/Home/Partner";
import Footer from "../../components/Global/Footer";
function Home() {
  const BannerContents = [
    {
      id: 1,
      image: firstBanner,
      title: "Climate Change Impacts on Winter Roads and Trails",
      content:
        "Winter road networks are critical land transportation for remote Northern communities who rely on these networks for receiving essential goods and services during winter season. The public and private transportation sectors also rely on winter road networks for their operations. A warming climate has created a shorter winter road season, unreliable road conditions, and safety concerns. ",
      bgColor: "white",
    },

    {
      id: 2,
      image: bgImage,
      title: "Climate Change Impacts on Northern Transportation Networks",
      content:
        "In the North, winter roads provide relatively inexpensive overland connection to the all-season road network, which in turn connects from remote to larger communities and the rest of Canada, much passenger and freight movements for remote Northern communities and resource sites occur during the winter road season. Climate change is impacting the surface quality of the winter roads, seasonal lengths, and freight schedule such as the movements of goods and services. ",
      bgColor: "#F7FAEF",
    },
    {
      id: 3,
      image: bgImage,
      title: "Climate Change Impacts on Northern Communities",
      content:
        "A shorter winter road season with less reliable winter road conditions has a substantial socio-economic impact on Northern communities, particularly for remote Indigenous communities. The lack of winter road access for these remote communities has important consequences from a socio-economic perspective, for example, an increase in price of goods and services, which are already expensive in the North. ",
      bgColor: "white",
    },
  ];

  const FeatureContents = [
    {
      id: 1,
      image: bgImage,
      title: "Interactive Map",
      content:
        " Our portal is also linked to the Winter Road and Trail Watch app that is a monitoring tool for tracking changes on the winter road and trail conditions. ",
      bgColor: "white",
    },
    {
      id: 2,
      image: bgImage,
      title: "Climate Change Impacts on Winter Roads and Trails",
      content:
        " Our portal is also linked to the Winter Road and Trail Watch app that is a monitoring tool for tracking changes on the winter road and trail conditions. ",
      bgColor: "white",
    },
    {
      id: 3,
      image: bgImage,
      title: "Climate Change Impacts on Winter Roads and Trails",
      content:
        " Our portal is also linked to the Winter Road and Trail Watch app that is a monitoring tool for tracking changes on the winter road and trail conditions. ",
      bgColor: "white",
    },
    {
      id: 4,
      image: bgImage,
      title: "Climate Change Impacts on Winter Roads and Trails",
      content:
        " Our portal is also linked to the Winter Road and Trail Watch app that is a monitoring tool for tracking changes on the winter road and trail conditions. ",
      bgColor: "white",
    },
  ];

  const PartnerContents = [
    {
      id: 1,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utoronto.ca/",
    },

    {
      id: 2,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utoronto.ca/",
    },
    {
      id: 3,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utoronto.ca/",
    },
    {
      id: 4,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utoronto.ca/",
    },
    {
      id: 5,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utoronto.ca/",
    },
    {
      id: 6,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utoronto.ca/",
    },
    {
      id: 7,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utoronto.ca/",
    },
    {
      id: 8,
      image: bgImage,
      title: "Yukari",
      url: "https://google.com",
    },
  ];
  return (
    <div>
      <CarouselHome />
      <WelcomeBanner />

      {/* This is used to loop through all the content item in the contents, and generate banners */}
      {BannerContents.map((content) => (
        <TemplateBanner key={content.id} props={content} />
      ))}
      <Feature props={FeatureContents} />
      <Partner props={PartnerContents} />
    </div>
  );
}

export default Home;
