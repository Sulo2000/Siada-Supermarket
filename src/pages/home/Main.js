import { category } from "./category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { allproducts } from "../../lists/allproducts";
import { useContext } from "react";
import  { Context }  from '../../context/Context';

export default function Main() {
  const $ = useContext(Context);
  return (
    <div className="categories__slider" data-aos="fade-in-down">
      <h2>Top Categories</h2>
      <Swiper modules={[Navigation]} navigation slidesPerView={window.innerWidth <= 600 ? 1 : 6}>
        {category.map((item, i) => {
          return (
            <SwiperSlide key={Math.random()}>
              <Link to={`/Products-${$.uri(item.name)}`} onClick={() => {
                  $.setCateIndex(item.name);
                  let filterProd = allproducts.filter(it => it.category === item.name);
                  $.setFiltered(filterProd);
                  $.setCurrentPage(1);  
                  localStorage.setItem('namePath', $.uri(item.name));
              }}>
                <div className="cate__con">
                  <span className="categories" key={i}>
                    <img src={item.picture} alt="" />
                  </span>
                  <h2>{item.name}</h2>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
