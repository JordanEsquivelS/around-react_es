import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await api.getUserInfo("users/me");
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    async function fetchInitialCards() {
      try {
        const cardsData = await api.getInitialCards("cards");
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching cards data:", error);
      }
    }

    fetchInitialCards();
  }, []);

  const handleDeleteCardClick = () => {
    props.onDeleteForm();
  };

  return (
    <main className="content">
      <>
        <div className="profile">
          <div className="profile__conteinerImg">
            <img
              className="profile__image"
              id="profileImage"
              src={userAvatar}
              alt="Avatar del estudiante de programacion web de Practicum"
            />
            <button
              onClick={props.onEditAvatarClick}
              className="profile__overlayImg"
            >
              <img
                className="profile__editImg"
                src={require("../images/edit_img_profile.svg").default}
                alt="lapiz de edicion de foto perfil"
              />
            </button>
          </div>

          <div className="profile-info">
            <h1 className="profile-info__nombre">{userName}</h1>
            <h2 className="profile-info__about-me">{userDescription}</h2>
            <button
              onClick={props.onEditProfileClick}
              className="profile-info__edit"
            >
              <img
                src={require("../images/Edit_Button.svg").default}
                alt="boton de editar"
              />
            </button>
          </div>
          <button onClick={props.onAddPlaceClick} className="profile__addPlace">
            <img
              className="profile__add-image"
              src={require("../images/adicion.svg").default}
              alt="boton de agregado"
            />
          </button>
        </div>
      </>
      <PopupWithForm
        title="Cambiar foto de perfil"
        name="imgProfile"
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.onClosePopups}
      >
        <input
          className="popup__input form__input"
          type="url"
          id="input-urlImg"
          placeholder="Enlace a la Imagen de perfil"
          required
        />
        <span className="popup__error" id="input-urlImg-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Editar Perfil"
        name="editProfile"
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.onClosePopups}
      >
        <input
          className="popup__input form__name"
          type="text"
          id="name"
          minLength="2"
          maxLength="40"
          placeholder="Nombre"
          required
        />
        <span className="popup__error" id="name-error"></span>

        <input
          className="popup__input form__input"
          type="text"
          id="aboutMe"
          minLength="2"
          maxLength="200"
          placeholder="Acerca de mi"
          required
        />
        <span className="popup__error" id="aboutMe-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Nuevo Lugar"
        name="newPlace"
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.onClosePopups}
      >
        <input
          className="popup__input form__name"
          type="text"
          id="titlePlace"
          placeholder="Titulo"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error" id="titlePlace-error"></span>

        <input
          className="popup__input form__input"
          type="url"
          id="input-url"
          placeholder="Enlace a la Imagen"
          required
        />
        <span className="popup__error" id="input-url-error"></span>
      </PopupWithForm>

      <>
        <div className="grid-container" id="grid-container">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onDeleteClick={handleDeleteCardClick}
              onCardClick={props.onCardClick}
            />
          ))}
        </div>
      </>

      <PopupWithForm
        title="¿Estás seguro?"
        formType="¿Estás seguro?"
        name="deleteCard"
        isOpen={props.isDeleteForm}
        onClose={props.onClosePopups}
      >
        <button
          className="popup__button form__save"
          type="submit"
          id="btnConfirmationDelete"
        >
          SI
        </button>
      </PopupWithForm>

      {props.selectedCard && (
        <ImagePopup card={props.selectedCard} onClose={props.onClosePopups} />
      )}
    </main>
  );
}

export default Main;
