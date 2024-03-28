# [VNDB](https://vndb.org): The visual novel database

* [Kana](https://api.vndb.org/kana)

## The `image` field

You must provide a more specific object prop for the `image` field.

* <https://api.vndb.org/kana#vn-fields>

image
    Object, can be null. 
image.id
    String, image identifier. 
image.url
    String. 
image.dims
    Pixel dimensions of the image, array with two integer elements indicating the width and height. 
image.sexual
    Number between 0 and 2 (inclusive), average image flagging vote for sexual content. 
image.violence
    Number between 0 and 2 (inclusive), average image flagging vote for violence. 
image.votecount
    Integer, number of image flagging votes. 

## [Database Querying](https://api.vndb.org/kana#database-querying) notes

### Request

```json
{
    "filters": [],
    "fields": "",
    "sort": "id",
    "reverse": false,
    "results": 10,
    "page": 1,
    "user": null,
    "count": false,
    "compact_filters": false,
    "normalized_filters": false
}
```

### Response

```json
{
    "results": [],
    "more": false,
    "count": 1,
    "compact_filters": "",
    "normalized_filters": [],
}
```

### Filters

Format: `[name, operator, value ]`

`["id", "=", "v2024"]`

## GET `/schema`

API endpoints.

## GET `/stats`

VNDB statistics.

```json
{
  "chars": 1,
  "producers": 1,
  "releases": 1,
  "staff": 1,
  "tags": 1,
  "traits": 1,
  "vn": 1
}
```

## GET `/user`

`https://api.vndb.org/kana/user?q=AYO`
`curl 'https://api.vndb.org/kana/user?q=yorhel&fields=lengthvotes,lengthvotes_sum'`

* `q`: User account
* `fields`: You can ask the API return `id`, `username`, `lengthvotes`, and `lengthvotes_sum`. Sperate with `,`.

## POST [`/vn`](https://api.vndb.org/kana#post-vn)

```js
const datas = {
    "filters": ["id", "=", "v190"],
    "fields": "title, image.url"
};
fetch("https://api.vndb.org/kana/vn", {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datas),
    method: "POST",
})
```

## POST [`/character`](https://api.vndb.org/kana#post-character)

```js
const datas = {
    "filters": ["id", "=", "c190"],
    "fields": "id, name, original, bust, waist, hips, cup"
};
fetch("https://api.vndb.org/kana/character", {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datas),
    method: "POST",
})
```

<!-- https://vndb.org/c190 -->
