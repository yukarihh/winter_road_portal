

import bgImage from "../../assets/homebg_3.png";
import yukari from "../../assets/Yukari.png";
import leo from "../../assets/Leo.png";
import CoverBanner from "../../components/Global/CoverBanner";
import Team from "../../components/Team";
function About() {
  const TeamMemberInfo = [[
    {
      id: 1,
      image: bgImage,
      name: "Dr. William A. Gough",
      title: "Professor",
      email: "leeoo.li@mail.utoronto.ca"

    },
    {
        id: 2,
        image: yukari,
        name: "Yukari Hori",
        title: "Research Associate and Project Manager",
        email: "y.hori@utoronto.ca"

      },
      {
        id: 3,
        image: bgImage,
        name: "Leo HC Li",
        title: "Founder & CEO",
        email: "leeoo.li@mail.utoronto.ca"

      },
      {
        id: 4,
        image: leo,
        name: "Leo HC Li",
        title: "Founder & CEO",
        email: "leeoo.li@mail.utoronto.ca"

      }], [
        {
          id: 1,
          image: bgImage,
          name: "Dr. Amy Kim",
          title: "Professor",
          email: "leeoo.li@mail.utoronto.ca"
    
        },
        {
            id: 2,
            image: bgImage,
            name: "Leo HC Li",
            title: "Founder & CEO",
            email: "leeoo.li@mail.utoronto.ca"
    
          },
          {
            id: 3,
            image: bgImage,
            name: "Leo HC Li",
            title: "Founder & CEO",
            email: "leeoo.li@mail.utoronto.ca"
    
          }]

  ];
  return (
    <div>
      <CoverBanner title="About" />
    <Team teamName={"University of Toronto Scarborough"} teamMemberInfo={TeamMemberInfo[0]} />
    <Team teamName={"UBC"} teamMemberInfo={TeamMemberInfo[1]}/>
    </div>
  );
}

export default About;
