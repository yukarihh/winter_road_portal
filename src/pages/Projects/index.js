

import bgImage from "../../assets/homebg_3.png";
import CoverBanner from "../../components/Global/CoverBanner";
import ProjectBanner from "../../components/Projects/ProjectBanner";
function Projects() {
    const BannerContents = [
        {
          id: 1,
          image: bgImage,
          title: "Climate Change Impacts on Winter Roads and Trails",
          content:
            "Winter road networks are critical land transportation for remote Northern communities who rely on these networks for receiving essential goods and services during winter season. The public and private transportation sectors also rely on winter road networks for their operations. A warming climate has created a shorter winter road season, unreliable road conditions, and safety concerns. ",
          bgColor: "white",
        },
    
        {
          id: 2,
          image: bgImage,
          title: "Climate Change Impacts on Northern Transportation Networks ",
          content:
            "In the North, winter roads provide relatively inexpensive overland connection to the all-season road network, which in turn connects from remote to larger communities and the rest of Canada, much passenger and freight movements for remote Northern communities and resource sites occur during the winter road season. Climate change is impacting the surface quality of the winter roads, seasonal lengths, and freight schedule such as the movements of goods and services. ",
          bgColor: "#F7FAEF",
        },
        {
          id: 3,
          image: bgImage,
          title: "Yukari ",
          content:
            "A shorter winter road season with less reliable winter road conditions has a substantial socio-economic impact on Northern communities, particularly for remote Indigenous communities. The lack of winter road access for these remote communities has important consequences from a socio-economic perspective, for example, an increase in price of goods and services, which are already expensive in the North. ",
          bgColor: "white",
        },
      ];
  return (
    <div>
      <CoverBanner title="Projects" />
      <ProjectBanner props={BannerContents[0]}/>
      <ProjectBanner props={BannerContents[0]}/>
    </div>
  );
}

export default Projects;
