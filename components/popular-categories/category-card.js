import RightArrow from "../../assets/Right_Arrow.svg";

const CategoryCard = ({ Icon, heading, bgColor }) => {
  return (
    <div
      className="basis-1/2 p-3 rounded-lg mx-2"
      style={{ backgroundColor: bgColor }}
    >
      <Icon />
      <div className="flex justify-between items-center mt-3">
        <h2>{heading}</h2>
        <RightArrow />
      </div>
    </div>
  );
};

export default CategoryCard;
