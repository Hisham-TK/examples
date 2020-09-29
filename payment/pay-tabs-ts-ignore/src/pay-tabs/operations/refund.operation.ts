import { TResponse } from "../interfaces";
import config from "config";
import * as unirest from "unirest";

/**********
 * Refund *
 *********/
export type RefundRequest = Record<
  | "merchant_email"
  | "secret_key"
  | "refund_reason"
  | "transaction_id"
  | "order_id",
  string
> & { refund_amount: number };
/*
+---------------+----------------------------------------------------------------+
| Response Code | Description                                                    |
+---------------+----------------------------------------------------------------+
| 4001          | Missing parameters                                             |
| 4002          | Invalid Credentials                                            |
| 810           | You already requested Refund for this Transaction ID           |
| 811           | Refund amount you requested is greater than transaction amount |
| 812           | Refund request is sent to Operation for Approval.              |
|               | You can track the Status on Merchant Dashboard.                |
| 813           | You are not authorized to view this transaction                |
| 814           | Refund request is processed.                                   |
+---------------+----------------------------------------------------------------+ */
export interface RefundResponse {
  result: string;
  response_code: "4001" | "4002" | "810" | "811" | "812" | "813" | "814";
  refund_request_id: number;
}

export async function refund(): Promise<TResponse<RefundResponse>> {
  const request: RefundRequest = {
    merchant_email: config.get("payments.merchantEmail"),
    secret_key: config.get("payments.secretKey"),
    refund_reason: "User cancel the order",
    order_id: "438839",
    transaction_id: "481655",
    refund_amount: 100,
  };

  return await unirest
    .post("https://www.paytabs.com/apiv2/refund_process")
    .headers({ "Content-Type": "application/x-www-form-urlencoded" })
    .form(request);
}
