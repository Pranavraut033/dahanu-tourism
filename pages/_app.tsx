import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { createContext, useEffect, useMemo, useRef } from "react";
import cardList from "../constants/card";
import { useRouter } from "next/router";
import { CardContext } from "../utils";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [current, currentIndex] = useMemo(() => {
    let parts = router.asPath.split("#");
    if (parts.length < 2) return [cardList[0], 0];

    const hash = parts[parts.length - 1];

    const index = cardList.findIndex((e) => e.id == hash);
    if (!~index) return [cardList[0], 0];

    return [cardList[index], index];
  }, [router]);

  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const mouseListener = (eve: WheelEvent) => {
      const index = currentIndexRef.current;

      if (eve.deltaY > 0) {
        console.log({ index });

        if (index + 1 >= cardList.length) return;

        router.replace("/#" + cardList[index + 1].id, undefined, {
          shallow: true,
        });
        return;
      }

      if (index == 0) return;

      router.replace("/#" + cardList[index - 1].id, undefined, {
        shallow: true,
      });

      return eve.preventDefault();
    };

    document.addEventListener("wheel", mouseListener, { passive: false });

    return () => {
      document.removeEventListener("wheel", mouseListener);
    };
  }, []);

  return (
    <CardContext.Provider value={{ currentIndex, current }}>
      <Component {...pageProps} />;
    </CardContext.Provider>
  );
}
