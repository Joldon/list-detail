import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
// import local json file
// import jsondata from './assets/data.json';
import data from'./assets/data.json';

// console.log(data)
// console.log(jsondata.fields)


function App() {
  const [articles, setArticles] = useState(data);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await Axios.get(
        "https://www.sicher-im-netz.de/siba-app/siba/list/0"
      , {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
          //  'Content-Type': 'application/x-www-form-urlencoded' 
          // 'Access-Control-Allow-Origin': '*',
          // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          // 'Content-Type': 'application/json',
        },
        // withCredentials: true,
        // credentials: 'same-origin',
      })
      setArticles(res.data.articles);
      console.log(res);
    };
    fetchArticles();
  }, []);
  
  // useEffect(() => {
  //   fetch("https://www.sicher-im-netz.de/siba-app/siba/list/0")
  //       .then(response => response.json())
  //       .then(data => console.log(data)) 
  //       }, [])
  // console.log(articles)
        


  return (
    <div className="container">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
