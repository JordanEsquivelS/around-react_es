import React, { useState, useEffect } from "react";
import EditProfilePopup from "../components/EditProfilePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteForm, setDeleteForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await api.getUserInfo("users/me");
        setCurrentUser(userData);
      } catch (error) {
        console.log("Error al obtener la información del usuario:", error);
      }
    };

    fetchUserInfo();
  }, []);

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

  const handleUpdateUser = async (data) => {
    try {
      const updatedUser = await api.setUserInfo(
        data.name,
        data.about,
        "users/me"
      );
      setCurrentUser(updatedUser);
      closeAllPopups();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setDeleteForm(false);
    setSelectedCard(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
