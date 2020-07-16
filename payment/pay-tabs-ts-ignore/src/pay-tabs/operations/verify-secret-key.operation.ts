import { TResponse } from "../interfaces";
import config from "config";
import * as unirest from "unirest";

/*********************
 * Verify secret key *
 ********************/
export type VerifySecretKeyRequest = Record<
  "merchant_email" | "secret_key",
  string
>;
/*
+---------------+------------------------------------------------+
| Response Code | Description                                    |
+---------------+------------------------------------------------+
| 4000          | Valid Secret Key                               |
| 4001          | missing secret_key or merchant_email parameter |
| 4002          | Invalid Secret Key                             |
+---------------+------------------------------------------------+ */
export interface VerifySecretKeyResponse {
  result: "valid" | "invalid";
  response_code: "4000" | "4001" | "4002";
}

export async function validateSecretKey(): Promise<
  TResponse<VerifySecretKeyResponse>
> {
  const request: VerifySecretKeyRequest = {
    merchant_email: config.get("payments.merchantEmail"),
    secret_key: config.get("payments.secretKey"),
  };
  return await unirest
    .post("https://www.paytabs.com/apiv2/validate_secret_key")
    .headers({ "Content-Type": "application/x-www-form-urlencoded" })
    .form(request);
}
