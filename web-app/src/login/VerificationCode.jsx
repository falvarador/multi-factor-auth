import { c, css, useState } from "atomico";

import { Style } from "../../assets/css/style";

function verificationCode({ processRequest }) {
  const today = new Date();
  const actualYear = `${today.getFullYear()}`;

  const [code, setCode] = useState(null);

  const onInputCode = (e) => setCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    processRequest();
  };

  return (
    <host shadowDom>
      <section>
        <aside className="login-aside-left">
          <h1>Código de verificación</h1>
          <h3>¡Bienvenido!</h3>
          <p>Administracíon de sitios web. Proyecto No1.</p>
          <a href="https://www.uned.ac.cr/" target="_blank" rel="noopener">
            UNED {actualYear}
          </a>
        </aside>
        <aside className="login-aside-right">
          <form>
            <label htmlFor="code">Código de 5 dígitos</label>
            <input
              name="code"
              oninput={onInputCode}
              type="password"
              value={code}
            />
            <button type="submit" onclick={handleSubmit}>
              Continuar
            </button>
          </form>
        </aside>
      </section>
    </host>
  );
}

verificationCode.props = {
  processRequest: Function,
};

verificationCode.styles = [
  Style,
  css`
    section {
      display: flex;
      justify-content: center;
      position: sticky;
      top: 15%;
    }

    section aside {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      padding: 4rem;
      text-align: left;
      width: 25%;
    }

    section h1 {
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    section h3 {
      margin: 2rem 0;
    }

    .login-aside-left {
      background-color: #0a2a66;
      border-radius: 6px 0 0 6px;
      color: #fff;
    }

    .login-aside-left a {
      color: #fff;
      display: block;
      padding-top: 1rem;
    }

    .login-aside-right {
      background-color: #fbfcfe;
      border-radius: 0 6px 6px 0;
      color: #000;
    }

    .login-aside-right label,
    .login-aside-right input,
    .login-aside-right button {
      display: block;
      margin: 1rem 0.5rem;
      padding: 0.5rem;
    }

    .login-aside-right label {
      color: #000;
      font-size: 1rem;
      margin: 0;
    }

    .login-aside-right input {
      border-radius: 4px;
      border: 1px solid #21242c29;
      font-size: 1rem;
      padding: 0.5rem;
      width: 100%;
    }

    .login-aside-right button {
      background-color: #1865f2;
      border-radius: 4px;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
      padding: 0.75rem;
      text-transform: uppercase;
      width: 100%;
    }

    .login-aside-right a {
      color: #1865f2;
      display: block;
      font-size: 0.9rem;
      font-weight: bold;
      padding: 0.8rem 0 0.8rem 0;
      text-align: center;
      text-decoration: none;
    }

    .login-aside-right a:hover {
      text-decoration: underline;
    }

    .login-aside-right .forgot-pass {
      text-align: left;
    }
  `,
];

export const VerificationCode = c(verificationCode);

customElements.define("mfa-verification-code", VerificationCode);
