import bgImage from "../../assets/homebg_3.png";
import Bill from "../../assets/Bill.png";
import Yukari from "../../assets/Yukari.png";
import Len from "../../assets/Len.png";
import Leo from "../../assets/Leo.png";
import Haowen from "../../assets/Haowen.png";
import Larissa from "../../assets/Larissa.png";
import Amy from "../../assets/Amy.png";
import CoverBanner from "../../components/Global/CoverBanner";
import Team from "../../components/Team";
function About() {
  const TeamMemberInfo = [[
    {
      id: 1,
      image: Bill,
      name: "Dr. William A. Gough",
      title: "Professor",
      email: "william.gough@utoronto.ca"

    },
    {
        id: 2,
        image: Yukari,
        name: "Dr. Yukari Hori",
        title: "Research Associate, Project Manager",
        email: "y.hori@utoronto.ca"

      },
      {
        id: 3,
        image: Len,
        name: "Dr. Leonard J.S. Tsuji",
        title: "Professor",
        email: "leonard.tsuji@utoronto.ca"

      },
       {
        id: 4,
        image: Leo,
        name: "Leo HC Li",
        title: "Computer Engineering Co-op Student, Web programmar",
        email: "leeoo.li@mail.utoronto.ca"
       },
        {
        id: 5,
        image: Haowen,
        name: "Haowen Rui",
        title: "Computer Science Co-op Student, Web programmar",
        email: "anson.rui@mail.utoronto.ca"
        },
         {
        id: 6,
        image: Larissa,
        name: "Larissa Pizzolato",
        title: "PhD Student",
        email: "larissa.pizzolato@mail.utoronto.ca"
         }
       ], [
        {
          id: 1,
          image: Amy,
          name: "Dr. Amy M. Kim",
          title: "Associate Professor",
          email: "amykim@civil.ubc.ca"
    
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
    <Team teamName={"University of Toronto Scarborough (UTSC)"} teamMemberInfo={TeamMemberInfo[0]} />
    <Team teamName={"University of British Columbia (UBC)"} teamMemberInfo={TeamMemberInfo[1]}/>
    </div>
  );
}

export default About;
