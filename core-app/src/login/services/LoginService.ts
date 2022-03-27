import { HttpHelper } from "../../SharedKernel/Helpers/HttpHelper";
import { Options } from "../../SharedKernel/Models/Types/Options";

export class LoginService {
  constructor() {}

  sendTemporalCode(email: string, code: string): void {
    const httpHelper = HttpHelper();

    httpHelper.httpPost(`https://formsubmit.co/ajax/${email}`, {
      body: {
        subject: "Solicitud de acceso.",
        message: `Se ha generado una solicitud de acceso con el siguiente código de acceso temporal: ${code}`,
      } as object,
      time: 10000,
    } as Options);
  }
}
