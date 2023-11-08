import { useContext } from "react";
import { Context } from "../context/Context";
import { FaHeart } from "react-icons/fa";
import { BsArrowRight } from 'react-icons/bs';
import Counter from "../components/Counter";
export default function Singleproduct() {
  const $ = useContext(Context);

  return (
    <div className="single__product__container">
      <div className="path">
          <p>Main</p>
          <BsArrowRight />
          <p>{$.paginatedResults[$.sIndex].category}</p>
          <BsArrowRight />
          <p>{$.paginatedResults[$.sIndex].name}</p>
      </div>

      <div className="single__actual__product">
        <div
          className="single__image"
          style={{
            background: `url(${
              $.paginatedResults[$.sIndex].product
            }) no-repeat center / contain`,
          }}
        ></div>
        <div className="single__actual__product__content">
          <h2>{$.paginatedResults[$.sIndex].name}</h2>
          <p>
            Add To Favorite <FaHeart />
          </p>
          <span>
            {$.newValue($.paginatedResults[$.sIndex])}
            {$.exchange.code}
          </span>
          <Counter product={$.paginatedResults[$.sIndex]} />
          <button className={!$.cart.includes($.paginatedResults[$.sIndex]) ? '' : 'product__added'}
            onClick={() => {
              if (!$.cart.includes($.paginatedResults[$.sIndex])) {
                $.cartAdding($.paginatedResults[$.sIndex]);
              }
            }}
          >
            {!$.cart.includes($.paginatedResults[$.sIndex]) ? 'Buy' : 'Added'}
          </button>
        </div>
      </div>
    </div>
  );
}
