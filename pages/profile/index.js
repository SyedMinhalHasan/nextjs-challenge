import Initials from "../../assets/Initials_Icon.svg";
import DocIcon from "../../assets/Doc_Icon.svg";
import EditIcon from "../../assets/Edit_Icon.svg";

import TabsComponent from "../../components/tabs";
import Actions from "../../components/actions";
import Collectibles from "../../components/collectibles";
import ConnectedExperiences from "../../components/connected-experiences";

const Profile = () => {
  const data = {
    Collectibles: <Collectibles />,
    Actions: <Actions />,
    "Connected experiences": <ConnectedExperiences />
  };
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <Initials />
          <div className="flex">
            <DocIcon className="mr-4" />
            <EditIcon />
          </div>
        </div>
        <div className="mt-3 mb-4">
          <h1 className="text-lg font-semibold text-gray-700">Devon Lane</h1>
          <h2 className="text-medium font-normal text-gray-500">
            devonlane@gmail.com
          </h2>
        </div>
      </div>
      <TabsComponent data={data} />
    </>
  );
};

export default Profile;
