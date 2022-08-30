import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import portfolioData from "../../data";

const allCategory = [
  ...new Set(portfolioData.map((category) => category.category)),
];

const Portfolio = () => {
  const [data, setData] = useState(portfolioData);
  const [Category, setCategory] = useState(allCategory);
  const [categorySlected, setCategorySlected] = useState("featured");

  useEffect(() => {
    const featuredData = portfolioData.filter(
      (item) => item.category === "featured"
    );
    setData(featuredData);
  }, []);

  const portFilter = (category) => {
    const filteredData = portfolioData.filter(
      (item) => item.category === category
    );
    setCategorySlected(category);
    setData(filteredData);
  };
  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <ul >
        {Category.map((item, idx) => (
          <li
            className={item === categorySlected ? "btn active" : "btn"}
            onClick={() => portFilter(item)}
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <li className="item" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
