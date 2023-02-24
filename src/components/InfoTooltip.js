import successImg from '../images/success.svg';
import failImg from '../images/fail.svg';
import Popup from './Popup';

const InfoTooltip = ({ state, onClose }) => {
  const { opened, status, text } = state;
  const tipImg = status === 'success' ? successImg : failImg;

  return (
    <Popup isOpen={opened} onClose={onClose}>
      <img className='popup__tooltip-img' src={tipImg} alt={text} />
      <h2 className='popup__tooltip-title'>{text}</h2>
    </Popup>
  );
};

export default InfoTooltip;
