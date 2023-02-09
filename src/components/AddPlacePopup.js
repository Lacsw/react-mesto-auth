import { useEffect, useState } from 'react';

import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [newCard, setNewCard] = useState({ name: '', link: '' });

  const handleFormChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(newCard);
  };

  useEffect(() => {
    setNewCard({ name: '', link: '' });
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      submitBtnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_place-name"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            id="place-name-input"
            required
            value={newCard.name}
            onChange={handleFormChange}
          />
          <span className="popup__input-error place-name-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            id="link-input"
            required
            value={newCard.link}
            onChange={handleFormChange}
          />
          <span className="popup__input-error link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
