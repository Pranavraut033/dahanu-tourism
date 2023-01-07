import { useContext } from "react";
import { CardContext } from "../utils";
import cardList from "../constants/card";
import classNames from "classnames";

type Props = {};

const StatusHUD = (props: Props) => {
  const { currentIndex } = useContext(CardContext);

  return (
    <>
      <div className="fixed left-10 w-[24px] top-[50%] translate-y-[-50%] flex flex-col z-10 h-[54vh] justify-between">
        {cardList.map((_, i) => (
          <div key={i} className="flex-1 flex relative">
            <div
              className={classNames([
                "rounded-full  flex items-center justify-center m-auto transition-all duration-500",
                "font-pacifico text-base ease-in-out",
                currentIndex == i
                  ? "bg-white h-[24px] w-[24px] after:top-[calc(50%+12px)] before:bottom-[calc(50%+12px)]"
                  : "bg-white/40 text-white h-[12px] w-[12px] after:top-[calc(50%+6px)] before:bottom-[calc(50%+6px)]",
                "after:w-[2px] after:bg-white/40 after:absolute after:bottom-0 after:transition-all after:duration-500",
                "before:w-[2px] before:bg-white/40 before:absolute before:top-0 before:transition-all before:duration-500 z-1",
              ])}
            ></div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-10 right-12 text-white z-10">
        {currentIndex + 1}/{cardList.length}
      </div>
    </>
  );
};

export default StatusHUD;
