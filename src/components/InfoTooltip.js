import success from '../images/success.svg';
import fail from '../images/fail.svg';

const InfoTooltip = ({ name, title, isOpen, onClose }) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
        ></button>
        <img className="popup__tooltip-img" src={success} />
        <h2 className="popup__tooltip-title">{title}</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
