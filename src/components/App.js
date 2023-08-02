import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteForm, setDeleteForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // Agregamos selectedCard

  // Controladores de eventos para abrir las ventanas emergentes
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleDeleteForm = () => {
    setDeleteForm(true);
  };

  // Nuevo controlador de eventos para establecer selectedCard
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // Función para cerrar todas las ventanas emergentes, excluyendo selectedCard
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setDeleteForm(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />
      <Main
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        onEditProfileClick={handleEditProfileClick}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        onAddPlaceClick={handleAddPlaceClick}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        onEditAvatarClick={handleEditAvatarClick}
        isDeleteForm={isDeleteForm}
        onDeleteForm={handleDeleteForm}
        onClosePopups={closeAllPopups} // Pasamos el handler closeAllPopups a Main
        selectedCard={selectedCard}
        onCardClick={handleCardClick}
      />

      <Footer />
    </div>
  );
}

export default App;
