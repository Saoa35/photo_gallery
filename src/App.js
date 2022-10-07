
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
            'https://blog.ostrovok.ru/wp-content/uploads/2019/03/samui_3.jpg',
            "https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Egypt-1-Giza-Pyramid-e1491277079103.jpg",
            'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/4c7cf4d23ab2f9a120b208964d00890c/',
            'https://pic.tu-tu.ru/content4/78465786.jpg'

            // "../img/all/Thailand.png"
            // "img/all/Egypt.png",
            // "img/all/UAE.png",
            // "img/all/Turkey.png"
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