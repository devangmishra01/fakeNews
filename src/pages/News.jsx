import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
// const contFoller = new AbortController();


const News = (props) => {
  const {search}=props;
  const URL = `https://newsapi.org/v2/everything?q=${search}&from=2023-03-23&sortBy=publishedAt&apiKey=66000894f4ab459bbc0dee4a575d204f`;
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const data = await response.json();
      setNewsData(data.articles);
    }
    getData();
  }, [search,URL]);
  console.log(newsData);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData &&
          newsData.map((news, i) => (
            <NewsCard
              key={i}
              title={news.title}
              description={news.description}
              image={news.urlToImage}
              date={news.publishedAt}
            />
          ))}
      </div>
        <div className="flex w-full bg-red-400 justify-center align-items-center p-2 m-2">
          {newsData && "Warning! Fake news found!"}
        </div>
    </>
  );
};

export default News;
