import bgImage from "../../assets/homebg_3.png";
import DataTable from "../../components/DataTable";
import CoverBanner from "../../components/Global/CoverBanner";
import ProjectBanner from "../../components/Projects/ProjectBanner";
import SubSectionBanner from "../../components/SubSectionBanner";
import "./styles.css";
function Observation() {
  const BannerContents = [
    {
      id: 1,
      image: bgImage,
      title: "Thank you for contributing to a better North",
      content: "Feel free to export the data to Excel format ",
      bgColor: "white",
    },
  ];
  return (
    <div>
      <CoverBanner title="Observation" />
      <SubSectionBanner props={BannerContents[0]} />
      <div className="observationIframeContainer">
        <iframe
          className="observationIframe"
          src="https://survey123.arcgis.com/share/b0133ca727c249c1825e1c637298be74"
        ></iframe>
      </div>
    </div>
  );
}

export default Observation;
