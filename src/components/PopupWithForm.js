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
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__${name}-form`}
          name={`${name}-form`}
          onSubmit={onSubmit}
        >
          {children}

          <button className="popup__submit-btn" type="submit">
            {submitBtnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
