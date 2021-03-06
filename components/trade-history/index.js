import TradeHistoryItem from "./trade-history-item";
const TradeHistory = () => {
  const data = [
    {
      image: "/assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "johndoe.near"
      },
      notificationMessage: "bought #72873 from",
      boughtFrom: "ninjaking.near",
      time: "2 days ago"
    },
    {
      image: "/assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "ninjaking.near"
      },
      notificationMessage: "minted #72873",
      time: "3 days ago"
    }
  ];
  return (
    <div className="mt-3">
      {data.map(
        ({ image, userDetail, notificationMessage, boughtFrom, time }) => (
          <TradeHistoryItem
            image={image}
            userDetail={userDetail}
            notificationMessage={notificationMessage}
            boughtFrom={boughtFrom}
            time={time}
          />
        )
      )}
    </div>
  );
};
export default TradeHistory;
