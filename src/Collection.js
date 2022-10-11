import React, { useState } from 'react';


export function Collection({ name, images }) {

  const [isActive, setIsActive] = useState(images);

    return (
      <div className="collection">      
        <img className={"collection__big"} src={ isActive[0]  } alt="Item" />    
        <div className="collection__bottom">
          <img 
            onClick={() => setIsActive([isActive[0], isActive[1]] = [isActive[1], isActive[0]])} 
            className={"collection__mini"} 
            src={images[1]} 
            alt="Item"/>
          <img  
             onClick={() => setIsActive([isActive[0], isActive[2]] = [isActive[2], isActive[0]])}
            className={"collection__mini"} 
            src={images[2]} 
            alt="Item"/>
          <img 
            onClick={() => setIsActive([isActive[0], isActive[3]] = [isActive[3], isActive[0]])} 
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