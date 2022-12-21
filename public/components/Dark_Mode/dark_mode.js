import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function dark_mode() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  if (theme === "light") {
    var togle_darkmode = (
      <a href="#/" title="โหมดกลางคืน" onClick={switchTheme}>
        <i className="fas fa-moon "></i>
      </a>
    );
  } else if (theme === "dark") {
    var togle_darkmode = (
      <a href="#/" title="โหมดกลางวัน" onClick={switchTheme}>
        <i className="fas fa-sun Rotate-sun"></i>
      </a>
    );
  } else {
    var togle_darkmode = (
      <a href="#/" title="โหมดกลางวัน โหมดกลางคืน" onClick={switchTheme}>
        <i className="fas fa-adjust"></i>
      </a>
    );
  }

  return <>{togle_darkmode}</>;
}
