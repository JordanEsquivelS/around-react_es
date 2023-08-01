import React from "react";

function Card({card}) {
  return (
    <div className="photo-grid" key={card._id}>
      <img className="photo-grid__image" src={card.link} alt={card.name} />
      <img
        alt="imagen de tacho de basura blanco"
        className="photo-grid__delete"
        src={require("../images/delete.svg").default}
      />
      <div className="photo-grid__description">
        <p className="photo-grid__text">{card.name}</p>
        <div className="photo-grid__likesConteiner">
          <div className="photo-grid__like"></div>
          <p className="photo-grid__likeCounter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;