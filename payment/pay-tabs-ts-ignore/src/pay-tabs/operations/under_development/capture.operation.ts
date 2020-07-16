import { RequireOnlyOne } from "../../../types/requireOnlyOne";

export type CaptureOrVoidRequest = {
  merchant_email: string;
  secret_key: string;
  transaction_id: string;
} & RequireOnlyOne<{
  capture_amount?: string; // Pass the amount you want to capture, you can either pass the full authorized amount or a partial amount. Pass this value as 0 in case you want to void the transaction. Note: You can do multiple partial captures till the full amount is captured.
  void_transaction?: "1"; // Pass this value as 1 in case you want to reverse the authorized transaction
}>;

export type CaptureOrVoidResponse = {
  merchant_email: string;
  secret_key: string;
  transaction_id: string;
} & RequireOnlyOne<{
  capture_amount?: string; // Pass the amount you want to capture, you can either pass the full authorized amount or a partial amount. Pass this value as 0 in case you want to void the transaction. Note: You can do multiple partial captures till the full amount is captured.
  void_transaction?: "1"; // Pass this value as 1 in case you want to reverse the authorized transaction
}>;