import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoad,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

      onUpdateUser({
        name,
        about: description,
      });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      loadingButtonText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoad={isLoad}
    >
      <input
        type="text"
        value={name ?? ""}
        onChange={handleChangeName}
        name="name"
        id="name-input"
        placeholder="Ваше имя"
        className="popup__input popup__input_name"
        required
        minLength="2"
        maxLength="40"
    />
      <span className="popup__input-error name-input-error"></span>
      <input
        type="text"
        value={description ?? ""}
        onChange={handleChangeAbout}
        name="profession"
        id="profession-input"
        placeholder="Вид деятельности"
        className="popup__input popup__input_info"
        required
        minLength="2"
        maxLength="200"
    />
      <span className="popup__input-error info-input-error"></span>
        </PopupWithForm>
  )
}