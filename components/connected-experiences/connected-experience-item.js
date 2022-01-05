import Link from "next/link";

const ConnectedExperiencesItem = ({ Icon, title, details }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          {Icon}
          <div className="ml-3">
            <h2 className="text-md font-semibold text-gray-700">{title}</h2>
            <h3 className="text-normal text-gray-700">{details}</h3>
            <Link href={`#`}>
              <a className="text-purple-500">Disonnect</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectedExperiencesItem;
