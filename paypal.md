# [PayPal](https://paypal.com)

* <https://developer.paypal.com>
* <https://developer.paypal.com/docs/api>

You must have a Paypal account and obtain their client ID and client secret ID, and use them to obtain [OAuth access token](https://developer.paypal.com/api/rest/#link-getaccesstoken) and req request all other APIs by attaching on the `Authorization` header.

## [Integration Builder](https://developer.paypal.com/integration-builder)

Sadly I am Taiwanese, so I can't give useful notes as it shows: `Integration Builder is currently available in US only. We will be expanding this tool globally shortly.`

But we can still use their API.

## Sandbox account

Here, you need some test accounts from: [Sandbox test accounts](https://developer.paypal.com/dashboard/accounts/).  
Also, see [Card testing](https://developer.paypal.com/api/rest/sandbox/card-testing/).

## [JavaScript SDK](https://developer.paypal.com/sdk/js)

You need at least one param: [`client-id`](https://developer.paypal.com/sdk/js/configuration/#link-clientid). There are two params provided in the example repo:

1. [`currency`](https://developer.paypal.com/sdk/js/configuration/#link-currency)
2. [`intent`](https://developer.paypal.com/sdk/js/configuration/#link-intent)
3. [`enable-funding`](https://developer.paypal.com/sdk/js/configuration/#link-enablefunding)

Finally, add the `https://www.paypal.com/sdk/js` SDK like: `https://www.paypal.com/sdk/js?client-id=${client-id}&enable-funding=${enable-funding}&currency=${currency}&intent=${intent}`.

## API

The API used to order in the example repo is `/checkout/orders`.

### [`/checkout/orders`](https://developer.paypal.com/docs/api/orders/v2/#orders_create)

At least `intent` and `purchase_units` are needed. `purchase_units` is an array with some orders:

```json
{
    "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b",
    "description": "Order",
    "amount": {
        "currency_code": "USD",
        "value": "100.00"
    }
}
```

[`intent`](https://developer.paypal.com/docs/api/orders/v2/#orders_create!path=intent&t=request) can decide whether the payment should be immediately (`CAPTURE`) or authorised by the owner (`AUTHORIZE`) after the order is created.

Then, use [`/v2/checkout/orders/{id}/capture`](https://developer.paypal.com/docs/api/orders/v2/#orders_capture) or [`/v2/checkout/orders/{id}/authorize`](https://developer.paypal.com/docs/api/orders/v2/#orders_authorize) to confirm the order.

## References

* [How to Integrate PayPal Standard Checkout - YouTube](https://www.youtube.com/watch?v=MBfJEUGNNs0)
* [GitHub - paypaldev/PayPal-Standard-Checkout-Tutorial: PayPal Standard Checkout Tutorial](https://github.com/paypaldev/PayPal-Standard-Checkout-Tutorial)
