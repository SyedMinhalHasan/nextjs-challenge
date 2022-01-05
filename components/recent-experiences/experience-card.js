const ExperienceCard = ({ Icon, title, subHeading, usersCount }) => {
  return (
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center">
        <Icon />
        <div className="ml-5">
          <h2 className="text-lg font-bold text-gray-700">{title}</h2>
          <h3 className="text-gray-700">{subHeading}</h3>
          <h3 className="text-blue-500">+{usersCount} users</h3>
        </div>
      </div>
      <div className="">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33333 1.66667L6.66666 7L1.33333 12.3333"
            stroke="#6F6E73"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ExperienceCard;
