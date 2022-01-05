import Link from "next/link";

const NotificationItem = ({
  image,
  userDetail,
  notificationMessage,
  attachment,
  extraImage: AttachmentImage,
  time
}) => {
  return (
    <>
      <div className="flex items-start mb-5">
        <img className="mr-4 w-10 h-10 rounded-full" src={image} />
        <div className="flex">
          <div>
            <h3>
              <Link href={`/notifications/${userDetail.id}`}>
                <a className="text-purple-500">{userDetail.username}</a>
              </Link>
              {` ${notificationMessage} `}
              <Link href={`/notifications/${userDetail.id}`}>
                <a className="text-purple-500">{attachment}</a>
              </Link>
            </h3>
            <h3 className="text-sm text-gray-500 mt-1">{time}</h3>
          </div>
          <span>{AttachmentImage && <AttachmentImage />}</span>
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
