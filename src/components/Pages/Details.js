import React,{useEffect, useState} from "react";

function Details( {match} ) {
    const { article, setArticle } = useState({})

    useEffect(()=> {
        fetchItem()
        console.log(match)
        console.log(match.params.id)
    }, [])
    let apiKey = "a7d9656451274646a5adf7e82b6b5ae4";
    const fetchItem = async () => {
        const fetchArticle = await fetch(`https://newsapi.org/v2/top-headlines?sources=${match.params.id}&apiKey=${apiKey}`)
        const data = await fetchArticle.json()
        console.log(data)
    };

  return <div>
      <h1>Details</h1>
  </div>;
}

export default Details;
