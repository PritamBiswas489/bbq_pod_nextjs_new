import { useEffect } from "react";
import { appWithTranslation } from 'next-i18next'
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/front/fonts/stylesheet.css";
import "@/assets/front/styles/style.scss";
import nextI18NextConfig from '../../next-i18next.config.js';
import { PagesTopLoader } from 'nextjs-toploader/pages';

// import "@/styles/globals.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
   return (
    <>
      <PagesTopLoader />
      <Component {...pageProps} />;
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
