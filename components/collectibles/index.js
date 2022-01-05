import CollectibleItem from "./collectible-item";

const Collectibles = () => {
  const data = [
    {
      title: "Digital Ninja",
      byName: "devon.near"
    },
    {
      title: "Panda",
      byName: "devon.near"
    },
    {
      title: "Digital Ninja",
      byName: "devon.near"
    }
  ];
  return (
    <>
      <div>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-gray-800">Collectibles</h1>
          <div
            style={{ width: 25, height: 25 }}
            className="ml-3 text-white bg-black text-center rounded-full"
          >
            3
          </div>
        </div>
        <div className="mt-5">
          {data.map(({ title, byName }) => (
            <CollectibleItem title={title} byName={byName} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collectibles;
