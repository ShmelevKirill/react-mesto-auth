import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoad,
}) {
  const avatar = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }
    React.useEffect(() => {
      avatar.current.value = "";
    }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      loadingButtonText="Сохранение"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoad={isLoad}
    >
      <input
        type="url"
        name="link-avatar"
        id="link-input-avatar"
        placeholder="Ссылка на картинку"
        className="popup__input popup__container-avatar"
        ref={avatar}
        required
    />
      <span className="popup__input-error url-avatar-error"></span>
        </PopupWithForm>
  );
}