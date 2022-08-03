import React from "react";

const Product = () => {
  return (
    <div
      className={`app-sidebar-board ${
        boardId === chosenBoardId ? "active" : ""
      }`}
      onClick={() => handleChosenBoardCallback(boardId)}
    >
      <p className="title-boards">{title}</p>
      <span className="spacer"></span>
    </div>
  );
};

export default Product;
