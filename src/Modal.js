import React from "react";

export function Modal({ setOpenModal, images }) {
  // console.log(images);
  return (
    <div className={`overlay `}>
      <div className="modal">
        <svg
          onClick={() => setOpenModal(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>

        <div className="image">
          {/* {images.map((el) => (
            <img
              className="collection__big"
              src={el[0]}
              alt="Item"
            />
          ))} */}
        </div>

        {/* <div className="image">{images[0]}</div> */}
        {/* {children} */}
      </div>
    </div>
  );
}
