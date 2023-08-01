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

  // Función para cerrar todas las ventanas emergentes
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setDeleteForm(false);
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
      />

      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </div>
  );
}

export default App;
