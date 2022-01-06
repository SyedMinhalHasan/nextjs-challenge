import PendingOfferItem from "./pending-offer-item";
const PendingOffers = () => {
  const data = [
    {
      image: "/assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "CryptoKing.near"
      },
      notificationMessage: "made an offer of 0.345 NEAR",
      time: "5 days ago"
    },
    {
      image: "/assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "CryptoKing.near"
      },
      notificationMessage: "made an offer of 0.345 NEAR",
      time: "5 days ago"
    }
  ];
  return (
    <div>
      <div className="h-12 text-md text-gray-500 font-semibold">
        2 active offers
      </div>
      {data.map(({ image, userDetail, notificationMessage, time }) => (
        <PendingOfferItem
          image={image}
          userDetail={userDetail}
          notificationMessage={notificationMessage}
          time={time}
        />
      ))}
    </div>
  );
};
export default PendingOffers;
