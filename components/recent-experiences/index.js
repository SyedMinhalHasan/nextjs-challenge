import ExperienceCard from "./experience-card";
import DeFiSwapIcon from "../../assets/Defi_Swap.svg";
import DocuSignIcon from "../../assets/Docu_Sign.svg";
const RecentExperiences = () => {
  return (
    <div>
      <div className="experience-header">
        <h1 className="text-lg font-bold text-gray-700">Recent Experiences</h1>
      </div>
      <ExperienceCard
        Icon={DeFiSwapIcon}
        title={"DeFi Swap"}
        subHeading={"Swap your digital assets"}
        usersCount={"200"}
      />
      <ExperienceCard
        Icon={DocuSignIcon}
        title={"Docu sign"}
        subHeading={"sign smart sontracts seamlessly"}
        usersCount={"1K"}
      />
    </div>
  );
};

export default RecentExperiences;
