import React, { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const titleRef = useRef();
  const imageUrlRef = useRef();

  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const title = titleRef.current.value;
    const imageUrl = imageUrlRef.current.value;
    setIsFormValid(title.length > 2 && imageUrl.length > 10);
  };

  return (
    <PopupWithForm
      title="Nuevo Lugar"
      name="newPlace"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={(event) => {
        event.preventDefault();
        props.onAddPlaceSubmit({
          name: titleRef.current.value,
          link: imageUrlRef.current.value,
        });
      }}
      isFormValid={isFormValid}
      onPopupClose={() => setIsFormValid(false)}
    >
      <input
        ref={titleRef}
        className="popup__input form__name"
        type="text"
        id="titlePlace"
        placeholder="Titulo"
        minLength="2"
        maxLength="30"
        required
        onChange={checkFormValidity}
      />
      <span className="popup__error" id="titlePlace-error"></span>

      <input
        ref={imageUrlRef}
        className="popup__input form__input"
        type="url"
        id="input-url"
        placeholder="Enlace a la Imagen"
        required
        onChange={checkFormValidity}
      />
      <span className="popup__error" id="input-url-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
