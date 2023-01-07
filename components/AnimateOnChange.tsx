import { isClient } from "../utils";

type Props = {};

let OnChange: any;
// let easings: any = {};

if (isClient) {
  OnChange = require("react-animation").AnimateOnChange;
  // easings = require("react-animation").easings;
}

const AnimateOnChange = ({ children, className, style, ...props }: any) => {
  if (!isClient) return <span {...{ className, style }}>{children}</span>;

  return <OnChange {...{ className, style, ...props }}>{children}</OnChange>;
};

export default AnimateOnChange;
