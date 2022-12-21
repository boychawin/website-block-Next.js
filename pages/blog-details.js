import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Sory() {
  const router = useRouter();
  const { id, bc } = router.query;

  if (bc == null) {
    var name_cryto2 = `/blog-detail/${id}`;
  } else {
    var name_cryto2 = `/blog-detail/${bc}`;
  }

  useEffect(() => {
    location.replace(name_cryto2);
  }, [name_cryto2]);

  return (
    <>
      {" "}
      <div className="loader">
        <img
          src="hhttps://boychawin.com/irms/images/VAyR.gif"
          alt="Loading..."
        />
      </div>
    </>
  );
}
