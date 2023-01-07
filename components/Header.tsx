import Image from "next/image";
import Logo from "../assets/images/logo.png";
import cardList from "../constants/card";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  return (
    <header className="h-[112px] flex items-center px-8 z-10 relative justify-between">
      <div className="flex space-x-5 items-center">
        <Image src={Logo} alt="Dahanu road" />
        <div className="font-pacifico text-[28px] leading-10 text-white/95">
          Dahanu
        </div>
      </div>
      <div className="space-x-12">
        {cardList.map((e) => (
          <Link
            href={e.id ? `/#${e.id}` : "/"}
            shallow
            replace
            key={e.id}
            className="text-base font-lexend leading-5 text-white/90"
          >
            {e.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
