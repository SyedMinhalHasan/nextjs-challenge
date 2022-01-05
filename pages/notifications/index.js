import Notifications from "../../components/notifications";
const NotificationsPage = () => {
  return (
    <>
      <div className="text-center py-3 border-b-2 mb-3">
        <h1 className="text-lg font-semibold text-gray-800">Notifications</h1>
      </div>
      <div className="p-5">
        <Notifications />
      </div>
    </>
  );
};

export default NotificationsPage;
