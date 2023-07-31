import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  // Controladores de eventos para abrir las ventanas emergentes
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
    console.log("Clicked on profile-info__edit");
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
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
      />

      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </div>
  );
}

export default App;
