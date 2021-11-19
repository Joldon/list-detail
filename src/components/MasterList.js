import React, { useState, useEffect } from "react";
import data from "../assets/data.json";
import { Link, Routes, Route } from "react-router-dom";
import Axios from "axios";
import MasterItem from "./MasterItem";
import DetailView from "./DetailView";

console.log(data);

const MasterList = () => {
  const [articles, setArticles] = useState(data);

  //   useEffect(() => {
  //     const fetchArticles = async () => {
  //       const res = await Axios.get(
  //         "https://www.sicher-im-netz.de/https://thingproxy.freeboard.io/fetch/https://www.sicher-im-netz.de/siba-app/siba/list/0-app/siba/list/0"
  //       )
  //       setArticles(res.data.articles);
  //       console.log(res);
  //     };
  //     fetchArticles();
  //   }, []);

  return (
    <div className='container'>
      <div className="master-list">
        <div className="sub-container">
          {articles.map(({ title, body, id }) => (
            <MasterItem id={id} title={title} body={body} />
          ))}
        </div>
      </div>
      <div className=".detailed-view-container">
        <div className="sub-container">
          <Routes>
            <Route
              path="article/:id"
              element={<DetailView articles={articles} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MasterList;
