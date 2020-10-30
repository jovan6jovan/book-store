import React from "react";

const ReadingList = ({ readingList }) => {
  const list = readingList.map((reading, idx) => {
    return (
      <div key={idx} style={{ margin: "2rem 0" }}>
        <h4>Title: {reading.title}</h4>
        <p>Author: {reading.author}</p>
      </div>
    );
  });

  return <>{list}</>;
};

export default ReadingList;
