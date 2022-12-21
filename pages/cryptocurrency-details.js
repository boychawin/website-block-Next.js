import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Sory() {
  const router = useRouter();
  const { id, bc } = router.query;
  const [state, setData] = useState({ data: [] });

  if (bc == null) {
    var name_cryto2 = id;
  } else {
    var name_cryto2 = bc;
  }


  useEffect(() => {

    if (name_cryto2 > 0) {

      axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/blog_detail.php?id=${name_cryto2}`)
        .then((res) => {
          setData({
            data: res.data,
          });
        });
    } else {
      axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/blog_dcryto_detailetail.php?id=${name_cryto2}`)
        .then((res) => {
          setData({
            data: res.data,
          });
        });
    }

  }, [name_cryto2])

  // return state.data?.map((res) => {
  //   return location.replace("/cryptocurrency-detail/" + `${res.id}?b=${res.ids}`)

  // });
}
