import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";

export default function Alert({ data }) {
  const { addToast } = useToasts();

  useEffect(() => {
    addToast(`${data}`, {
      appearance: "info",

    });
  }, [data]);
  return <></>;
}
