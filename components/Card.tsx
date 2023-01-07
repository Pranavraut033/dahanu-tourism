import { useContext, useMemo } from "react";
import type { CardList } from "../constants/card";
import classNames from "classnames";
import Link from "next/link";
import { CardContext } from "../utils";

type Props = {
  item: CardList;
  index: number;
};

const Card = ({ item, index }: Props) => {
  const { current, currentIndex } = useContext(CardContext);

  const active = useMemo(() => current.id === item.id, [current, item.id]);

  return (
    <Link
      is="div"
      href={item.id ? `/#${item.id}` : "/"}
      shallow
      replace
      className={classNames([
        "transition-all duration-500",
        currentIndex - 1 >= index ? "opacity-0" : "opacity-100",
      ])}
    >
      <h2
        className={classNames(
          active ? "text-xl leading-[25px] opacity-80" : "text-base leading-5",
          "text-white transition-all mb-3 duration-500"
        )}
      >
        {item.cardTitle}
      </h2>
      <div
        className={classNames(
          active ? "w-[320px] h-[56vh] " : "w-[260px] h-[50vh] brightness-50",
          "rounded-3xl transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${item.card.src})`,
          backgroundSize: "fixed",
          backgroundPosition: "center",
          ...item.cardStyle,
        }}
      ></div>
    </Link>
  );
};

export default Card;
