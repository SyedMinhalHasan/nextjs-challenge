import Script from "next/script";
import "../styles/globals.css";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap"
        rel="stylesheet"
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
