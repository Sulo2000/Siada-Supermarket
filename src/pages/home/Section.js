import React from "react";

export default function Section() {
  return (
    <div className="sales">
      <p>Promotions</p>
      <div className="sale__container">
        <div
          className="sale"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="sale__text">
            <h1>Promotion</h1>
            <p>All promotions here</p>
          </div>
          <div className="slae__img">
            <img
              src="https://tsiran.am/img/temp/stock/stock-pic-promotion.png?v=1.1.3"
              alt=""
            />
          </div>
        </div>
        <div
          className="sale1"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="sale__text1">
            <h1>Private label</h1>
            <p>Choose The best</p>
          </div>
          <div className="slae__img">
            <img
              src="https://tsiran.am/img/temp/stock/stock-pic-our-products.png?v=1.1.3"
              alt=""
            />
          </div>
        </div>
        <div
          className="sale2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="sale__text2">
            <h1>Super Price</h1>
            <p>Always 30%</p>
          </div>
          <div className="sale__img2">
            <img
              src="https://tsiran.am/img/temp/stock/stock-pic-super-price-pic.png?v=1.1.3"
              alt=""
            />
          </div>
        </div>
        <div
          className="sale3"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="sale__text3">
            <h1>Always Low Price</h1>
            <p>Best prices</p>
          </div>
          <div className="slae__img">
            <img
              src="	https://tsiran.am/img/temp/stock/stock-pic-low-price.png?v=1.1.3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
