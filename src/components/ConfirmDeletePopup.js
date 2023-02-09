import PopupWithForm from './PopupWithForm';

const ConfirmDeletePopup = ({isOpen, onClose, onCardDelete, card}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверенны?"
      submitBtnText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default ConfirmDeletePopup;
