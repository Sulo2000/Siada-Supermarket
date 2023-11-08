import { useContext, useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { allproducts } from "../../lists/allproducts";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import InnerImageZoom from "zoom-loading-detector";
import "zoom-loading-detector/lib/InnerImageZoom/styles.css";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";

export default function Allproducts() {
  const $ = useContext(Context);
  const categoryName = [
    "Drinks",
    "Dairy",
    "Seafood",
    "Fruits",
    "Cakes",
    "Sweets",
    "Juice",
    "Bakery",
    "Meat",
    "Groceries",
    "Spices",
  ];

  

  useEffect(() => {
    $.paginatedResults.forEach((product) => {
      $.newValue(product);
    });
  }, [$.exchange]);

  return (
    <>
      <div
        className="categories__container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Link
          to="/Products"
          className="spans"
          onClick={(e) => {
            $.setFiltered(allproducts);
            $.setCurrentPage(1);
            let spans = document.querySelectorAll(".spans");
            spans.forEach(
              (item) => (item.style.background = "var(--primarywhite)")
            );
            e.target.style.background = "var(--darkcyan)";
          }}
        >
          All Products
        </Link>
        {categoryName.map((category, i) => {
          return (
            <Link
              to="/Products"
              key={i}
              className="spans"
              onClick={(e) => {
                let filterProd = allproducts.filter(
                  (item) => item.category === category
                );
                $.setFiltered(filterProd);
                $.setCurrentPage(1);
                let spans = document.querySelectorAll(".spans");
                spans.forEach(
                  (item) => (item.style.background = "var(--primarywhite)")
                );
                e.target.style.background = "var(--darkcyan)";
                localStorage.setItem("namePath", $.uri(category));
              }}
            >
              {category}
            </Link>
          );
        })}
      </div>
      <div
        className="all__products__container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {$.paginatedResults.map((product, i) => {
          return (
            <div
              className="product__item"
              key={product.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <InnerImageZoom
                src={product.product}
                zoomSrc={product.product}
                zoomScale={1}
              />
              <Link
                to={`/${$.uri(product.name)}`}
                onClick={() => {
                  $.setSIndex(i);
                }}
              >
                <h2>{product.name}</h2>
              </Link>
              <span>
                {$.newValue(product)} {$.exchange.code}
              </span>
              <Counter product={product} />
              <button
                className={!$.cart.includes(product) ? "" : "product__added"}
                onClick={() => {
                  if (!$.cart.includes(product)) {
                    $.cartAdding(product);
                  }
                }}
              >
                {!$.cart.includes(product) ? (
                  "Buy"
                ) : (
                  <>
                    Added <AiOutlineCheck />
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
      <div
        className="pagination"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <button
          disabled={$.currentPage === 1}
          onClick={() => {
            $.setCurrentPage($.currentPage - 1);
          }}
          style={{ opacity: $.currentPage === 1 ? 0.4 : 1 }}
        >
          <HiOutlineArrowNarrowLeft />
        </button>
        <span>Page {$.currentPage}</span>
        <button
          disabled={
            $.filtered.length === 0
              ? $.endIndex >= allproducts.length
              : $.endIndex >= $.filtered.length
          }
          onClick={() => {
            $.setCurrentPage($.currentPage + 1);
          }}
          style={{
            opacity:
              $.filtered.length === 0
                ? $.endIndex >= allproducts.length
                  ? 0.4
                  : 1
                : $.endIndex >= $.filtered.length
                ? 0.4
                : 1,
          }}
        >
          <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </>
  );
}
