import React, { useRef, useState, useEffect } from "react";
import PopupWithForm from "../components/PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = useRef(null);
  const [avatar, setAvatar] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const urlRegex = /^(http|https):\/\/(www\.)?[^/\s]+\/?[^\s]*[#]?$/;
    setIsFormValid(urlRegex.test(avatar));
  }, [avatar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (avatarInputRef.current) {
      onUpdateAvatar({
        avatar: avatarInputRef.current.value,
      });
    }
    setAvatar("");
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      name="imgProfile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <input
        ref={avatarInputRef}
        className="popup__input form__input"
        type="url"
        id="input-urlImg"
        placeholder="Enlace a la Imagen de perfil"
        value={avatar}
        onChange={handleAvatarChange}
        required
      />
      <span className="popup__error" id="input-urlImg-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
