
import React, { useEffect, useState } from 'react';
import  { Collection }  from "./Collection.js";
import './index.scss';

const url = 'https://63405dbbd1fcddf69cb7703e.mockapi.io/photo_gallery/p1/photo_collections';

const categs = [
  { "name": "All" },
  { "name": "Thailand" },
  { "name": "Egypt" },
  { "name": "Turkey" },
  { "name": "UAE" }
];

function App() {

  const [categoryId, setCategoryId] = useState(0);
  const [serchValue, setSerchValue] = useState('');
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch(url + `?${categoryId ? `category=${categoryId}` : ''}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json)
      })
      .catch((err) => console.log(err.mesage))
  }, [categoryId]);
  
  return (
    <div className="App">
      <h1>Вest holiday resorts</h1>
      <div className="top">
        <ul className="tags">
          {categs.map((obj, index) => (
              <li 
                onClick={() => setCategoryId(index)}
                className={categoryId === index ? 'active' : ''} 
                key={obj.name}>
                {obj.name}
              </li>
          )
          )}
        </ul>
        <input 
          className="search-input" 
          placeholder="Search by name..."
          value={serchValue}
          onChange={(e) => setSerchValue(e.target.value)}/>
      </div>
      <div className="content">
        {collections
            .filter((obj) => obj.name.toLowerCase().includes(serchValue.toLowerCase()))
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            )
        )}
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