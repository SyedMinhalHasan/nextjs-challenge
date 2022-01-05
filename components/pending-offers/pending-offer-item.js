import Link from "next/link";

const PendingOfferItem = ({ image, userDetail, notificationMessage, time }) => {
  return (
    <>
      <div className="flex items-start mb-5">
        <img className="mr-4 w-10 h-10 rounded-full" src={image} />
        <div>
          <h3>
            <Link href={`/${userDetail.id}`}>
              <a className="text-purple-500">{userDetail.username}</a>
            </Link>
            {` ${notificationMessage}`}
          </h3>
          <h3 className="text-sm mb-2 text-gray-500">{time}</h3>
          <div className="flex ">
            <button className="mr-2 flex items-center bg-gray-700 rounded-lg px-3 text-sm py-1 text-white">
              Accept
            </button>
            <button className="mr-2 flex items-center bg-gray-700 rounded-lg px-3 text-sm py-1 text-white">
              Counter offer
            </button>
            <button className="flex items-center border-2 border-black rounded-lg px-3 text-sm py-1">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingOfferItem;
