import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los datos del usuario
    api
      .getUserInfo("users/me")
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    // Llamada a la API para obtener los datos de las tarjetas
    api
      .getInitialCards("cards")
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.error("Error fetching cards data:", error);
      });
  }, []);

  // Función para manejar el clic en el botón de eliminación de tarjeta
  const handleDeleteCardClick = () => {
    props.onDeleteForm(); // Esto abrirá el PopupWithForm de confirmación
  };

  return (
    <main className="content">
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
        onClose={props.onClosePopups} // Pasamos la prop onClosePopups a PopupWithForm
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

      <div className="grid-container" id="grid-container">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card} // Aquí se pasa la propiedad card al componente Card
            onDeleteClick={handleDeleteCardClick} // Pasa la función handleDeleteCardClick a Card
          />
        ))}
      </div>

      <PopupWithForm
        title="¿Estás seguro?"
        formType="¿Estás seguro?" // Agregamos el prop formType
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

      <div className="popImg">
        <div className="popImg__container">
          <img
            alt="boton de cerrar"
            className="popImg__close"
            src={require("../images/CloseIcon_blanco.svg").default}
          />
          <img src=" " alt=" " className="popImg__bigImage" />
          <p className="popImg__text"></p>
        </div>
      </div>
    </main>
  );
}

export default Main;
