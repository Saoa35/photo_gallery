
import React, { useEffect, useState } from 'react';
import  { Collection }  from "./Collection.js";
import './index.scss';

const url = 'https://63405dbbd1fcddf69cb7703e.mockapi.io/photo_gallery/p1/photo-collections';

function App() {

  const [collections, setCollections] = useState([]);

  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       setCollections(json)
  //     })
  //     .catch(err => console.log(err.mesage))
  // })
  
  return (
    <div className="App">
      <h1>Вest holiday resorts</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">All</li>
          <li>Thailand</li>
          <li>Egypt</li>
          <li>Turkey</li>
          <li>UAE</li>
        </ul>
        <input className="search-input" placeholder="Search by name..." />
      </div>
      <div className="content">
        <Collection
          name="Travel around the world"
          images={[
            "img/all/Thailand.png",
            "img/all/Egypt.png",
            "img/all/UAE.png",
            "img/all/Turkey.png"
          ]}
        />
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;