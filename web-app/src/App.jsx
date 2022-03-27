import { c } from "atomico";
import { RouterCase, RouterSwitch } from "@atomico/router";

import { Dashboard } from "./common/Dashboard";
import { Auth } from "./login/Auth";

const App = c(() => {
  return (
    <host>
      <RouterSwitch>
        <RouterCase path="/" element={Auth}></RouterCase>
        <RouterCase path="/dashboard" element={Dashboard}></RouterCase>
      </RouterSwitch>
    </host>
  );
});

customElements.define("mfa-app", App);
