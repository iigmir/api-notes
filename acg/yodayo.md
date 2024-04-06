# [Yodayo](https://yodayo.com)

The API is NOT a public API. I am surprised that they use cookie instead of Authorization.

## [Tavern](https://yodayo.com/tavern/) /v1 API

### /chats

```json
{
    "uuid": "",
    "characters": [{
        "uuid": "",
        "name": "",
        "description": "",
        "deleted": false,
        "char_greeting": "",
        "thumbnail_photo": {
            "uuid": "",
            "url": "",
            "width": 0,
            "height": 0
        },
        "character_state": "",
        "created_user_uuid": "",
        "creator_type": "",
        "creator_name": "",
        "visibility": "",
        "comments": 0,
        "photos": [],
        "background_photos": []
    }],
    "user_persona_enabled": null,
    "created_at": "",
    "updated_at": ""
}
```

List all chats they used. The most important one is `uuid` at the first layer that can be used in `/chats/{uuid}/messages`.

`thumbnail_width` and `limit` as query string params are used.

### /chats/{uuid}/messages

`offset_uuid` and `limit` as query string params are used.

The `offset_uuid` param is from each item's `uuid` of the API response. For example,

```json
[
    { "uuid": "a" },
    { "uuid": "b" },
    { "uuid": "c" },
    { "uuid": "d" },
    /* ...... */
]
```

If your `offset_uuid` is `b`, the API starts from the chat with the `b` uuid:


```json
[
    { "uuid": "b" },
    { "uuid": "c" },
    { "uuid": "d" },
    /* ...... */
]
```