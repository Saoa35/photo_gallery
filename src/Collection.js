import React, { useState } from "react";
import { Modal } from "./Modal";

export function Collection({ name, images }) {
  const [isActive, setIsActive] = useState(images);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const imageReplace = (img, num) => {
    [img[0], img[num]] = [img[num], img[0]];
  };

  return (
    <div className="collection">
      <img
        className="collection__big"
        src={isActive[0]}
        alt="Item"
        onClick={() => setOpenModal(true)}
      />
      {/* {
            openModal ?
            <Modal open={open} setOpen={setOpen}>
               <img src={ isActive[0] } alt="Item"  />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            </Modal> : ''
          } */}

      <div className="collection__bottom">
        <img
          onClick={() =>
            setIsActive(([images[0], images[1]] = [images[1], images[0]]))
          }
          className={"collection__mini"}
          src={images[1]}
          alt="Item"
        />
        <img
          onClick={() =>
            setIsActive(([images[0], images[2]] = [images[2], images[0]]))
          }
          className={"collection__mini"}
          src={images[2]}
          alt="Item"
        />
        <img
          onClick={() =>
            setIsActive(([images[0], images[3]] = [images[3], images[0]]))
          }
          className={"collection__mini"}
          src={images[3]}
          alt="Item"
        />
      </div>
      <h4>{name}</h4>
    </div>
  );
}
