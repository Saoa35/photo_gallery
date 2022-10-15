
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
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [serchValue, setSerchValue] = useState('');
  const [collections, setCollections] = useState([]);

  // const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const category = `${categoryId ? `category=${categoryId}` : ''}`;
    const pageItem = `?page=${page}&limit=4&`;

    fetch(url + pageItem + category)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json)
      })
      .catch((err) => console.log(err.mesage))
      .finally(() => setIsLoading(false))
  }, [categoryId, page]);
  
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
        
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (collections
            .filter((obj) => obj.name.toLowerCase().includes(serchValue.toLowerCase()))
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
         
      </div>
      <ul className="pagination">
        {[...Array(2)].map((_, index) => (
          <li onClick={() => setPage(index + 1)} className={page === index + 1 ? 'active' : ''} key={index}>{index + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;