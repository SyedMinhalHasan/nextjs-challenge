import Link from "next/link";

const ActivityItem = ({ image, userDetail, notificationMessage, time }) => {
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
          <h3 className="text-sm text-gray-500">{time}</h3>
        </div>
      </div>
    </>
  );
};

export default ActivityItem;
