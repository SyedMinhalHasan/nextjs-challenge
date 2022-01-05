import CategoryCard from "./category-card";
import ExchangeIcon from "../../assets/Exchanges.svg";
import GameIcon from "../../assets/Games.svg";
import MarketplaceIcon from "../../assets/Marketplaces.svg";
import DefiIcon from "../../assets/Defi.svg";
import CollectiblesIcon from "../../assets/Collectibles.svg";
import UtilitiesIcon from "../../assets/Utilities.svg";
import RightArrowPurpleIcon from "../../assets/Right_Arrow_Purple.svg";

const PopularCategories = () => {
  return (
    <>
      <div className="flex justify-between mb-3">
        <h1 className="text-lg font-bold text-gray-700">Popular Categories</h1>
        <div className="flex items-center text-purple-500">
          <h3 className="font-semibold">See all</h3>{" "}
          <RightArrowPurpleIcon className="ml-3" />
        </div>
      </div>
      <div className="flex">
        <CategoryCard
          Icon={ExchangeIcon}
          heading={"Exchanges"}
          bgColor={"#EAEFFF"}
        />
        <CategoryCard Icon={GameIcon} heading={"Games"} bgColor={"#F5F5F5"} />
      </div>
      <div className="flex my-4">
        <CategoryCard
          Icon={MarketplaceIcon}
          heading={"Marketplaces"}
          bgColor={"#E2F9F3"}
        />
        <CategoryCard Icon={DefiIcon} heading={"Defi"} bgColor={"#FFF3EC"} />
      </div>
      <div className="flex my-4">
        <CategoryCard
          Icon={CollectiblesIcon}
          heading={"Collectibles"}
          bgColor={"#EBF5FF"}
        />
        <CategoryCard
          Icon={UtilitiesIcon}
          heading={"Utilities"}
          bgColor={"#F0EBFF"}
        />
      </div>
    </>
  );
};

export default PopularCategories;
