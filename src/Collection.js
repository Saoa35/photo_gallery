import React, { useState } from 'react';


export function Collection({ name, images }) {

  const [isActive, setIsActive] = useState(false);

    return (
      <div className="collection">
        <img onClick={(e) => e.target === isActive ? setIsActive(true) : setIsActive(false)} className={!isActive ? "collection__big" : "collection__mini"} src={!isActive ? images[0] : images.map((el, i) => [el[0], el[i]] = [el[i], el[0]])} alt="Item" />
        <div className="collection__bottom">
          <img onClick={(e) => e.target !== isActive ? setIsActive(true) : setIsActive(false)} className={isActive ? "collection__big" : "collection__mini"} src={isActive ? images[1] : images.map((el, i) => [el[1], el[i]] = [el[i], el[1]])} alt="Item"/>
          <img onClick={(e) => e.target !== isActive ? setIsActive(true) : setIsActive(false)} className={isActive ? "collection__big" : "collection__mini"} src={isActive ? images[2] : images.map((el, i) => [el[2], el[i]] = [el[i], el[2]])} alt="Item"/>
          <img onClick={(e) => e.target !== isActive ? setIsActive(true) : setIsActive(false)} className={isActive ? "collection__big" : "collection__mini"} src={isActive ? images[3] : images.map((el, i) => [el[3], el[i]] = [el[i], el[3]])} alt="Item" />
        </div>
        <h4>{name}</h4>
      </div>
    );
  }