import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import auth from '../utils/auth';

const Register = () => {
  const [formValue, setFormValue] = useState({
    password: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    auth.signup(formValue).then(() => {
      setFormValue({
        password: '',
        email: '',
      });
      navigate('/sign-in', { replace: true });
    });
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Регистрация</h2>
        <form
          onSubmit={handleSubmit}
          className="auth__form"
          name="register-form"
        >
          <fieldset className="auth__set">
            <label className="auth__field">
              <input
                className="auth__input auth__input_type_register-name"
                type="email"
                name="email"
                placeholder="Email"
                id="register-name-input"
                minLength="2"
                maxLength="40"
                required
                value={formValue.email}
                onChange={handleChange}
              />
              <span className="auth__input-error name-input-error"></span>
            </label>
            <label className="auth__field">
              <input
                className="auth__input auth__input_type_password"
                type="password"
                name="password"
                placeholder="Пароль"
                id="password-input"
                minLength="2"
                maxLength="200"
                required
                value={formValue.password}
                onChange={handleChange}
              />
              <span className="auth__input-error password-input-error"></span>
            </label>
          </fieldset>

          <button className="auth__submit-btn" type="submit">
            Зарегистрироваться
          </button>
          <p className="auth__sign-in">
            Уже зарегистрированы?{' '}
            <Link className="auth__link" to={'/sign-in'}>
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
