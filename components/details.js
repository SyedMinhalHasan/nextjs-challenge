import WebIcon from "../assets/Web_Icon.svg";
import UpArrowIcon from "../assets/Up_Arrow.svg";

const Details = () => (
  <>
    <div className="mb-3 flex justify-between">
      <h1 className="text-lg text-gray-800 font-semibold">Overview</h1>
      <UpArrowIcon />
    </div>
    <h2 className="text-gray-800">
      it is easy to electronically sign, manage and distribute all your
      contracts and documents safely, securely, anywhere, anytime- paperlessly.{" "}
    </h2>
    <h2 className="text-blue-500 flex mt-5">
      <WebIcon className="mr-3" />
      https://docusign.io
    </h2>
  </>
);

export default Details;
