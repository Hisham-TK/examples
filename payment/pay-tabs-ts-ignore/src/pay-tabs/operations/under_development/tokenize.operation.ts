import { TResponse } from "../../interfaces";
import config from "config";
import * as unirest from "unirest";
/**********
 * Tokenize *
 *********/
export type TokenizeRequest = Record<
  | "merchant_email"
  | "secret_key"
  | "title"
  | "cc_first_name"
  | "cc_last_name"
  | "order_id"
  | "product_name"
  | "customer_email"
  | "phone_number"
  | "currency"
  | "address_billing"
  | "state_billing"
  | "city_billing"
  | "postal_code_billing"
  | "country_billing"
  | "address_shipping"
  | "city_shipping"
  | "state_shipping"
  | "postal_code_shipping"
  | "country_shipping"
  | "pt_token"
  | "pt_customer_email"
  | "pt_customer_password",
  string
> & {
  billing_shipping_details?: string;
  "is-preauth"?: string;
  amount: number;
};
/*
+---------------+----------------------------------------------------------------+
| Response Code | Description                                                    |
+---------------+----------------------------------------------------------------+
| 4001          | Missing parameters                                             |
| 4002          | Invalid Credentials                                            |
| 810           | You already requested Tokenize for this Transaction ID           |
| 811           | Tokenize amount you requested is greater than transaction amount |
| 812           | Tokenize request is sent to Operation for Approval.              |
|               | You can track the Status on Merchant Dashboard.                |
| 813           | You are not authorized to view this transaction                |
| 814           | Tokenize request is processed.                                   |
+---------------+----------------------------------------------------------------+
*/
export interface TokenizeResponse {
  response_code: "4001" | "4002" | "810" | "811" | "812" | "813" | "814";
  result: string;
  transaction_id: number;
}

export async function tokenizeTransactionPrepare(): Promise<
  TResponse<TokenizeResponse>
> {
  const request: TokenizeRequest = {
    merchant_email: config.get("payments.merchantEmail"),
    secret_key: config.get("payments.secretKey"),
    address_billing: "optional",
    address_shipping: "optional",
    amount: 100,
    cc_first_name: "optional",
    cc_last_name: "optional",
    city_billing: "optional",
    city_shipping: "optional",
    country_billing: "optional",
    country_shipping: "optional",
    currency: "optional",
    customer_email: "optional",
    order_id: "optional",
    phone_number: "optional",
    postal_code_billing: "optional",
    postal_code_shipping: "optional",
    product_name: "optional",
    pt_customer_email: "optional",
    pt_customer_password: "optional",
    pt_token: "optional",
    state_billing: "optional",
    state_shipping: "optional",
    title: "optional",
    "is-preauth": "optional",
    billing_shipping_details: "optional",
  };
  return await unirest
    .post("https://www.paytabs.com/apiv3/tokenized_transaction_prepare")
    .headers({ "Content-Type": "application/x-www-form-urlencoded" })
    .form(request);
}
