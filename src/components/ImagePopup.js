import Popup from './Popup';

function ImagePopup({ card, onClose, isOpen, name }) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <button
        className='popup__close-btn'
        type='button'
        aria-label='кнопка закрытия попапа'
        onClick={onClose}></button>
      <img className='popup__image' alt={card.name} src={`${card.link}`} />
      <figcaption className='popup__image-caption'>{card.name}</figcaption>
    </Popup>
  );
}
export default ImagePopup;