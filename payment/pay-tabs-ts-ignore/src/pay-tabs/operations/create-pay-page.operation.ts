import { TResponse } from "../interfaces";
import * as util from "util";
import Url from "url";
import config from "config";
import * as dns from "dns";
import * as unirest from "unirest";

/*******************
 * Create pay page *
 ******************/
export type CreatePayPageRequest = Record<
  | "merchant_email"
  | "secret_key"
  | "site_url"
  | "return_url"
  | "title"
  | "cc_first_name"
  | "cc_last_name"
  | "cc_phone_number"
  | "phone_number"
  | "email"
  | "products_per_title"
  | "unit_price"
  | "quantity"
  | "currency"
  | "reference_no"
  | "ip_customer"
  | "ip_merchant"
  | "billing_address"
  | "city"
  | "state"
  | "postal_code"
  | "country"
  | "shipping_first_name"
  | "shipping_last_name"
  | "address_shipping"
  | "state_shipping"
  | "city_shipping"
  | "postal_code_shipping"
  | "country_shipping"
  | "msg_lang"
  | "cms_with_version",
  string
> &
  Record<"other_charges" | "amount" | "discount", number> & {
    payment_type?:
      | "creditcard"
      | "sadad"
      | "mada"
      | "stcpay"
      | "stcpayqr"
      | "valu"
      | "atfawry"
      | "knpay"
      | "omannet"
      | "amex"
      | "applepay";

    // Tokenization using API
    is_tokenization?: "TRUE"; // Set this value as TRUE (Case Sensitive) if you wish to create tokenization profile for customer or use an existing token
    is_existing_customer?: "TRUE" | "FALSE"; //	FALSE (Case sensitive): If you want to create a new token
    // += Create Payment page using an existing token – (Returning customer)
    pt_customer_email?: string | "TRUE"; // Set this value as TRUE (Case Sensitive) if you wish to create tokenization profile for customer or use an existing token
    pt_customer_password?: string; // The variable you received in the post response during the redirection to the return_url after successful payment with new token created
    pt_token?: string; // The variable you received in the post response during the redirection to the return_url after successful payment with new token created

    // Pre-Authorization using API
    is_preauth?: 1; // Boolean	Pass 1, if you wish to authorize the transaction only without capturing it.

    hide_billing?: boolean;
  };
/* 
+---------------+-----------------------------------------------------------------------------------+
| Response Code | Description                                                                       |
+---------------+-----------------------------------------------------------------------------------+
| 4001          | Variable not found                                                                |
| 4002          | Invalid Credentials                                                               |
| 4007          | 'currency' code used is invalid. Only 3 character ISO currency codes are valid    |
| 4008          | Your SITE URL is not matching with your profile URL                               |
| 4012          | PayPage created successfully                                                      |
| 4013          | Your 'amount' post variable should be between 0.27 and 5000.00 USD                |
| 4014          | Products titles, Prices, quantity are not matching                                |
| 4094          | Your total amount is not matching with the sum of unit price amounts per quantity |
| 4404          | You don't have permissions to create an Invoice                                   |
+---------------+-----------------------------------------------------------------------------------+ */
export interface CreatePayPageResponse {
  result: string;
  response_code:
    | "4001"
    | "4002"
    | "4007"
    | "4008"
    | "4012"
    | "4013"
    | "4014"
    | "4094"
    | "4404";
  payment_url: string;
  p_id?: number;
}

export async function createPaymentPage(): Promise<
  TResponse<CreatePayPageResponse>
> {
  const opts = {
    serverIp: (
      await util.promisify(dns.resolve4)(
        new Url.URL(config.get("payments.baseRedirectUrl")).host
      )
    )[0],
    clientIp: "156.212.146.56",
  };
  const user: any = {
    name: "Hisham Taha",
    phone: "+201223467708",
    // phone: "00966512345678",
  };

  const request: CreatePayPageRequest = {
    merchant_email: config.get("payments.merchantEmail"),
    secret_key: config.get("payments.secretKey"),
    site_url: config.get("payments.websiteUrl"),
    return_url:
      config.get("payments.baseRedirectUrl") + "payments/payReferenceCb",

    // products_per_title: "One-day Tickets || Multi-day Tickets || VIP Tickets",
    // unit_price: "12.123 || 21.345 || 35.678",
    // quantity: "2 || 3 || 1",
    // other_charges: 12.123,
    // amount: 136.082,
    // discount: 10.123,
    products_per_title: "MobilePhone",
    unit_price: "12",
    quantity: "1",
    other_charges: 0,
    amount: 12,
    discount: 0,

    title: "Events Client - Buy tickets",
    cc_phone_number: /^(\+|00)966/.test(user.phone) ? "20" : "966",
    phone_number: user.phone.replace(/^(\+|00)(20|966)/, ""),
    email: user.email || "optional@mail.com",
    currency: "SAR", // USD | AED | SAR
    reference_no: "ABC-123",
    ip_customer: opts.clientIp,
    ip_merchant: opts.serverIp,
    country: "SAU", // ARE | SAU | USA | EGY
    cc_first_name: user.name,
    cc_last_name: "optional",
    billing_address: "optional",
    city: "optional",
    state: "optional",
    postal_code: "optional",
    country_shipping: "SAU", // ARE | SAU | USA | EGY
    shipping_first_name: "optional",
    shipping_last_name: "optional",
    address_shipping: "optional",
    state_shipping: "optional",
    city_shipping: "optional",
    postal_code_shipping: "optional",
    msg_lang: "English", // English | Arabic
    cms_with_version: "optional", // like: 'WordPress4.0-WooCommerce2.3.9'

    payment_type: "applepay",

    // is_tokenization: "TRUE",
    // is_existing_customer: "TRUE",
    // is_existing_customer: "FALSE",

    // pt_customer_email:'optional@mail.com', // 5200000000000114 /* without 3d secure */
    // pt_customer_password: '1z53CGATYn',
    // pt_token: 'WL9NVzJoyivaMQRRUVr4ztEFwgl6akt7'

    // pt_customer_email:'optional@mail.com', // 4000000000000002 /* with 3d secure */
    // pt_customer_password: 'DKSW0KbTEc',
    // pt_token: 'uqmhpTKk1pupi3x4dxk89YT1VTL6Nqih'

    // payment_type: "applepay", /* Don't work for test account */
    // is_preauth: 1, /* Don't work for test account */

    hide_billing: true,
  };

  return await unirest
    .post("https://www.paytabs.com/apiv2/create_pay_page")
    .headers({ "Content-Type": "application/x-www-form-urlencoded" })
    .form(request);
}
