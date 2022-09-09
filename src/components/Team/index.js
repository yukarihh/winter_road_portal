

import bgImage from "../../assets/homebg_3.png";
import TeamMember from "./TeamMember";
import "./styles.css";
import { Typography } from "antd";
function Team({teamName}) {
    const TeamMemberInfo = [
        {
          id: 1,
          image: bgImage,
          name: "Leo HC Li",
          title: "Founder & CEO",
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
            id: 2,
            image: bgImage,
            name: "Leo HC Li",
            title: "Founder & CEO",
            email: "leeoo.li@mail.utoronto.ca"
  
          },

      ];
  return (
    <div className="teamTitle"> <Typography.Title style={{color: "#0e2959", paddingTop: "20px"}}>Project</Typography.Title>
    <div className="teamContainer">
       
        {TeamMemberInfo.map((content) => (
        <TeamMember key={content.id} props={content} />
      ))}
    </div>
    </div>
  );
}

export default Team;
