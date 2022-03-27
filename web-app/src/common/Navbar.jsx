import { c, css } from "atomico";

function navbar() {
  return (
    <host shadowDom>
      <nav>
        <section>
          <a href="#">Dashboard</a>
          <a href="#">Users</a>
        </section>
        <section>
          <img
            src="../../assets/images/common/greeting.svg"
            alt="Greeting image for dashboard."
          />
        </section>
        <section>
          <a href="/">Logout</a>
          <a href="#">Donate</a>
        </section>
      </nav>
    </host>
  );
}

navbar.styles = css`
  nav {
    align-items: center;
    background-color: #fbfcfe;
    display: flex;
    height: 3.875rem;
    justify-content: space-evenly;
    position: sticky;
    top: 0;
    width: 100%;
  }

  img {
    height: 2.875rem;
    cursor: pointer;
  }

  a {
    color: #1865f2;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8rem 0 0.8rem 0;
    text-align: center;
    text-decoration: none;
    padding: 0.8rem;
  }
`;

export const Navbar = c(navbar);

customElements.define("mfa-navbar", Navbar);
