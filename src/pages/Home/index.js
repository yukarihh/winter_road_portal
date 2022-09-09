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
        "Where are winter roads and trails? How are winter roads affected by climate change? Our interactive map will allow you to explore Northern transportation networks, climate change impact assessment data, and socio-economic information. ",
      bgColor: "white",
    },
    {
      id: 2,
      image: bgImage,
      title: "Northern Transportation Network Database",
      content:
        "We host Northern transportation related data as mush as possible. TBA",
      bgColor: "white",
    },
    {
      id: 3,
      image: bgImage,
      title: "Winter Road and Trail Watch",
      content:
        "Our portal is also linked to the Winter Road and Trail Watch app that is a monitoring tool for tracking changes on the winter road and trail conditions.",
      bgColor: "white",
    },
    {
      id: 4,
      image: bgImage,
      title: "Winter Road Profile",
      content:
        "All winter roads have a unique feature. Learn more about each winter road network and how climate change has been impacting them.",
      bgColor: "white",
    },
  ];

  const PartnerContents = [
    {
      id: 1,
      image: bgImage,
      title: "University of Toronto Scarborough",
      url: "https://www.utsc.utoronto.ca/",
    },

    {
      id: 2,
      image: bgImage,
      title: "University of British Columbia",
      url: "https://www.ubc.ca/",
    },
    {
      id: 3,
      image: bgImage,
      title: "University of Alberta",
      url: "https://www.ualberta.ca/",
    },
    {
      id: 4,
      image: bgImage,
      title: "Transport Canada",
      url: "https://tc.canada.ca/en",
    },
    {
      id: 5,
      image: bgImage,
      title: "GNWT/GTNO Infrastructure",
      url: "https://www.inf.gov.nt.ca/en",
    },
    {
      id: 6,
      image: bgImage,
      title: "National Research Council Canada",
      url: "https://nrc.canada.ca/en",
    },
    {
      id: 7,
      image: bgImage,
      title: "Crown-Indigenous Relations and Northern Affairs Canada",
      url: "https://www.canada.ca/en/crown-indigenous-relations-northern-affairs.html",
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
