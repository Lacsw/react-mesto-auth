import { useContext } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-btn ${
    isLiked && 'card__like-btn_active'
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={card.link}
        alt={`Изображение ${card.name}`}
        onClick={handleClick}
      />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="кнопка лайк"
            onClick={handleLikeClick}
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
        {isOwn && (
          <button
            className="card__remove-btn"
            type="button"
            aria-label="кнопка удаления"
            onClick={handleDeleteClick}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
