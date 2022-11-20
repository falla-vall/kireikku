import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const initial = {
    isSM: false,
    isMD: false,
    isLG: false,
    isXL: false,
    is2XL: false,
  };

  const [mediaQuery, setMediaQuery] = useState(initial);

  const handleMediaQuery = () => {
    const isSM = window.matchMedia("(min-width: 640px)").matches;
    const isMD = window.matchMedia("(min-width: 768px)").matches;
    const isLG = window.matchMedia("(min-width: 1024px)").matches;
    const isXL = window.matchMedia("(min-width: 1280px)").matches;
    const is2XL = window.matchMedia("(min-width: 1536px)").matches;

    setMediaQuery({ isSM, isMD, isLG, isXL, is2XL });
  };

  useEffect(() => {
    handleMediaQuery();
    window.addEventListener("resize", handleMediaQuery);

    return () => {
      window.removeEventListener("resize", handleMediaQuery);
    };
  }, []);

  return mediaQuery;
};

export default useMediaQuery;
