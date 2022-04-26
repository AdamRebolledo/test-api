import { MouseEventHandler } from "react";

const ButtonPrimary = (props: { className?: string; text: string; onClick?: MouseEventHandler<any> | undefined }) => {
 return (
  <button onClick={props.onClick} className={"primary-button " + props.className}>
   {props.text}
  </button>
 );
};

export default ButtonPrimary;
