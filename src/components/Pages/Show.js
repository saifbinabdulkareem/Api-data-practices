import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Show() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [articles, setArticles] = useState([]);

  const fetchItems = async () => {
    let apiKey = "a7d9656451274646a5adf7e82b6b5ae4";
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
    );
    const articles = await data.json();
    console.log(articles);
    console.log(articles.articles);
    setArticles(articles.articles);
  };
  return (
    <div>
      {articles.map(item => (
        <h1 key={item.source.id} >
         <Link to={`/show/${item.source.id}`}> {item.author} </Link>
          </h1>
      ))}
    </div>
  );
}

export default Show;
