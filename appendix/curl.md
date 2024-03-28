# [cURL](https://curl.se)

## How to create a HTTP request on cURL

To make a cURL POST request, you can follow these steps:
    Open a terminal window.
    Type the following command to send a POST request with cURL:

curl -X POST <url> -d "<data>"

Replace <url> with the URL of the API endpoint you want to send the request to, and <data> with the data you want to send in the request body. If your data contains special characters or spaces, you may need to enclose it in quotes.

Hit enter to execute the command.

For example, if you want to send a POST request to https://example.com/api with the data {"name": "John", "age": 30}, you would use the following command:

curl -X POST https://example.com/api -d '{"name": "John", "age": 30}'

This will send the POST request to the specified URL with the specified data in the request body.

---

## How to obtain request headers?

curl -H "Content-Type: application/json" "https://www.example.com/api"
curl -H "Content-Type: application/json" -H "Accept: application/json" "https://www.example.com"

