function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_picture ${
        card.link && 'popup_opened'
      }`}
    >
      <figure className="popup__image-container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
          onClick={onClose}
        ></button>
        <img
          className="popup__image"
          alt={card.name}
          src={`${card.link}`}
        />
        <figcaption className="popup__image-caption">{card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
