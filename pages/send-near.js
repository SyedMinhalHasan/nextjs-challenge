import SendBlueIcon from "../assets/Send_Blue_Icon.svg";
const SendNear = () => {
  return (
    <>
      <div className="flex items-center justify-center py-3 border-b-2 mb-3">
        <SendBlueIcon />
        <h1 className="ml-2 text-lg font-semibold text-blue-500">Send Near</h1>
      </div>
      <div className="p-5">
        <h2 className="font-medium mb-2">To</h2>
        <div className="relative">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            className="rounded-full pointer-events-none w-6 h-6 absolute top-3 transform left-2"
            alt="user-profile"
          />
          <select className="bg-gray-50 p-3 block w-full mt-1 pl-10 rounded-lg border-gray-300 shadow-sm">
            <option>Johndoe.near</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="p-5 flex items-center">
        <h2 className="font-medium mb-2 mr-4">Send</h2>
        <div>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg">
            NEAR Token
          </button>
          <button className="bg-white text-gray-700 border-2 rounded-lg py-2 px-4 ml-3">
            NFT
          </button>
        </div>
      </div>
      <div className="px-5 items-center">
        <h2 className="font-medium mb-2 mr-4">Amount</h2>
        <div className="flex rounded-r-lg bg-gray-50 w-full border-gray-500 shadow-sm">
          <input
            type={"text"}
            placeholder="0.0000"
            className="basis-4/5 p-3 rounded-l-lg bg-gray-50 w-full border-gray-300 shadow-sm"
          />
          <span className="basid-1/5 text-center p-3">NEAR</span>
        </div>
      </div>
    </>
  );
};

export default SendNear;
