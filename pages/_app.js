import "../styles/globals.css";
import "../styles/owl.carousel.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../public/include/Footer";
import Header from "../public/include/Header";
import Contact from "../public/Content/Contact";
import BackToTop_App from "../public/components/Function/BackToTop_App";
import Popup_policy from "../public/Content/Popup_policy";
import { ThemeProvider } from "next-themes";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { Provider } from "next-auth/client";
//loading...
import * as loadingData from "../public/loading/loading.json";
import * as successData from "../public/loading/success.json";

import Lottie from "react-lottie";


const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
  }, [Component]);

  return (
    <Provider session={pageProps.session} options={{ clientMaxAge: 60 }}>
      <ThemeProvider>
        <ToastProvider autoDismiss={true} autoDismissTimeout="8000">
          <Head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link
              rel="apple-touch-icon"
              href="../B_images/logoboychawin.com.png"
            />
            <link
              rel="icon"
              href="../B_images/logoboychawin.com.png"
              type="image/png"
            />
            <meta name="author" content="boychawin.com" />
            <meta property="fb:admins" content="BoyChawin" />
            <meta property="fb:app_id" content="3710740645722239" />
            <meta
              property="article:author"
              content="https://www.facebook.com/boychawincom"
            />
            <meta
              name="facebook-domain-verification"
              content="04vqwnnmyu1lzmxnmz72jnw1ovz8lh"
            />
            <meta
              property="article:publisher"
              content="https://www.facebook.com/boychawincom"
            />
            <meta name="propeller" content="36ac1415f9eb6cc8b69b9ee62158eab1" />
            <link href="../B_pluginboy_bc/bootstrap.css" rel="stylesheet" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            />
            {/* slick-carousel */}

            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"
              integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg=="
              crossOrigin="anonymous"
              referrerpolicy="no-referrer"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"
              integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw=="
              crossOrigin="anonymous"
              referrerpolicy="no-referrer"
            />

            <link href="../js/colorbox.css" rel="stylesheet" />
            <script async src="https://apis.google.com/js/platform.js"></script>

            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>

            <div id="fb-root"></div>
            <script
              async
              defer
              crossOrigin="anonymous"
              src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v10.0&appId=3710740645722239&autoLogAppEvents=1"
              nonce="KOz3F1dw"
            ></script>

            {/* /facebook */}
            <script
              data-ad-client="ca-pub-2369444070737256"
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>

            <script src="https://www.google.com/recaptcha/api.js?render=6LfJrNYZAAAAACOIjAcHKDaEkUNCvPxNBSqmy47M"></script>


          </Head>

          {!success ? (
            <div className="loader">

              {!loading ? (
                <Lottie options={defaultOptions2} height={140} width={140} />
              ) : (
                <Lottie options={defaultOptions2} height={140} width={140} />
              )}
            </div>
          ) : (
            ""
          )}

          <Header />
          <Component {...pageProps} />
          <Footer />
          <Contact />
          <Popup_policy />
          <BackToTop_App />

          <script src="/B_pluginboy_bc/tether.min.js"></script>
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
            integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
            crossOrigin="anonymous"
          ></script>
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
