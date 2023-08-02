import React from "react";

function Card({ card, onDeleteClick, onCardClick }) {
  // Define la función para manejar el clic en la tarjeta
  const handleClick = () => {
    onCardClick(card); // Llama a la función para establecer la tarjeta seleccionada
  };

  // Define la función para manejar el clic en el botón de eliminación
  const handleDeleteClick = () => {
    onDeleteClick(); // Llama a la función para abrir el PopupWithForm de confirmación de eliminación
  };

  return (
    <div className="photo-grid" key={card._id}>
      <img className="photo-grid__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <img
        alt="imagen de tacho de basura blanco"
        className="photo-grid__delete"
        src={require("../images/delete.svg").default}
        onClick={handleDeleteClick} // Agrega el evento onClick para abrir el PopupWithForm de confirmación
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
