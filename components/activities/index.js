import ActivityItem from "./activity_item";
const Activities = () => {
  const data = [
    {
      image: "assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "johndoe.near"
      },
      notificationMessage: "signed the contract successfully",
      time: "2 days ago"
    },
    {
      image: "assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "CryptoKing.near"
      },
      notificationMessage: "requested to sign the contract",
      time: "3 days ago"
    }
  ];
  return (
    <div>
      <div className="h-12 text-center">
        <span className="bg-slate-100 rounded-lg p-2 text-md text-gray-800 text-sm">
          12 activity found
        </span>
      </div>
      {data.map(({ image, userDetail, notificationMessage, time }) => (
        <ActivityItem
          image={image}
          userDetail={userDetail}
          notificationMessage={notificationMessage}
          time={time}
        />
      ))}
    </div>
  );
};
export default Activities;
