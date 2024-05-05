# [Blogger/Blogspot](https://www.blogger.com)

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

Hint: `selfLink` can help you to access the extract resource if you are tired of assembling URL resources.

## Get a post

Usually, we get posts from the `/blogs/{blogId}/posts` API by resources from the `/blogs/{blogId}/posts` API.

> <https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts?key=API_KEY>

```json
{
    "kind": "blogger#postList",
    "nextPageToken": "CgkIChjjsL70yTEQidmVCBgA",
    "items": [
        {
            "kind": "blogger#post",
            "id": "329569519001390000",
            "blog": {
                "id": "5235590154125226279"
            },
            "published": "2021-05-09T23:43:00+08:00",
            "updated": "2021-05-09T23:54:20+08:00",
            "url": "http://program-think.blogspot.com/2021/05/share-books.html",
            "selfLink": "https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts/329569519001390000",
            "title": "分享各类电子书（政治、IT、科普、历史、等，97本）",
            "content": " (elided for readability) ",
            "author": {
                "id": "11741356469378252621",
                "displayName": "编程随想",
                "url": "https://www.blogger.com/profile/11741356469378252621",
                "image": {
                    "url": "//1.bp.blogspot.com/-_5va5DafROs/VtcrFXMaY_I/AAAAAAAABU4/lQWoB9z4jaI/s35/Thinker.jpg"
                }
            },
            "replies": {
                "totalItems": "880",
                "selfLink": "https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts/5467820871462842098/comments"
            },
            "labels": [
                "时事评论",
                "政治",
                "转载"
            ],
            "etag": "\"dGltZXN0YW1wOiAxNjIwNTUwMTE0MjIzCm9mZnNldDogMjg4MDAwMDAK\""
        },
        //  (elided for readability) 
    ],
    "etag": "\"MjAyNC0wNC0xNVQwODoyMToyMy4yMDBa\""
}
```

If we want to access the [分享各类电子书（政治、IT、科普、历史、等，97本）](http://program-think.blogspot.com/2021/05/share-books.html) article here, we call `https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts/329569519001390000` here.

If you want to access from URL link, use `/blogs/{blogId}/posts/bypath` instead.

> <https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts/bypath?path=/2018/09/Book-Review-The-Errors-of-Marxism-Leninism.html&key=API_KEY>

```json
{
    "kind": "blogger#post",
    "id": "4808108558381001532",
    "blog": {
        "id": "5235590154125226279"
    },
    "published": "2018-09-21T23:56:00+08:00",
    "updated": "2020-12-07T12:34:02+08:00",
    "url": "http://program-think.blogspot.com/2018/09/Book-Review-The-Errors-of-Marxism-Leninism.html",
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts/4808108558381001532",
    "title": "为什么马克思是错的？——全面批判马列主义的知名著作导读",
    "content": " (elided for readability) ",
    "author": {
        "id": "11741356469378252621",
        "displayName": "编程随想",
        "url": "https://www.blogger.com/profile/11741356469378252621",
        "image": {
            "url": "//1.bp.blogspot.com/-_5va5DafROs/VtcrFXMaY_I/AAAAAAAABU4/lQWoB9z4jaI/s35/Thinker.jpg"
        }
    },
    "replies": {
        "totalItems": "404",
        "selfLink": "https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts/4808108558381001532/comments"
    },
    "labels": [
        "经济",
        "书评/影评",
        "政治",
        "政治.共产运动"
    ],
    "etag": "\"dGltZXN0YW1wOiAxNjA3MzE1NjQyNTc1Cm9mZnNldDogMjg4MDAwMDAK\""
}
```

## The pagination thing

We use `nextPageToken` attached in list resources to get the next page and `prevPageToken` for the previous page. To use the token, attach it as `pageToken` on your request.

For example, if `nextPageToken` as page 2 is `CgkIFBCAjIKalS8Qp-Kq8Zewo9RIGLCX_-azt7fJBCAA` in the `/5235590154125226279/posts/329569519001390000/comments` resource, we call `https://www.googleapis.com/blogger/v3/blogs/5235590154125226279/posts/329569519001390000/comments?pageToken=CgkIFBCAjIKalS8Qp-Kq8Zewo9RIGLCX_-azt7fJBCAA&key=API_KEY` to get the second page.

The `/posts/search/` API [ignores](https://stackoverflow.com/a/58015479) the `pageToken` param. Welp.

## Get info of a user

You get the user's info by calling the .

Besides API key, you also need [OAuth token](https://developers.google.com/identity/protocols/oauth2) which is another complicated subject there. See [Authorizing requests and identifying your application](https://developers.google.com/blogger/docs/3.0/using#auth) for details.

> <https://www.googleapis.com/blogger/v3/users/self/blogs>
> Authorization: /* OAuth 2.0 token here */

[Alas.](https://github.com/google/google-api-javascript-client)

## API endpoints under the `/blogs/{blogId}` resource for retriving

The API follows [REST](https://developers.google.com/blogger/docs/3.0/getting_started#JSONP) makes things easier.

* `/posts` (`/blogs/{blogId}/posts`)
    * `/{postId}` (`/blogs/{blogId}/posts/{postId}`)
        * `/comments` (`/blogs/{blogId}/posts/{postId}/comments`)
            * `/{commentId}` (`/blogs/{blogId}/posts/{postId}/comments/{commentId}`)
    * `/bypath?path={post-path}` (`/blogs/{blogId}/posts/bypath?path={post-path}`)
    * `/search?q={query terms}` (`/blogs/{blogId}/posts/search={post-path}`)
* `/pages` (`/blogs/{blogId}/pages`)
    * `/{pageId}` (`/blogs/{blogId}/pages/{pageId}`)
* `/pageviews` (`/blogs/{blogId}/pageviews`)
