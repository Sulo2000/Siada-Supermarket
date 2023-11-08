import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import { conversition } from "../lists/conversition";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Headertop() {
  const $ = useContext(Context);
  return (
    <div
      className="top__header"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <p>
        <TbTruckDelivery /> Delivery from this address
      </p>
      <ul className="navigation">
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Brandmarket">Brandmarket</Link>
        </li>
        <li>
          <Link to="/Thematic">Thematic</Link>
        </li>
        <li>
          <Link to="/Delivery">Delivery</Link>
        </li>
      </ul>
      <select
        id="change__select"
        defaultValue={conversition[4].code}
        onChange={(e) => {
          conversition.forEach((item) => {
            if (item.code === e.target.value) {
              $.setExchange(item);
              console.log($.exchange);
            }
          });
        }}
      >
        {conversition.map((item, i) => (
          <option key={i} value={item.code}>
            {item.code} - {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
