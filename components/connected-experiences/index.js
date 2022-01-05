import ConnectedExperiencesItem from "./connected-experience-item";
import DocuSign from "../../assets/Docu_Sign.svg";
import Defi_Swap from "../../assets/Defi_Swap.svg";
const ConnectedExperiences = () => {
  const data = [
    {
      title: "Docu Sign",
      details: "connected on 12/10/2021 12:30 PM",
      Icon: <DocuSign />
    },
    {
      title: "Defi Swap",
      details: "connected on 12/10/2021 12:30 PM",
      Icon: <Defi_Swap />
    }
  ];

  return (
    <>
      <div className="h-12 text-md text-gray-500 font-semibold">
        2 connected experiences with devon
      </div>
      {data.map(({ title, details, Icon }) => (
        <ConnectedExperiencesItem title={title} details={details} Icon={Icon} />
      ))}
    </>
  );
};

export default ConnectedExperiences;
