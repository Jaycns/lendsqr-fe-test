import React, { useContext, useCallback } from "react";
import drop from "../assets/icons/main/pagination/drop.svg";
import next from "../assets/icons/main/pagination/next btn.svg";
import prev from "../assets/icons/main/pagination/prev btn.svg";
import AppContext from "../context/context";
import "../styles/dashboard.scss";

function Pagination() {
  const { setCurrentPage, currentPage, usersPerPage, handleUsersPerPage } =
    useContext(AppContext);
  const pages = Math.ceil(100 / usersPerPage);
  const pageArr = [];
  for (let i = 1; i <= pages; i++) pageArr.push(i);
  const handleNext = useCallback(() => {
    if (currentPage !== pages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [setCurrentPage, currentPage, pages]);
  const handlePrev = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [setCurrentPage, currentPage]);
  const handleNav = useCallback(
    (e) => {
      setCurrentPage(Number(e.target.getAttribute("id")));
    },
    [setCurrentPage]
  );

  return (
    <div className="pagination">
      <div className="showing">
        <p>
          Showing{" "}
          <select
            onChange={handleUsersPerPage}
            className="span"
            style={{ backgroundImage: `url(${drop})` }}
          >
            <option id="9">9</option>
            <option id="20">20</option>
            <option id="50">50</option>
            <option id="100">100</option>
          </select>
          out of 100
        </p>
      </div>
      <div className="page-Nav">
        {currentPage === 1 ? (
          <img src={prev} alt="prev" />
        ) : (
          <img
            src={next}
            alt="prev"
            className="img active"
            onClick={handlePrev}
          />
        )}
        {pageArr.map((item, index) => {
          return (
            <p
              key={index}
              id={item}
              onClick={handleNav}
              className={item === currentPage ? "active" : ""}
            >
              {item}
            </p>
          );
        })}
        {currentPage !== 12 ? (
          <img src={next} alt="next" className="img" onClick={handleNext} />
        ) : (
          <img
            src={prev}
            alt="next"
            className="img active"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
}

export default Pagination;
