
import React, { useEffect, useState } from 'react';
import  { Collection }  from "./Collection.js";
import './index.scss';

const url = 'https://63405dbbd1fcddf69cb7703e.mockapi.io/photo_gallery/p1/photo-collections';

function App() {

  const [categoryId, setCategoryId] = useState(0);
  const [serchValue, setSerchValue] = useState('');
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json)
      })
      .catch((err) => console.log(err.mesage))
  }, []);
  
  return (
    <div className="App">
      <h1>Вest holiday resorts</h1>
      <div className="top">
        <ul className="tags">
          {collections.map(obj => (
            obj.categories.map(obj2 => (
              <li key={obj2.name}>{obj2.name}</li>
            ))
          ))}
        </ul>
        <input 
          className="search-input" 
          placeholder="Search by name..."
          value={serchValue}
          onChange={(e) => setSerchValue(e.target.value)}/>
      </div>
      <div className="content">
        {collections.map((obj) => (
            obj.collections
            .filter((obj) => obj.name.toLowerCase().includes(serchValue.toLowerCase()))
            .map((obj2, index) => (
              <Collection key={index} name={obj2.name} images={obj2.photos} />
            ))
        ))}
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