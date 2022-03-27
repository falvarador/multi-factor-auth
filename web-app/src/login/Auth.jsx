import { c, useState } from "atomico";
import { redirect } from "@atomico/hooks/use-router";

import { Login } from "./Login";
import { VerificationCode } from "./VerificationCode";

import { Utilities } from "../../../core-app/src/SharedKernel/Helpers/Utilities";
import { LoginService } from "../../../core-app/src/login/services/LoginService";

export const Auth = c(() => {
  const _loginService = new LoginService();

  const [code, setCode] = useState(0);

  const sendVerificationCode = (email) => {
    const newCode = Utilities.generateRandomCode();

    setCode(newCode);

    _loginService.sendTemporalCode(email, newCode);
  };

  const validateVerificationCode = () => {
    if (code != code) {
      alert("¡El código ingresado es incorrecto!");
      return;
    }

    setCode(0);

    redirect("/dashboard");
  };

  return (
    <host>
      {code === 0 ? (
        <Login processRequest={sendVerificationCode}></Login>
      ) : (
        <VerificationCode
          processRequest={validateVerificationCode}
        ></VerificationCode>
      )}
    </host>
  );
});

customElements.define("mfa-auth", Auth);
