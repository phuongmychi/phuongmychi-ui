import "./Growingtext.scss";

interface GrowingtextPrReactprops {
  text: string;
}

const Growingtext: React.FunctionComponent<GrowingtextPrReactprops> = ({
  text,
}) => {
  return <h1 className="glow">{text}</h1>;
};
export default Growingtext;
