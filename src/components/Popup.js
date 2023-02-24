import React, { useEffect } from 'react';

const Popup = ({ children, name, isOpen, onClose }) => {
  const isImagePopup = name === 'image';

  useEffect(() => {
    if (isOpen) {
      const closeByEsc = (evt) => {
        if (evt.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', closeByEsc);
      return () => document.removeEventListener('keydown', closeByEsc);
    }
  }, [isOpen, onClose]);

  const closeByOver = (evt) => {
    if (evt.target.classList.contains('popup')) {
      onClose();
    }
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
      onClick={closeByOver}>
      <div className={`popup__${isImagePopup ? 'image-' : ''}container`}>
        <button
          onClick={onClose}
          className='popup__close-btn'
          type='button'
          aria-label='кнопка закрытия попапа'></button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
