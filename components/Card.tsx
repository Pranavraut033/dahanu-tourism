import { useMemo } from "react";
import cardList from "../constants/card";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  item: typeof cardList[0];
  current: string;
};

const Card = ({ item, current }: Props) => {
  const active = useMemo(() => current === item.id, [current, item.id]);

  return (
    <Link is="div" href={item.id ? `/#${item.id}` : "/"} shallow replace>
      <h2
        className={classNames(
          active ? "text-xl leading-[25px] opacity-80" : "text-base leading-5",
          "text-white transition-all mb-3"
        )}
      >
        {item.cardTitle}
      </h2>
      <div
        className={classNames(
          active ? "w-[320px] h-[56vh] " : "w-[260px] h-[50vh] brightness-50",
          "rounded-3xl transition-all"
        )}
        style={{
          backgroundImage: `url(${item.card.src})`,
          backgroundSize: "fixed",
          backgroundPosition: item.backgroundPosition ?? "center",
        }}
      ></div>
    </Link>
  );
};

export default Card;
