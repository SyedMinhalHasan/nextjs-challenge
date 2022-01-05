import { useTabs } from "react-headless-tabs";
import DocuSign from "../assets/Docu_Sign.svg";
import SendIcon from "../assets/Send_Icon.svg";
import ShareIcon from "../assets/Share_Icon.svg";
import UsersIcon from "../assets/Users_Icon.svg";
import Activities from "../components/activities";
import Details from "../components/details";

const Experience = () => {
  const items = ["Details", "Activities"];
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
      <div>
        <div
          className="h-14 relative px-5"
          style={{ width: "100%", backgroundColor: "#E5D0FF" }}
        >
          <DocuSign className="absolute" style={{ top: 30 }} />
        </div>
        <div className="flex justify-end mt-3 pr-5 items-center">
          <ShareIcon />{" "}
          <h2 className="ml-2 text-blue-500 font-semibold text-lg">Share</h2>
        </div>
        <div className="px-5 mt-4">
          <h2 className="text-lg font-bold text-gray-700">Docu Sign</h2>
          <h3 className="text-gray-700">sign smart contracts seamlessly</h3>
          <a href="#" className="text-blue-500">
            Utilities
          </a>
        </div>
        <div className="px-5 mt-4 flex">
          <button className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            <h3 className="text-white mr-3">Open</h3>
            <SendIcon />
          </button>
          <div className="ml-4 flex items-center">
            <UsersIcon /> <h3 className="text-gray-600 ml-2">24,000+ users</h3>
          </div>
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
          <div
            style={{
              display: "flex"
            }}
          >
            {items.map((item) => {
              return (
                <span
                  className="text-md font-semibold"
                  key={item}
                  style={{
                    textAlign: "center",
                    flexGrow: 1,
                    display: "block",
                    padding: "1rem",
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
          {selectedTab === "Details" ? <Details /> : <Activities />}
        </div>
      </div>
    </>
  );
};

export default Experience;
