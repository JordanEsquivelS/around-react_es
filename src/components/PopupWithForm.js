import React from "react";

function PopupWithForm(props) {
  const { formType } = props;

  return (
    <div className={`popup ${props.isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__container">
        <img
          className="popup__container-image"
          src={require("../images/CloseIcon_blanco.svg").default}
          alt="boton de cerrar"
          onClick={props.onClose}
        />
        <form className="popup__form form" noValidate>
          <h2 className="form__title">{props.title}</h2>

          {props.isOpen && props.children}

          {formType !== "¿Estás seguro?" && (
            <button
              className="popup__button form__save"
              type="submit"
              id={`submit_${props.name}`}
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
