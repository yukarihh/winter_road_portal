import bgImage from "../../assets/homebg_3.png";
import DataTable from "../../components/DataTable";
import CoverBanner from "../../components/Global/CoverBanner";
import ProjectBanner from "../../components/Projects/ProjectBanner";
import SubSectionBanner from "../../components/SubSectionBanner";
function Transportation() {
  const BannerContents = [
    {
      id: 1,
      image: bgImage,
      title: "Northern Transportation Network Database",
      content: "Feel free to export the data to Excel format ",
      bgColor: "white",
    },
  ];
  return (
    <div>
      <CoverBanner title="Transportation" />
      <SubSectionBanner props={BannerContents[0]} />
      <DataTable />
    </div>
  );
}

export default Transportation;
