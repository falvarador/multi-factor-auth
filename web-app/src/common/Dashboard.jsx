import { c } from "atomico";

import { Body } from "./Body";
import { Navbar } from "./Navbar";

export const Dashboard = c(() => {
  return (
    <host>
      <Navbar></Navbar>
      <Body></Body>
    </host>
  );
});

customElements.define("mfa-dashboard", Dashboard);
