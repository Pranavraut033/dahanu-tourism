import Cover1 from "../assets/images/back_3.jpg";
import Cover2 from "../assets/images/rail_2.jpg";
import Cover3 from "../assets/images/festival_3.jpg";
import Cover4 from "../assets/images/crazy_2.jpeg";
import Cover5 from "../assets/images/le_4.jpeg";
import Card1 from "../assets/images/home.jpg";
import Card2 from "../assets/images/rail.jpg";
import Card3 from "../assets/images/cards/3.webp";
import Card4 from "../assets/images/crazy_3.jpeg";
import Card5 from "../assets/images/le_2.jpeg";
import { StaticImageData } from "next/image";

export type CardList = {
  id: string;
  cover: StaticImageData;
  card: StaticImageData;
  name: string;
  title: string;
  cardStyle?: {
    backgroundPosition?: string;
    backgroundSize?: string;
  };
  cardTitle: string;
  description: string;
};

const cardList: CardList[] = [
  {
    id: "",
    cover: Cover1,
    card: Card1,
    name: "Home",
    title: "Welcome,",
    cardStyle: {
      backgroundPosition: "34% 50%",
      backgroundSize: "cover",
    },
    cardTitle: "Houses",
    description:
      "Dahanu (Pronunciation: [ɖəɦaːɳuː]) is a coastal town and a municipal council in Palghar district of Maharashtra state in Konkan division. It is located 110 km from Mumbai city and hosts Adani Power’s thermal power station. It is the site of the currently stalled Wadhawan port project at Rewas.",
  },
  {
    id: "rail",
    cover: Cover2,
    card: Card2,
    name: "Railway",
    title: "Railway",
    cardStyle: {
      backgroundSize: "cover",
    },
    cardTitle: "Dahanu Railway Station",
    description:
      "Dahanu has its own railway station, Dahanu Road. It lies on the Western line of the Mumbai Suburban Railway network. It is the northern limit (terminal station) of the Suburban local train network, although the track continues north to Gholvad and beyond.Regular local trains & Memu are available for Churchgate, Dadar, Borivali & Virar, & also Panvel. There are also direct express trains from Dahanu which connects it with cities like Mumbai, Surat, Pune, Ahmedabad, Goa, Trivandrum, Bhuj, Jaipur, Jodhpur, Jamnagar, Delhi, Amritsar, Firozpur, Porbunder.",
  },
  {
    id: "festival",
    cover: Cover3,
    card: Card3,
    name: "Dahanu Festival",
    title: "Dahanu Festival",
    cardStyle: {
      backgroundPosition: "68% 50%",
    },
    cardTitle: "Dahanu Festival",
    description:
      "With exuberant sustainability in mind, we bring you the rich heritage and culture of a town not very far from Mumbai, a place known for a famous fruit Sapodilla or more commonly known as Chikoo.\nWe aim at elevating and supporting the local community and economy, with the advent of this gathering we call Dahanu Festival. Fortunately, Dahanu is blessed with ambient flora and fauna, along with fertile soils that give rise to the forests that surround the place and also act as a shelter for the local tribes living there.\nThough small scale art and culture is always showcased, our goal is also to elevate these forms of entertainment and give them a proper platform to flourish and reach the target audience i.e. YOU.",
  },
  {
    id: "restaurant",
    cover: Cover4,
    card: Card4,
    name: "Restaurant And Bar",
    title: "Crazy Crab",
    cardStyle: {
      backgroundPosition: "30% 60%",
      backgroundSize: "cover",
    },
    cardTitle: "Crazy Crab Restaurant And Bar",
    description:
      "Down-to-earth alfresco venue on the grounds of Sea Crest Beach Resort serving seafood & local meals.\nService options: Dine-in · Takeaway · No-contact delivery\nAddress: Beach Thane, Sea Crest Beach Resort, Coastal Highway, Sea Face, Dahanu, Maharashtra 401601",
  },
  {
    id: "cafe",
    cover: Cover5,
    card: Card5,
    name: "Cafe & Bakery",
    title: "Le Marcel",
    cardStyle: {
      backgroundPosition: "center",
    },
    cardTitle: "Le Marcel Cafe & Bakery",
    description:
      "Service options: Dine-in · Takeaway · Delivery\nAddress: Shop No 8, Khodadad Mansion, Hormusji Kaikhushru Irani Rd, Malyan, Dahanu, Maharashtra 401602",
  },
];

export default cardList;
