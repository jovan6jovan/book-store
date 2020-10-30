import React from "react";

const FavoriteBook = ({ favBook }) => {
  return favBook !== null ? (
    <div style={{ margin: "2rem 0" }}>
      <h4>Title: {favBook.title}</h4>
    </div>
  ) : null;
};

export default FavoriteBook;
