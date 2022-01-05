import { useTabs } from "react-headless-tabs";

const TabsComponent = ({ componentsData, data }) => {
  const items = Object.keys(data);
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
      <div className="p-5">{data[selectedTab]}</div>
    </div>
  );
};

export default TabsComponent;
