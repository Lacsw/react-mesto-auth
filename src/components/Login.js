const Login = (props) => {
  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form" name="login-form">
          <fieldset className="auth__set">
            <label className="auth__field">
              <input
                className="auth__input auth__input_type_login-email"
                type="email"
                name="email"
                placeholder="Email"
                id="login-email-input"
                minLength="2"
                maxLength="40"
                required
                // value={name}
                // onChange={handleNameChange}
              />
              <span className="auth__input-error email-input-error"></span>
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
                // value={description}
                // onChange={handleDescChange}
              />
              <span className="auth__input-error password-input-error"></span>
            </label>
          </fieldset>

          <button className="auth__submit-btn" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
