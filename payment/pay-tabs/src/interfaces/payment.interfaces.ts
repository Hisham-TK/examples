export type TCreatePayPageRequest = Record<
  | 'merchant_email'
  | 'secret_key'
  | 'site_url'
  | 'return_url'
  | 'title'
  | 'cc_first_name'
  | 'cc_last_name'
  | 'cc_phone_number'
  | 'phone_number'
  | 'email'
  | 'products_per_title'
  | 'unit_price'
  | 'quantity'
  | 'other_charges'
  | 'amount'
  | 'discount'
  | 'currency'
  | 'reference_no'
  | 'ip_customer'
  | 'ip_merchant'
  | 'billing_address'
  | 'city'
  | 'state'
  | 'postal_code'
  | 'country'
  | 'shipping_first_name'
  | 'shipping_last_name'
  | 'address_shipping'
  | 'state_shipping'
  | 'city_shipping'
  | 'postal_code_shipping'
  | 'country_shipping'
  | 'msg_lang'
  | 'cms_with_version',
  string
>;
