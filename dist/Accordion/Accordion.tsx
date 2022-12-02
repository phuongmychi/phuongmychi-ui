import { FC, useState } from "react";
import "./Accordion.scss";
export type AccordionProps = {
  text: any;
  isOpen: boolean;
  textheader: string;
}

const Accordion: FC<AccordionProps> = ({ text, isOpen, textheader }) => {
  const [isOpenpanel, setIsopen] = useState(isOpen);
  const hanldeOpen = () => {
    setIsopen((isOpenpanel) => !isOpenpanel);
  };
  return (
    <>
      <button className="accordion" onClick={hanldeOpen}>
        {textheader}
      </button>
      {isOpenpanel ? (
        <div className="pannel">
          <p style={{ paddingLeft: "16px" }}>{text}</p>
        </div>
      ) : null}
    </>
  );
};
export default Accordion;
