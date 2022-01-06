import Link from "next/link";
import { useRef, useState } from "react";
import ReceieveIcon from "../assets/Receieve_Icon.svg";
import ReceieveBlueIcon from "../assets/Recieve_Blue_Icon.svg";
import SendBlueIcon from "../assets/Send_Blue_Icon.svg";
import SendIcon from "../assets/Send_Icon.svg";
import ModalComponent from "./modal";
const Actions = () => {
  const [openSend, setOpenSend] = useState(false);
  const [openRecieve, setOpenRecieve] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="mt-5">
        <button
          onClick={() => {
            setOpenRecieve(false);
            setOpenSend(true);
          }}
          className="relative flex items-center justify-center bg-gray-700 rounded-lg px-3 py-2 w-full mb-4"
        >
          <h3 className="text-white text-center mr-3">Send</h3>
          <SendIcon className="absolute right-3" />
        </button>
        <button
          onClick={() => {
            setOpenSend(false);
            setOpenRecieve(true);
          }}
          className="relative flex justify-center items-center bg-gray-700 rounded-lg px-3 py-2 w-full"
        >
          <h3 className="text-white mr-3">Recieve</h3>
          <ReceieveIcon className="absolute right-3" />
        </button>
      </div>

      <ModalComponent
        open={openSend ? openSend : openRecieve}
        setOpen={openSend ? setOpenSend : setOpenRecieve}
        cancelButtonRef={cancelButtonRef}
      >
        <div className="w-4/5 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
          <div className="w-full bg-gray-50 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full text-center text-blue-500 border-b-2 p-5 flex justify-center"
              onClick={() =>
                openSend ? setOpenSend(false) : setOpenRecieve(false)
              }
            >
              {openSend ? <SendBlueIcon /> : <ReceieveBlueIcon />}
              <Link href="/send-near">
                <a>
                  <h2 className="ml-3">
                    {openSend ? "Send Near" : "Recieve Near"}
                  </h2>
                </a>
              </Link>
            </button>
            <button
              type="button"
              className="w-full text-center text-blue-500 p-5 flex justify-center"
              onClick={() =>
                openSend ? setOpenSend(false) : setOpenRecieve(false)
              }
              ref={cancelButtonRef}
            >
              {openSend ? <SendBlueIcon /> : <ReceieveBlueIcon />}
              <h2 className="ml-3">{openSend ? "Send NFT" : "Recieve NFT"}</h2>
            </button>
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default Actions;
