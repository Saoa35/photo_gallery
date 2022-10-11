import React, { useEffect, useState } from 'react';


export function Collection({ name, images }) {

  const [isActive, setIsActive] = useState(null);

    return (
      <div className="collection">      
        <img className={"collection__big"} src={ images[0]  } alt="Item" />    
        <div className="collection__bottom">
          <img 
            onClick={(e) => setIsActive(e.target)} 
            className={"collection__mini"} 
            src={isActive ? [images[0], images[1]] = [images[1], images[0]] : images[1]} 
            alt="Item"/>
          <img  
            onClick={() => setIsActive(true)}
            className={"collection__mini"} 
            src={images[2]} 
            alt="Item"/>
          <img  
            className={"collection__mini"} 
            src={images[3]} 
            alt="Item" />
        </div>
        <h4>{name}</h4>
      </div>
    );
  }


  // <div className="collection">
  //       <img className={"collection__big"} src={images[0]} alt="Item" />
  //       <div className="collection__bottom">
  //         <img className={"collection__mini"} src={images[1]} alt="Item"/>
  //         <img className={"collection__mini"} src={images[2]} alt="Item"/>
  //         <img className={"collection__mini"} src={images[3]} alt="Item" />
  //       </div>
  //       <h4>{name}</h4>
  //     </div>