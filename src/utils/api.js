class Api {
  constructor(options) {
    this._baseUsl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  async getUserInfo() {
    const response = await fetch(`${this._baseUsl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async setUserInfo(data) {
    const response = await fetch(`${this._baseUsl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
    return this._checkResponse(response);
  }

  async getInitialCards() {
    const response = await fetch(`${this._baseUsl}/cards`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async addNewCard(data) {
    const response = await fetch(`${this._baseUsl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data['name'],
        link: data['link'],
      }),
    });
    return this._checkResponse(response);
  }

  async deleteCard(data) {
    const response = await fetch(`${this._baseUsl}/cards/${data._id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async toggleLikes(cardId, isLike) {
    const response = await fetch(`${this._baseUsl}/cards/${cardId}/likes`, {
      method: !isLike ? 'PUT' : 'DELETE',
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async updateAvatar(data) {
    const response = await fetch(`${this._baseUsl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
    return this._checkResponse(response);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: '9a596bd9-c6d6-4de4-b642-ea24a3ef64a1',
    'Content-Type': 'application/json',
  },
});

export default api;
