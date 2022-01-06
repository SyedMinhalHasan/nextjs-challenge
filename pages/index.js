import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-5 font-semibold">Welcome to NextJS Challenge</h1>
        <h1 className="mb-3">
          You can click on following links to see the working
        </h1>
      </div>
      <div className="p-5 flex flex-col">
        <Link href="/reg-email">
          <a className="text-blue-500 mb-2">
            Recent Experiences and Popular Categories
          </a>
        </Link>
        <Link href="/experience">
          <a className="text-blue-500 mb-2">
            Experience{" "}
            <span className="text-sm text-gray-500">
              (When opened, you can click on Share icon inside Experience Page)
            </span>
          </a>
        </Link>
        <Link href="/profile">
          <a className="text-blue-500 mb-2">
            Profile{" "}
            <span className="text-sm text-gray-500">
              {" "}
              (When opened, you can go to Actions, Click Send and then click
              Send Near)
            </span>
          </a>
        </Link>
        <Link href="/send-near">
          <a className="text-blue-500 mb-2">Send Near</a>
        </Link>
        <Link href="/notifications">
          <a className="text-blue-500 mb-2">
            Notifications{" "}
            <span className="text-sm text-gray-500">
              (When opened, you can click notification item)
            </span>
          </a>
        </Link>
        <Link href="/notifications/123">
          <a className="text-blue-500 mb-2">When you Click Notification Item</a>
        </Link>
      </div>
    </div>
  );
}
