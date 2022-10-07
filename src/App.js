
import React from 'react';
import './index.scss';


function Collection({ name, images }) {
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        <Collection
          name="Travel around the world"
          images={[
            "img/all/Thailand.jpg",
            "img/all/Turkey.jpg",
            "img/all/UAE.jpg",
            "img/all/Egypt.jpg"
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