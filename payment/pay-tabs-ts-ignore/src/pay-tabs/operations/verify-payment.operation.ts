import config from "config";
import * as unirest from "unirest";
import { TResponse } from "../interfaces";

/******************
 * Verify payment *
 *****************/
export type VerifyPaymentRequest = Record<
  "merchant_email" | "secret_key" | "payment_reference",
  string
>;
/*
+---------------+-----------------------------------------------+
| Response Code | Description                                   |
+---------------+-----------------------------------------------+
| 4001          | Variable not found                            |
| 4002          | Invalid Credentials                           |
| 0404          | You don’t have permissions                    |
| 400           | There are no transactions available.          |
| 100           | Payment is completed.                         |
| 481- 482      | This transaction is under review and          |
|               | be reversed based on your card issuing bank's |
|               | policy if its not approved within 24 hours    |
+---------------+-----------------------------------------------+ */
export interface VerifyPaymentResponse {
  result: string;
  response_code: "4001" | "4002" | "0404" | "400" | "100" | "481" | "482";
  pt_invoice_id: string;
  amount: number;
  currency: string;
  reference_no: string;
  transaction_id: string;
  card_brand?: string;
  card_first_six_digits?: string;
  card_last_four_digits?: string;
}

export async function verifyPayment(): Promise<
  TResponse<VerifyPaymentResponse>
> {
  const request: VerifyPaymentRequest = {
    payment_reference: "439769",
    secret_key: config.get("payments.secretKey"),
    merchant_email: config.get("payments.merchantEmail"),
  };

  return await unirest
    .post("https://www.paytabs.com/apiv2/verify_payment")
    .headers({ "Content-Type": "application/x-www-form-urlencoded" })
    .form(request);
}
