import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-blue-500">Welcome to NextJS Challenge</h1>
      <Link href="/reg-email">
        <a>See Working</a>
      </Link>
    </div>
  );
}
