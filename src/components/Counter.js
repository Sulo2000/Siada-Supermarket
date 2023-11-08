import { useContext } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Context } from "../context/Context";
export default function Counter({ product }) {
  const $ = useContext(Context);
  return (
    <div className="counter__container" data-aos="fade-in-down">
      <button onClick={() => {
          if(product.quanity > 1 && product.point === 'p') {
            $.setCount(product.quanity -= 1);
          } 
          else if(product.quanity > .25 && product.point !== 'p') {
            $.setCount(product.quanity -= .25);
          } 
      }}><IoIosArrowDown /></button>
      <span>{product.point !== 'p' ? product.quanity + ' կգ': product.quanity }</span>
      <button onClick={() => {
          if (product.point === 'p') {
            $.setCount(product.quanity += 1);
          }
          else{
            $.setCount(product.quanity += .25);
          }
      }}><IoIosArrowUp /></button>
    </div>
  );
}