import { c, css } from "atomico";

function body() {
  const today = new Date();
  const actualYear = `${today.getFullYear()}`;

  return (
    <host shadowDom>
      <section>
        <aside className="login-aside-left">
          <h1>Has iniciado sesión</h1>
          <h3>¡Bienvenido!</h3>
          <p>Administracíon de sitios web. Proyecto No1.</p>
          <a href="https://www.uned.ac.cr/" target="_blank" rel="noopener">
            UNED {actualYear}
          </a>
        </aside>
        <aside className="login-aside-right">
          <img
            src="../../assets/images/common/dashboard.svg"
            alt="Dashboard image."
          />
        </aside>
      </section>
    </host>
  );
}

body.styles = css`
  img {
    width: 130%;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }

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
`;

export const Body = c(body);

customElements.define("mfa-body", Body);
