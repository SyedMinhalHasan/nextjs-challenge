import NotificationItem from "./notification_item";
import DocuSign from "../../assets/Docu_Sign.svg";
const Notifications = () => {
  const data = [
    {
      image: "assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "CryptoKing.near"
      },
      notificationMessage: "requested to sign the contract",
      attachment: null,
      extraImage: null,
      time: "3 days ago"
    },
    {
      image: "assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "CryptoKing.near"
      },
      notificationMessage: "made an offer for collectible",
      attachment: "#72873",
      time: "5 days ago"
    },
    {
      image: "assets/User_Img_1.png",
      userDetail: {
        id: "123",
        username: "maxwell.near"
      },
      notificationMessage: "invited you to",
      attachment: "docu signs",
      extraImage: DocuSign,
      time: "7 days ago"
    }
  ];
  return (
    <div>
      {data.map(
        ({
          image,
          userDetail,
          notificationMessage,
          attachment,
          extraImage,
          time
        }) => (
          <NotificationItem
            image={image}
            userDetail={userDetail}
            notificationMessage={notificationMessage}
            attachment={attachment}
            extraImage={extraImage}
            time={time}
          />
        )
      )}
    </div>
  );
};
export default Notifications;
