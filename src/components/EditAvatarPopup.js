import { useRef, useEffect } from 'react';

import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputEl.current.value,
    });
  };

  useEffect(() => {
    inputEl.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitBtnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на новый аватар"
          id="avatar-link-input"
          required
          ref={inputEl}
        />
        <span className="popup__input-error avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
