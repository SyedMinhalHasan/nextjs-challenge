import { useTabs } from "react-headless-tabs";
import Info from "../../components/info";
import PendingOffers from "../../components/pending-offers";
import TradeHistory from "../../components/trade-history";

const NotificationItemPage = () => {
  const items = ["Info", "Pending Offers", "Trade History"];
  const [selectedTab, setSelectedTab] = useTabs(items);
  const changeTab = (e) => {
    e.preventDefault();
    const target = e.target.dataset.tab;
    if (typeof target !== "string") {
      return;
    }
    setSelectedTab(target);
  };
  const getSelectedTabIndex = () =>
    items.findIndex((item) => item === selectedTab);

  return (
    <>
      <div className="relative">
        <div
          style={{
            backgroundImage: "url(/assets/NFT_Blur_Image.png/)"
          }}
          className="h-48 p-5 flex justify-center"
        >
          <img src="/assets/NFT_Image.png" />
        </div>
      </div>
      <div className="px-5 mt-4">
        <h2 className="text-lg font-bold text-gray-700 mb-1">Docu Sign</h2>
        <a href="#" className="text-purple-500 font-medium">
          #72873
        </a>
        <div className="flex items-center mt-2">
          <img
            className="mr-3 flex w-10 h-10 border-2 p-1 border-black rounded-full"
            src={"assets/User_Img_1.png"}
          />{" "}
          <h1 className="text-md text-gray-700 font-semibold">Johndoe.near</h1>
        </div>
      </div>
      <div>
        <nav
          style={{
            position: "relative",
            borderBottom: "2px solid #e3e3e3"
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: -2,
              left: `calc((100% / ${items.length}) * ${getSelectedTabIndex()})`,
              height: "3px",
              width: `calc(100% / ${items.length})`,
              background: "#000",
              transition: "all ease 0.2s"
            }}
          />
          <div className="flex justify-between">
            {items.map((item) => {
              return (
                <span
                  className="flex justify-center py-6 items-end text-md basis-1/3 font-semibold"
                  key={item}
                  style={{
                    textAlign: "center",
                    flexGrow: 1,
                    textDecoration: "none",
                    color: selectedTab === item ? "black" : "gray",
                    background: "#fff"
                  }}
                  onClick={changeTab}
                  data-tab={item}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </nav>
        <div className="p-5">
          {selectedTab === "Info" && <Info />}
          {selectedTab === "Pending Offers" && <PendingOffers />}
          {selectedTab === "Trade History" && <TradeHistory />}
        </div>
      </div>
    </>
  );
};

export default NotificationItemPage;
