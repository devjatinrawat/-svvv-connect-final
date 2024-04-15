import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        className="pagination"
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          padding: "60px",
          fontSize: "20px",
        }}
      >
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-item"
            style={{
              borderRadius: "29%",
              border: "solid #FFF",
              padding: "20px",
              backgroundColor: "#FFF",
            }}
          >
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
