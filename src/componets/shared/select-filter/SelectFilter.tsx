import { useState } from "react";
type TProps = {
 options: { text: string; value: string }[];
 filterType: string;
 submit: (value: string) => void;
};
const SelectFilter = (props: TProps) => {
 const [isOpen, setIsOpen] = useState(false);
 const [textValue, setTextValue] = useState(props.filterType);

 return (
  <>
   <div className='select-filter' onClick={() => setIsOpen(!isOpen)}>
    <span>{textValue}</span>
    <svg className={!isOpen ? "" : "rotate"} height={24} width={24} focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
     <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
    </svg>
   </div>
   <div className='absolute'>
    {isOpen && (
     <div className='popover'>
      <ul>
       <li
        onClick={() => {
         setTextValue(props.filterType);
         setIsOpen(false);
         props.submit("");
        }}
       >
        {props.filterType}
       </li>
       {props.options.map((i, index) => {
        return (
         <li
          key={index}
          onClick={() => {
           setTextValue(i.text);
           setIsOpen(false);
           props.submit(i.value);
          }}
         >
          {i.text}
         </li>
        );
       })}
      </ul>
     </div>
    )}
   </div>
  </>
 );
};

export default SelectFilter;
