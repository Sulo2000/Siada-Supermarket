import { SiAdafruit } from "react-icons/si";
import { Link } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { LiaUserSolid } from "react-icons/lia";
import { GiShoppingCart } from "react-icons/gi";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { l, products } from "../lists/products";
export default function Header() {
  const $ = useContext(Context);
  const [openpopup, setOpenpopup] = useState(false);
  const openstyles = {
    opacity: openpopup ? 1 : 0,
    transform: openpopup
      ? "translateX(-50%) translateY(0)"
      : "translateX(-50%) translateY(30px)",
    visibility: openpopup ? "visible" : "hidden",
  };

  return (
    <>
      <header>
        <Link to="/">
          <SiAdafruit className="logo" />
          Siada Supermarket
        </Link>
        <div
          className="products__filter"
          onClick={() => setOpenpopup(!openpopup)}
        >
          <HiOutlineBars3CenterLeft /> Products
        </div>
        <label>
          <BiSearch />
          <input type="search" placeholder="Search here..." />
        </label>
        <span>+374 88 55 99 55</span>
        <div className="header__icons">
          <Link to="/Login">
            <LiaUserSolid />
          </Link>
          <Link onClick={() => $.setOpenBasket(true)}>
            <GiShoppingCart />
            <span>{$.cart.length}</span>
          </Link>
        </div>
      </header>
      <div className="header__popup" style={openstyles}>
        <div className="products__container">
          {l.map((item,i) => {
            return (
                <div key={i} className="products__item" data-aos="zoom-in-down">
                  <img src={item.picture} alt="" />
                  <h2>{item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
