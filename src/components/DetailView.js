import React from "react";
import { useParams } from "react-router-dom";

const DetailView = ({ articles }) => {
  const { id } = useParams();

  const article = articles.filter((article) => id === article.id);
  console.log(articles);

  return (
    article.length === 1 && (
      <div className="detailed-view">
        <ul>
          <li>{article[0].title}</li>
          published date: {article[0].published_date}
          <li>Level: {article[0].level}</li>
        </ul>
        <p>{article[0].body}</p>
      </div>
    )
  );
};

export default DetailView;
