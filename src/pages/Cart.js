import { useContext,useEffect } from "react";
import { Context } from "../context/Context";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
export default function Cart() {
  const $ = useContext(Context);

  const openstylesBasket = {
    opacity: $.openBasket ? 1 : 0,
    transform: $.openBasket ? "translateY(0)" : "translateY(-150px)",
    visibility: $.openBasket ? "visible" : "hidden",
  };

  useEffect(() => {
    $.setTotal($.cart.reduce((end, product) => end + product.price * product.quanity, 0));
  }, [$.cart]);


  return (
    <div className="basket__open">
      <div className="basket__container" style={openstylesBasket}>
        <div className="basket__top">
          <h4>Cart</h4>
          <AiOutlineClose onClick={() => $.setOpenBasket(false)} />
        </div>
        {$.cart.length === 0 ? (
          <>
            <div className="basket__elem">
              <div className="basket__about">
                <h5>Cart is empty</h5>
                <p>
                  Use the menu, select a category, discounts or news section or
                  you can use the search.
                </p>
                <img src="img/basket/empty-basket.png" alt="" />
              </div>
              <Link to={"/Products"} onClick={() => $.setOpenBasket(false)}>
                <button>Shopping</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="grand__total">
              <span>
                <h2>Total:</h2>
                <h2>{$.total}Amd</h2>
              </span>
              <span>
                <h2>Delivery:</h2>
                <h2>600Amd</h2>
              </span>
              <span>
                <h2>Grand Total:</h2>
                <h2>{$.total + 600}Amd</h2>
              </span>
              <Link to="/payment-methods">
                <button onClick={() => {
                    $.setOpenBasket(false);
                }}>Checkout</button>
              </Link>
            </div>
            {$.cart.map((product) => {
              return (
                <div className="cart__item" key={product.id}>
                  <img src={product.product} alt="" />
                  <h3>
                    {product.price}Amd x {product.quanity}
                  </h3>
                  <h2>{product.name}</h2>
                  <h3>{product.price * product.quanity}Amd</h3>
                  <button
                    onClick={() => {
                      $.cartRemoving(product.id);
                      if($.cart.length <= 1) {
                        $.setOpenBasket(false);
                        product.quanity = 1
                      } 
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
