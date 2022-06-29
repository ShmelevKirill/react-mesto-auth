import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  isLoad,
}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
}
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      loadingButtonText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoad={isLoad}
    >
      <input
        type="text"
        name="title"
        id="title-input"
        placeholder="Название"
        className="popup__input popup__input_place"
        required
        value={name}
        onChange={handleChangeName}
        minLength="2"
        maxLength="30"
    />
      <span className="popup__input-error place-input-error"></span>

        <input
          type="url"
          name="link"
          id="link-input"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_url"
          required
          value={link}
          onChange={handleChangeLink}
    />
        <span className="popup__input-error url-input-error"></span>
    </PopupWithForm>
  )
}