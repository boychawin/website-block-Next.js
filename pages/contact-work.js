import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Sidebar from "../public/include/Sidebar";
export default function Custom404() {


  useEffect(() => {
    location.replace("/Thailand");
  }, []);

  return (
    <>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <div className="row center">
                    <div className="col-12 center mb-30">
                      <i
                        className="fas fas fa-tools"
                        style={{ "font-size": "100px" }}
                      ></i>
                    </div>
                    <div className="loader">
                      <img
                        src="https://boychawin.com/irms/images/VAyR.gif"
                        alt="Loading..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
