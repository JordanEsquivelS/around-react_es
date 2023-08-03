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
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

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
        onClosePopups={closeAllPopups}
        selectedCard={selectedCard}
        onCardClick={handleCardClick}
      />

      <Footer />
    </div>
  );
}

export default App;
