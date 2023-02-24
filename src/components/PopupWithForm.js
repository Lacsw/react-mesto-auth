import Popup from './Popup';

function PopupWithForm({
  name,
  title,
  submitBtnText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <h2 className='popup__title'>{title}</h2>
      <form
        className={`popup__form popup__${name}-form`}
        name={`${name}-form`}
        onSubmit={onSubmit}>
        {children}

        <button className='popup__submit-btn' type='submit'>
          {submitBtnText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
