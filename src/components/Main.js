import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

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

  const [cardToDelete, setCardToDelete] = useState(null);

  const handleDeleteCardClick = (id) => {
    props.onDeleteForm();
    setCardToDelete(id);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  const handleConfirmedDelete = async (event) => {
    event.preventDefault();

    try {
      await api.deleteCard(`cards/${cardToDelete}`);
      setCards((cards) => cards.filter((card) => card._id !== cardToDelete));
      props.onClosePopups();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <main className="content">
      <>
        <div className="profile">
          <div className="profile__conteinerImg">
            <img
              className="profile__image"
              id="profileImage"
              src={currentUser?.avatar}
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
            <h1 className="profile-info__nombre">{currentUser?.name}</h1>
            <h2 className="profile-info__about-me">{currentUser?.about}</h2>
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
              onCardLike={handleCardLike}
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
          onClick={handleConfirmedDelete}
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
