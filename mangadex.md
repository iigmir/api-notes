# [MangaDex](https://mangadex.org)

* [MangaDex API documentation](https://api.mangadex.org/docs)
* [Rate limits](https://api.mangadex.org/docs/2-limitations/#endpoint-specific-rate-limits)
* [Redoc](https://api.mangadex.org/docs/redoc.html)
* [Swagger](https://api.mangadex.org/docs/swagger.html)

## Example: [Entity Comments](https://api.mangadex.org/docs/01-concepts/comments)

Used API:

* [/statistics/manga/{uuid}](https://api.mangadex.org/docs/redoc.html#tag/Statistics/operation/get-statistics-manga-uuid): Get rating and comments for now.

### `threadId` in `/statistics/manga`

`statistics.{uuid}.comments.threadId`: Forum ID: `https://forums.mangadex.org/threads/{api.statistics.{uuid}.comments.threadId}`

> If it is `null`, the entity doesn't have a backing comments thread, and therefore has no comments yet.

## Example: [Search manga](https://api.mangadex.org/docs/03-manga/search/)

Used API:

* [/manga](https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-search-manga)
* [/manga/tag](https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-manga-tag)

To search "Eromanga", you shold type: `https://api.mangadex.org/manga?title=Eromanga` and you'll see:

```json
{
    "result":"ok",
    "response":"collection",
    "data":[{
        /* bypass */
    }],
    "limit": 10,
    "offset": 0,
    "total": 6
}
```

And now you can access `data` prop. Let's see the first example, [*Eromanga-Sensei*](https://mangadex.org/title/88a2312f-37ef-4ca1-bb98-c0891a50cac7):

```json
{
    "id": "88a2312f-37ef-4ca1-bb98-c0891a50cac7",
    "type": "manga",
    "attributes": {
        "title": {
            "en": "Eromanga-Sensei"
        },
        /* bypass */
    }
}
```