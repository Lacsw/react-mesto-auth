import React, { useEffect } from 'react';

const Popup = ({ children, name, isOpen, onClose }) => {
  const isImagePopup = name === 'image';

  useEffect(() => {
    const closeByEsc = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => window.removeEventListener('keydown', closeByEsc);
  }, [onClose]);

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
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
