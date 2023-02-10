import { Link } from 'react-router-dom';

const Register = (props) => {
  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Регистрация</h2>
        <form className="auth__form" name="register-form">
          <fieldset className="auth__set">
            <label className="auth__field">
              <input
                className="auth__input auth__input_type_register-name"
                type="email"
                name="name"
                placeholder="Email"
                id="register-name-input"
                minLength="2"
                maxLength="40"
                required
                // value={name}
                // onChange={handleNameChange}
              />
              <span className="auth__input-error name-input-error"></span>
            </label>
            <label className="auth__field">
              <input
                className="auth__input auth__input_type_password"
                type="password"
                name="about"
                placeholder="Пароль"
                id="password-input"
                minLength="2"
                maxLength="200"
                required
                // value={description}
                // onChange={handleDescChange}
              />
              <span className="auth__input-error password-input-error"></span>
            </label>
          </fieldset>

          <button className="auth__submit-btn" type="submit">
            Зарегистрироваться
          </button>
          <p className="auth__sign-in">
            Уже зарегистрированы? <Link className="auth__link" to={'/sign-in'}>Войти</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;