import Head from "next/head";
import RecentExperiences from "../components/recent-experiences";
import PopularCategories from "../components/popular-categories";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Reg Email</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        {/* <div className="flex justify-center bg-slate-300 py-10"> */}
        <div className="p-5 bg-white">
          <div className="header flex justify-between items-center">
            <div className="search-field relative w-4/5">
              <svg
                className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                width="15"
                height="15"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.481 17.5L14.7426 13.755L18.481 17.5ZM16.8143 8.74999C16.8143 10.6286 16.068 12.4303 14.7397 13.7587C13.4113 15.087 11.6096 15.8333 9.73098 15.8333C7.85236 15.8333 6.05069 15.087 4.7223 13.7587C3.39392 12.4303 2.64764 10.6286 2.64764 8.74999C2.64764 6.87137 3.39392 5.0697 4.7223 3.74132C6.05069 2.41293 7.85236 1.66666 9.73098 1.66666C11.6096 1.66666 13.4113 2.41293 14.7397 3.74132C16.068 5.0697 16.8143 6.87137 16.8143 8.74999V8.74999Z"
                  stroke="#6F6E73"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="text"
                className="rounded-lg w-full border-0 bg-slate-100 pl-10"
                placeholder="Search experiences"
              />
            </div>
            <div className="filter-icon cursor-pointer">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.981 7C17.9515 7 21.981 6.10457 21.981 5C21.981 3.89543 17.9515 3 12.981 3C8.01039 3 3.98096 3.89543 3.98096 5C3.98096 6.10457 8.01039 7 12.981 7Z"
                  stroke="#6F6E73"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.98096 5C3.98096 7.23 7.85196 11.674 9.83696 13.805C10.5651 14.5769 10.9739 15.5959 10.981 16.657V22L14.981 20V16.657C14.981 15.596 15.402 14.582 16.125 13.805C18.111 11.674 21.981 7.231 21.981 5"
                  stroke="#6F6E73"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="experience-section mt-5">
            <RecentExperiences />
          </div>
          <div className="experience-section mt-5">
            <PopularCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;