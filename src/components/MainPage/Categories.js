import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./category/cat11.png",
      cateName: "Books",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
