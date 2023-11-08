import { thematiclist } from "../../lists/thematiclist";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { useState } from "react";

export default function Thematic() {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResults = thematiclist.slice(startIndex, endIndex);

  return (
    <div className="thematic__section">
      <div className="thematic__container">
        <h1>Thematic</h1>
        <div className="thematic__main">
          {paginatedResults.map((item) => {
            return (
              <div className="thematic__item" data-aos="fade-up"
              data-aos-anchor-placement="top-center">
                <img src={item.pic} alt="" />
                <h2>{item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="thematic__pagination" data-aos="fade-up">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          style={{ opacity: currentPage === 1 ? 0.4 : 1 }}
        >
          <HiOutlineArrowNarrowLeft />
        </button>
        {Array.from(
          { length: Math.ceil(thematiclist.length / pageSize) },
          (_, index) => (
            <button className={`${currentPage === index + 1 ? "thematic__pages__active" : ""}`} key={index} onClick={() => setCurrentPage(index + 1)}>
              {index + 1} 
            </button>
          )
        )}
        <button
          disabled={endIndex >= thematiclist.length}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          style={{ opacity: endIndex >= thematiclist.length ? 0.4 : 1 }}
        >
          <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </div>
  );
}
