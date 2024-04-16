# [Blogger](https://www.blogger.com)

* <https://developers.google.com/blogger>
* <https://developers.google.com/blogger/docs/3.0/reference>

Like any APIs form Google, you must have a API key from [Google Developers](https://developers.google.com/blogger/docs/3.0/using#auth).

## Get info of a blog

To get the info of the blog when you only know the blog's website, you can use `blogs/byurl`.

For example,

> "https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://program-think.blogspot.com&key=API_KEY"

This returns:

```json
{
  "kind": "blogger#blog",
  "id": "5235590154125226279",
  "name": "编程随想的博客",
  "description": "",
  "published": "2009-01-15T21:48:23+08:00",
  "updated": "2024-04-16T10:42:58+08:00",
  "url": "http://program-think.blogspot.com/",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/5235590154125226279",
  "posts": {
    "totalItems": 712,
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts"
  },
  "pages": {
    "totalItems": 4,
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/pages"
  },
  "locale": {
    "language": "zh",
    "country": "CN",
    "variant": ""
  }
}
```

Now we know the blog's ID is `5235590154125226279` and we can retrive their blog posts and pages by given API.

## Get info of a user

You get the user's info by calling the .

Besides API key, you also need [OAuth token](https://developers.google.com/identity/protocols/oauth2) which is another complicated subject there. See [Authorizing requests and identifying your application](https://developers.google.com/blogger/docs/3.0/using#auth) for details.

> https://www.googleapis.com/blogger/v3/users/self/blogs
Authorization: /* OAuth 2.0 token here */

[Alas.](https://github.com/google/google-api-javascript-client)

## Hello
