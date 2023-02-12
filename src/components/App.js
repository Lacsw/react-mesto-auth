import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import api from '../utils/api';
import auth from '../utils/auth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Register from './Register';
import Login from './Login';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfimDeletePopupOpen, setConfimDeletePopupOpen] = useState(false);
  const [deletedCard, setDeletedCard] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isTooltipOpen, setTooltipOpened] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState('');

  const navigate = useNavigate();

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleRemoveCardBtnClick(card) {
    setConfimDeletePopupOpen(true);
    setDeletedCard(card);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const handleLogin = () => {
    setLoggedIn(true);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfimDeletePopupOpen(false);
    setSelectedCard({});
    setTooltipOpened(false);
    setTooltipStatus('');
  }

  function handleUpdateUser(userInfo) {
    api
      .setUserInfo(userInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((e) => {
        console.log(e);
      });

    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function handleUpdateAvatar(newAvatar) {
    api
      .updateAvatar(newAvatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //Действия с карточками
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .toggleLikes(card._id, isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleCardDeleteSubmit(card) {
    api
      .deleteCard(card)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleAddPlaceSubmit = (card) => {
    api
      .addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function handelRegisterUser(data) {
    auth
      .signup(data)
      .then(() => {
        setTooltipOpened(true);
        setTooltipStatus('success');
        navigate('/sign-in', { replace: true });
      })
      .catch((error) => {
        setTooltipOpened(true);
        setTooltipStatus('fail');
        console.log(error);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Routes>
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route
            path="/"
            element={
              <Main
                name="place-name"
                cards={cards}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleRemoveCardBtnClick}
              />
            }
          />
        </Route>
        <Route
          path="/sign-up"
          element={<Register onRegister={handelRegisterUser} />}
        />
        <Route path="/sign-in" element={<Login handleLogin={handleLogin} />} />
      </Routes>

      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <ConfirmDeletePopup
        isOpen={isConfimDeletePopupOpen}
        onClose={closeAllPopups}
        onCardDelete={handleCardDeleteSubmit}
        card={deletedCard}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <InfoTooltip
        status={tooltipStatus}
        isOpen={isTooltipOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
