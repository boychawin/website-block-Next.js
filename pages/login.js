import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";
import { useToasts } from "react-toast-notifications";
import {
  providers,
  signIn,
  getSession,
  csrfToken,
  useSession,
} from "next-auth/client";

export default function login({ providers, csrfToken }) {
  const [session, loading] = useSession();
  const router = useRouter();
  const { error, callbackUrl } = router.query;
  const { addToast } = useToasts();


  useEffect(() => {
    if (error == "Verification") {
      addToast("ลิงค์หมดอายุ !", { appearance: "error" });
    } else if (callbackUrl) {
      addToast("โปรดลองใหม่อีกครั้ง !", { appearance: "error" });
    } else if (error == "OAuthSignin") {
      addToast("Twitter ยังไม่เปิดให้บริการ", { appearance: "error" });
    } else if (error == "OAuthCallback") {
      addToast("ล็อกอินด้วยตัวอื่นก่อนนะครับ", { appearance: "error" });
    }
  }, [error]);


  if (session) {
    location.replace("/dashboard");
  }

  // if (typeof window !== "undefined" && loading) return null;
  return (
    <>
      {/* {JSON.stringify(providers)} */}
      <Head>
        <title>เข้าสู่ระบบบัญชี | Boychawin.com</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boychawin.com/login" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="เข้าสู่ระบบบัญชี สมัครสมาชิก| Boychawin.com"
        />
        <meta
          property="og:description"
          content="เข้าสู่ระบบบัญชี สมัครสมาชิก Boychawin.com ของคุณ"
        />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
        <meta
          name="description"
          content="เข้าสู่ระบบบัญชี สมัครสมาชิก Boychawin ของคุณ"
        />
        <meta name="keywords" content="เข้าสู่ระบบบัญชี, Login, สมัครสมาชิก" />
        <meta name="author" content="Boychawin.com" />
      </Head>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <div className="row">
                    <h4 className="p-title" title="เข้าสู่ระบบ">
                      <b>
                        {!session && <>เข้าสู่ระบบ</>}
                        {session && <>เข้าสู่ระบบแล้ว</>}
                      </b>
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-12 ">
                      <div className="row">
                        <div
                          className="row col-sm-12 icon_three"
                          title="เข้าสู่ระบบ"
                        >
                          {!session && (
                            <>
                              <div className="loginForm">
                                <div className="centers">
                                  <h2 className="mt-10 mb-30 p-title2">
                                    เข้าสู่ระบบ
                                  </h2>
                            
                                    <>
                                      {Object.values(providers).map(
                                        (provider) => {
                                          if (provider.name == "Facebook") {
                                            var icon = "fab fa-facebook";
                                            var iconColor = { color: "#fff" };
                                            var backgroundc = {
                                              background: "#3c5a99",
                                              color: "#fff",
                                            };
                                          } else if (
                                            provider.name == "GitHub"
                                          ) {
                                            // var backgroundc ='background:#444444,color:#fff';
                                            var backgroundc = {
                                              background: "#444444",
                                              color: "#fff",
                                            };

                                            var icon = "fab fa-github";
                                            var iconColor = { color: "#fff" };
                                          } else if (
                                            provider.name == "Twitter"
                                          ) {
                                            var backgroundc = {
                                              background: "#00ABFB",
                                              color: "#fff",
                                            };

                                            var icon = "fab fa-twitter";
                                            var iconColor = { color: "#fff" };
                                          } else if (
                                            provider.name == "Google"
                                          ) {
                                            var backgroundc = {
                                              background: "#dd4b39",
                                              color: "#fff",
                                            };

                                            var icon = "fab fa-google";
                                            var iconColor = { color: "#fff" };
                                          } else {
                                            var backgroundc = {
                                              background: "#fff",
                                              color: "#000",
                                            };

                                            var icon = "fab fa-twitter";
                                            var iconColor = { color: "#fff" };
                                          }

                                          if (provider.name === "Email") {
                                            return;
                                          }
                                        
                                          // if (provider.name === "GitHub") {
                                          //   return;
                                          // }
                                          return (
                                            <div
                                              key={provider.name}
                                              className="center"
                                            >
                                              <div className="col-sm-12 col-md-8">
                                                <span
                                                  className="loginIc"
                                                  title="login"
                                                >
                                                  <i
                                                    style={iconColor}
                                                    className={icon}
                                                  />
                                                </span>

                                                <button
                                                  disabled={
                                                    session ? "disabled" : ""
                                                  }
                                                  className="btn bg-login btn-block"
                                                  style={backgroundc}
                                                  variant="outline"
                                                  onClick={() =>
                                                    signIn(provider.id)
                                                  }
                                                >
                                                  <b> {provider.name}</b>
                                                </button>
                                              </div>
                                            </div>
                                          );
                                        }
                                      )}
                                    </>
                                 
                                </div>
                              </div>
                            </>
                          )}
                          {session && (
                            <>
                              {" "}
                              <div className="col-12">
                                <i
                                  style={{ "font-size": "50px" }}
                                  className="center fas fa-spinner Rotate-sunf"
                                ></i>
                              </div>{" "}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Ad_1 />
              <Ad_all_index />

              <div className="col-sm-12 mtb-20 ">
                <Ad_1 />
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}

login.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  const providers2 = await providers(context);
  const csrfToken2 = await csrfToken(context);

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/profile",
    });
    res.end();
    return;
  }

  if (!providers2 && !csrfToken2) {
    return {
      providers: {
        email: {
          id: "email",
          name: "Email",
          type: "email",
          signinUrl: "/api/auth/signin/email",
          callbackUrl: "/profile",
        },
        github: {
          id: "github",
          name: "GitHub",
          type: "oauth",
          signinUrl: "/api/auth/signin/github",
          callbackUrl: "/profile",
        },
        twitter: {
          id: "twitter",
          name: "Twitter",
          type: "oauth",
          signinUrl: "/api/auth/signin/twitter",
          callbackUrl: "/profile",
        },
        facebook: {
          id: "facebook",
          name: "Facebook",
          type: "oauth",
          signinUrl: "/api/auth/signin/facebook",
          callbackUrl: "/profile",
        },
        google: {
          id: "google",
          name: "Google",
          type: "oauth",
          signinUrl: "/api/auth/signin/google",
          callbackUrl: "/profile",
        },
      },

      // csrfToken: csrfToken,
      csrfToken:
        "0815f8667019c30a02a1b31b0e9c26aff912d002bc0be8b7ff2379943a2acc23",
      session: undefined,
    };
  } else {
    return {
      session: undefined,
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    };
  }

  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
