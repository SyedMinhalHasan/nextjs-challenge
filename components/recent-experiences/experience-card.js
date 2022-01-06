import RightArrow from "../../assets/Right_Arrow.svg";
const ExperienceCard = ({ Icon, title, subHeading, usersCount }) => {
  return (
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center">
        <Icon />
        <div className="ml-5">
          <h2 className="text-gray-dark font-size-third font-weight-second">
            {title}
          </h2>
          <h3 className="text-gray-light font-size-sixth font-weight-third">
            {subHeading}
          </h3>
          <h3 className="text-blue-dark font-size-sixth font-weight-third">
            +{usersCount} users
          </h3>
        </div>
      </div>
      <RightArrow />
    </div>
  );
};

export default ExperienceCard;
