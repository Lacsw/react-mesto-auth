import successImg from '../images/success.svg';
import failImg from '../images/fail.svg';

const InfoTooltip = ({ status, text, isOpen, onClose }) => {
  const tipImg = status === 'success' ? successImg : failImg;

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
        ></button>
        <img className="popup__tooltip-img" src={tipImg} alt={text} />
        <h2 className="popup__tooltip-title">{text}</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
