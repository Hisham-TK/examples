// import * as unirest from "unirest";
// import config from "config";
// import { TResponse } from "./pay-tabs/interfaces";
// import * as dns from "dns";
// import * as Url from "url";
// import * as util from "util";

import { createPaymentPage } from "./pay-tabs/operations/create-pay-page.operation";
import { verifyPayment } from "./pay-tabs/operations/verify-payment.operation";
import { refund } from "./pay-tabs/operations/refund.operation";
import { validateSecretKey } from "./pay-tabs/operations/verify-secret-key.operation";

async function init() {
  // {
  //   const { error, body } = await validateSecretKey();
  //   console.log(error, body);
  // }
  {
    const { error, body } = await createPaymentPage();
    // We can tokenize or authorize from create payment page
    console.log(error, body);
  }
  {
    // const { error, body } = await verifyPayment();
    // console.log(error, body);
  }
  // {
  //   const { error, body } = await refund();
  //   console.log(error, body);
  // }
}
init();
