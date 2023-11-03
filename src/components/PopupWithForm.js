import React from "react";

function PopupWithForm({
  isOpen,
  title,
  children,
  formType,
  onClose,
  name,
  onSubmit,
  isFormValid,
  onPopupClose,
}) {
  const buttonClass = isFormValid
    ? "popup__button form__save"
    : "popup__button form__save popup__button_disabled";

  const handleClose = () => {
    if (onPopupClose) {
      onPopupClose();
    }
    onClose();
  };
  return (
    <div className={`popup ${isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__container">
        <img
          className="popup__container-image"
          src={require("../images/CloseIcon_blanco.svg").default}
          alt="botón de cerrar"
          onClick={handleClose}
        />
        <form className="popup__form form" onSubmit={onSubmit}>
          <h2 className="form__title">{title}</h2>

          {isOpen && children}

          {formType !== "¿Estás seguro?" && (
            <button
              className={buttonClass}
              type="submit"
              id={`submit_${name}`}
              disabled={!isFormValid}
            >
              GUARDAR
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
