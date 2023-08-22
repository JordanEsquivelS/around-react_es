import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      title="Nuevo Lugar"
      name="newPlace"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
  );
}

export default AddPlacePopup;
