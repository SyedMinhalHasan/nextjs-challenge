import Link from "next/link";
import RectangleIcon from "../../assets/Rectangle_Icon.svg";
import RightIcon from "../../assets/Right_Arrow.svg";

const CollectibleItem = ({ title, byName }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <RectangleIcon />
          <div className="ml-3">
            <h2 className="text-md font-semibold text-gray-700">{title}</h2>
            <h3 className="text-gray-700">
              by{" "}
              <Link href={`#`}>
                <a className="text-purple-500">{byName}</a>
              </Link>
            </h3>
          </div>
        </div>
        <div>
          <RightIcon />
        </div>
      </div>
    </>
  );
};

export default CollectibleItem;
