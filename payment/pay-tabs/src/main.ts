import { promisify } from 'util';
import { configs } from './config/config.service';

/*
Request promise
*/
import requestPromise from 'request-promise';
const rp = promisify(requestPromise);

async function init() {
  const res = await rp({
    method: 'POST',
    headers: {
      contentType: 'application/x-www-form-urlencoded',
    },
    url: 'https://www.paytabs.com/apiv2/create_pay_page',
    form: {
      merchant_email: configs.payment.merchantEmail,
      secret_key: configs.payment.secretKey,
      site_url: configs.payment.websiteUrl,
      return_url: 'https://www.yourwebsite.com/return',
      title: 'JohnDoe And Co.',
      cc_first_name: 'John',
      cc_last_name: 'Doe',
      cc_phone_number: '00973',
      phone_number: '123123123456',
      email: 'johndoe@example.com',
      products_per_title: 'MobilePhone || Charger || Camera',
      unit_price: '12.123 || 21.345 || 35.678 ',
      quantity: '2 || 3 || 1',
      other_charges: '12.123',
      amount: '136.082',
      discount: '10.123',
      currency: 'BHD',
      reference_no: 'ABC-123',
      ip_customer: '1.1.1.0',
      ip_merchant: '1.1.1.0',
      billing_address: 'Flat 3021 Manama Bahrain',
      city: 'Manama',
      state: 'Manama',
      postal_code: '12345',
      country: 'BHR',
      shipping_first_name: 'John',
      shipping_last_name: 'Doe',
      address_shipping: 'Flat 3021 Manama Bahrain',
      state_shipping: 'Manama',
      city_shipping: 'Manama',
      postal_code_shipping: '1234',
      country_shipping: 'BHR',
      msg_lang: 'English',
      cms_with_version: 'WordPress4.0-WooCommerce2.3.9',
    },
  });
  console.log('init -> res', res.body);
}
init();

/*
Follow redirects
*/
// import { https } from 'follow-redirects';
// import fs from 'fs';

// const options = {
//   method: 'GET',
//   hostname: 'http://www.google.com/',
//   // path: '/places?longitude=31.08987583017158&latitude=29.75428104400635',
//   headers: {
//     'accept-language': 'en',
//     // Authorization: 'Bearer {{admin_token2}}',
//   },
//   maxRedirects: 20,
// };

// https
//   .request(options, (res: any) => {
//     const chunks: Buffer[] = [];
//     res.on('data', (chunk: Buffer) => {
//       chunks.push(chunk);
//     });
//     res.on('end', (chunk: Buffer) => {
//       const body = Buffer.concat(chunks);
//       // tslint:disable-next-line: no-console
//       console.log(body.toString());
//     });
//     res.on('error', (error: Buffer) => {
//       // tslint:disable-next-line: no-console
//       console.error(error);
//     });
//   })
//   .end();

/*
request
*/
// import request, { Options } from 'request';
// export type RequestOptions<T = any> = Options & T;
// import config from '../config/default';
// import { TCreatePayPageRequest } from './interfaces/payment.interfaces';
// const r = promisify(request);

