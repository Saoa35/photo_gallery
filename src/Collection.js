import React, { useState } from "react";
import { Modal } from "./Modal";

export function Collection({ name, images, setOpenModal, openModal }) {
  const [isActive, setIsActive] = useState(images);

  const replaceImage = (img, num) => {
    return ([img[0], img[num]] = [img[num], img[0]]);
  };

  const arr = [1, 2, 3];

  // console.log([images[0]]);

  return (
    <div className="collection">
      <img
        className="collection__big"
        src={isActive[0]}
        alt="Item"
        // onClick={() => setOpenModal(true)}
        onClick={() => {
          setOpenModal(true) && <Modal images={images} />;
        }}
      />
      {/* {openModal ? <Modal>{images[0]}</Modal>} */}
      <div className="collection__bottom">
        {arr.map((el) => (
          <img
            onClick={() => setIsActive(replaceImage(images, el))}
            className={"collection__mini"}
            src={images[el]}
            key={el}
            alt="Item"
          />
        ))}
      </div>

      <h4>{name}</h4>
    </div>
  );
}
