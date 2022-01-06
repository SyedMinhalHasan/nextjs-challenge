import Link from "next/link";

import BackIcon from "../../assets/Back_Icon.svg";
import HomeIcon from "../../assets/Home_Icon.svg";
import NotificationIcon from "../../assets/Notification_Icon.svg";
import SettingsIcon from "../../assets/Settings_Icon.svg";

const Header = () => (
  <div className="bg-gray-100 flex items-center justify-between px-5 py-3">
    <Link href={`/reg-email`}>
      <a>
        <BackIcon />
      </a>
    </Link>

    <Link href={`/`}>
      <a>
        <HomeIcon />
      </a>
    </Link>

    <div className="relative">
      <img
        src="/assets/User_Img_1.png"
        className="rounded-full pointer-events-none w-6 h-6 absolute top-3 transform left-2"
        alt="user-profile"
      />
      <select className="block w-full mt-1 pl-10 rounded-lg border-gray-300 shadow-sm">
        <option>Johndoe.near</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </select>
    </div>

    <Link href={`/notifications`}>
      <a>
        <NotificationIcon />
      </a>
    </Link>

    <SettingsIcon />
  </div>
);

export default Header;