// async function init() {
//   try {
//     const opts: RequestOptions<{ body: TCreatePayPageRequest }> = {
//       method: 'POST',
//       url: 'https://www.paytabs.com/apiv2/create_pay_page',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       form: {
//         merchant_email: configs.payment.merchantEmail,
//         secret_key: configs.payment.secretKey,
//         site_url: 'https://www.yourwebsite.com',
//         return_url: 'https://www.yourwebsite.com/return',
//         title: 'JohnDoe And Co.',
//         cc_first_name: 'John',
//         cc_last_name: 'Doe',
//         cc_phone_number: '00973',
//         phone_number: '123123123456',
//         email: 'johndoe@example.com',
//         products_per_title: 'MobilePhone || Charger || Camera',
//         unit_price: '12.123 || 21.345 || 35.678 ',
//         quantity: '2 || 3 || 1',
//         other_charges: '12.123',
//         amount: '136.082',
//         discount: '10.123',
//         currency: 'BHD',
//         reference_no: 'ABC-123',
//         ip_customer: '1.1.1.0',
//         ip_merchant: '1.1.1.0',
//         billing_address: 'Flat 3021 Manama Bahrain',
//         city: 'Manama',
//         state: 'Manama',
//         postal_code: '12345',
//         country: 'BHR',
//         shipping_first_name: 'John',
//         shipping_last_name: 'Doe',
//         address_shipping: 'Flat 3021 Manama Bahrain',
//         state_shipping: 'Manama',
//         city_shipping: 'Manama',
//         postal_code_shipping: '1234',
//         country_shipping: 'BHR',
//         msg_lang: 'English',
//         cms_with_version: 'WordPress4.0-WooCommerce2.3.9',
//       },
//     };
//     request(opts, (error, res, body) => {
//       console.log({ error, res, body });
//     });
//     // const res = await r(opts);
//     // r(opts, (res: any): any => {
//     //   // tslint:disable-next-line: no-console
//     //   console.log(res);
//     // });
//     // console.log('init -> res.body', res);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// init();

/*
Paytabs plugin on NPM
*/
// const paytabs = require('paytabs_api');
// // import * as paytabs from 'paytabs_api';

// paytabs.createPayPage(
//   {
//     merchant_email: configs.payment.merchantEmail,
//     secret_key: configs.payment.secretKey,
//     currency: 'USD', // change this to the required currency
//     amount: '10', // change this to the required amount
//     site_url: configs.payment.websiteUrl, // change this to reflect your site
//     title: 'Order for Shoes', // Change this to reflect your order title
//     quantity: 1, // Quantity of the product
//     unit_price: 10, // Quantity * price must be equal to amount
//     products_per_title: 'Shoes | Jeans', // Change this to your products
//     return_url: '<YOUR SITE CALLBACK URL>', // This should be your callback url
//     cc_first_name: 'Samy', // Customer First Name
//     cc_last_name: 'Saad', // Customer Last Name
//     cc_phone_number: '00973', // Country code
//     phone_number: '12332323', // Customer Phone
//     billing_address: 'Address', // Billing Address
//     city: 'Manama', // Billing City
//     state: 'Manama', // Billing State
//     postal_code: '1234', // Postal Code
//     country: 'BHR', // Iso 3 country code
//     email: '<CUSTOMER EMAIL>', // Customer Email
//     ip_customer: '<CUSTOMER IP>', // Pass customer IP here
//     ip_merchant: '<MERCHANT IP>', // Change this to your server IP
//     address_shipping: 'Shipping', // Shipping Address
//     city_shipping: 'Manama', // Shipping City
//     state_shipping: 'Manama', // Shipping State
//     postal_code_shipping: '973',
//     country_shipping: 'BHR',
//     other_charges: 0, // Other chargs can be here
//     reference_no: 1234, // Pass the order id on your system for your reference
//     msg_lang: 'en', // The language for the response
//     cms_with_version: 'Nodejs Lib v1', // Feel free to change this
//   },
//   // Callback
//   (result: any) => {
//     if (result.response_code === 4012) {
//       // Redirect your merchant to the payment link
//       console.log(result.payment_url);
//     } else {
//       // Handle the error
//       console.log(result);
//     }
//   },
// );

/*
Request
*/
// import request from 'request';
// const r = promisify(request);

// // import * as request from 'request';
// async function init() {
//   const options = {
//     method: 'POST',
//     url: 'https://www.paytabs.com/apiv2/verify_payment',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     form: {
//       merchant_email: configs.payment.merchantEmail,
//       secret_key: configs.payment.secretKey,
//       payment_reference: '2124779',
//     },
//   };
//   const res = await r(options);
//   // res.toJSON();
//   // console.log('init -> res.toJSON()', res.toJSON());
//   // console.log('init -> res.json()', (res as any).json());
//   console.log('init -> res', JSON.parse(res.body));
//   // console.log(typeof body);
// }
// init();
