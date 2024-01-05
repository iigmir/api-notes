---
name: Pocket
site: https://getpocket.com
api-site: https://getpocket.com/developer
free-authentication: false
free-price: true
---

# [Pocket](https://getpocket.com)

* [Welcome to the Pocket API](https://getpocket.com/developer)
* [Pocket Authentication API Documentation](https://getpocket.com/developer/docs/authentication)

You must have an account and [obtain an API token](https://getpocket.com/developer/apps/new) for `consumer_key`.

There are three APIs there (`/v3/add`, `/v3/send`, `/v3/get`) and two parameters required:

* `consumer_key`: An access token for developers.
* `access_token`: An access token for clients.

To obtain `access_token`, use `/v3/oauth/request`.

## `/v3/oauth/request`

Use `X-Accept: application/json` to return a JSON response.

### Request

* `consumer_key`: An access token for developers.
* `redirect_uri`

### Response

* `code`: The request token supplied in the code field of the `/v3/oauth/request` call.

## `/v3/oauth/authorize`

### Request

* `consumer_key`: An access token for developers.
* `code`: The request token supplied in the code field of the `/v3/oauth/request` call.

## `/v3/add`
## `/v3/send`
## `/v3/get`

