import * as config from "config";

/******************************
 * Verify transaction payment *
 *****************************/
export type VerifyTransactionPaymentRequest = Record<
  "merchant_email" | "secret_key" | "payment_reference" | 'order_id',
  string
>;
/* 
+---------------+-------------------------------------------------------------------------------+
| Response Code | Description                                                                   |
+---------------+-------------------------------------------------------------------------------+
| 4001          | Missing parameters                                                            |
| 4002          | Invalid Credentials                                                           |
| 4003          | There are no transactions available                                           |
| 0404          | You don’t have permissions                                                    |
| 100           | Payment is completed Successfully                                             |
| 481           | This transaction may be suspicious, your bank holds for further confirmation. |
|               | Payment Provider has rejected this transaction due to suspicious activity;    |
|               | Your bank will reverse the dedicated amount to your card as per their policy  |
+---------------+-------------------------------------------------------------------------------+ */
export interface VerifyTransactionPaymentResponse {
  result: string;
  response_code: "4001" | "4002" | "4003" | "0404" | "100" | "481";
  amount: string;
  currency: string;
  transaction_id: string;
  order_id: string;
  pt_invoice_id: string;
  card_last_four_digits: string;
}
