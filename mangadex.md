# [MangaDex](https://mangadex.org)

* [MangaDex API documentation](https://api.mangadex.org/docs)
* [Rate limits](https://api.mangadex.org/docs/2-limitations/#endpoint-specific-rate-limits)
* [Redoc](https://api.mangadex.org/docs/redoc.html)
* [Swagger](https://api.mangadex.org/docs/swagger.html)
* TypeScript: `typescript/mangadex.ts`

## Introduction

As a manga app, there are three action you usually do:

1. Searching the manga.
2. Searching the chapter.
3. Reading the manga.

Fortunatelly, three are three entries for the actions there:

1. [Search manga](https://api.mangadex.org/docs/03-manga/search) for searching the manga.
2. [Searching for chapters](https://api.mangadex.org/docs/04-chapter/search) for searching the chapter.
3. [Retrieving a chapter's images](https://api.mangadex.org/docs/04-chapter/retrieving-chapter/) for reading the manga.

## Example: [Search manga](https://api.mangadex.org/docs/03-manga/search)

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

How about `/manga/tag`? Well, it is something like this:

```json
{
    "id": "0234a31e-a729-4e28-9d6a-3f87c4966b9e",
    "type": "tag",
    "attributes": {
        "name": {
            "en": "Oneshot"
        },
        "description": {},
        "group": "format",
        "version": 1
    },
    "relationships": []
}
```

## Example: [Searching for chapters](https://api.mangadex.org/docs/04-chapter/search)

Used API:

* [/manga/{id}/feed](https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-manga-id-feed)

---

Combining with [Search manga](https://api.mangadex.org/docs/03-manga/search), you can retrive manga chapters.

Now that we got the ID of *Eromanga-Sensei*, which is `88a2312f-37ef-4ca1-bb98-c0891a50cac7`, let's get chapters from the [API](https://api.mangadex.org/manga/88a2312f-37ef-4ca1-bb98-c0891a50cac7/feed):

```json
{
    "result":"ok",
    "response":"collection",
    "data":[{}],
    "limit":100,
    "offset":0,
    "total":252
}
```

100 in 252! What should we do?

1. Go to next page: `https://api.mangadex.org/manga/88a2312f-37ef-4ca1-bb98-c0891a50cac7/feed?offset=100`
2. Limit the language to Engish: `https://api.mangadex.org/manga/88a2312f-37ef-4ca1-bb98-c0891a50cac7/feed?translatedLanguage[]=en`

Let's limit the language Engish:

```json
{
    "result":"ok",
    "response":"collection",
    "data":[{}],
    "limit":100,
    "offset":0,
    "total":82
}
```

That's good.

## Example: [Retrieving a chapter's images](https://api.mangadex.org/docs/04-chapter/retrieving-chapter/)

Used API:

* [/at-home/server/{chapterId}](https://api.mangadex.org/docs/redoc.html#tag/AtHome/operation/get-at-home-server-chapterId)

---

And now, here's the most important part: Manga. How to get them? Well, when we [searching for chapters](https://api.mangadex.org/docs/04-chapter/search), we get each chapter:

```json
{
    "id": "40e7e8a4-155c-4b1b-be7e-eb11f8f76f03",
    "type": "chapter",
    "attributes": {
        "volume": "8",
        "chapter": "50",
        "title": "Eromanga-sensei VS Eromanga-sensei G Epilogue",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2020-02-27T19:46:42+00:00",
        "readableAt": "2020-02-27T19:46:42+00:00",
        "createdAt": "2020-02-27T19:46:42+00:00",
        "updatedAt": "2020-02-27T19:46:42+00:00",
        "pages": 30,
        "version": 1
    },
    "relationships": [
        {
            "id": "88a2312f-37ef-4ca1-bb98-c0891a50cac7",
            "type": "manga"
        },
        {
            "id": "4550150d-31ea-444e-a822-dbdd14702c7a",
            "type": "user"
        }
    ]
}
```

The most important property here is `id`. We need it for calling the [/at-home/server API](https://api.mangadex.org/at-home/server/40e7e8a4-155c-4b1b-be7e-eb11f8f76f03):

```json
{
    "result": "ok",
    "baseUrl": "https:\/\/uploads.mangadex.org",
    "chapter": {
        "hash": "c0d09a9eca8ad53d107e266c97c79517",
        "data": [
            "e1-edd555cf1d18f91b969fa49d916e499017401769d6953986962e5cd36b2c8e0f.jpg",
            /* bypass */
        ],
        "dataSaver": [
            "e1-d387357f78dd286fce73347c5089920af37f0a01a254d802be589276674d983c.jpg",
            /* bypass */
        ]
    }
}
```

There are two modes of the manga chapter: `data` and `data-saver`. The former is the original size but slower, while the latter is compressed but faster.

Basically you can use something like this:

* Data mode: `{api.baseUrl}/data/{chapter.hash}/{chapter.data[]}`
* Data saver mode: `{api.baseUrl}/data-saver/{chapter.hash}/{chapter.dataSaver[]}`

For example:

* Data mode: https://uploads.mangadex.org/data/c0d09a9eca8ad53d107e266c97c79517/e1-edd555cf1d18f91b969fa49d916e499017401769d6953986962e5cd36b2c8e0f.jpg
* Data saver mode: https://uploads.mangadex.org/data-saver/c0d09a9eca8ad53d107e266c97c79517/e1-d387357f78dd286fce73347c5089920af37f0a01a254d802be589276674d983c.jpg

## Example: [Entity Comments](https://api.mangadex.org/docs/01-concepts/comments)

Used API:

* [/statistics/manga/{uuid}](https://api.mangadex.org/docs/redoc.html#tag/Statistics/operation/get-statistics-manga-uuid): Get rating and comments for now.

### `threadId` in `/statistics/manga`

`statistics.{uuid}.comments.threadId`: Forum ID: `https://forums.mangadex.org/threads/{api.statistics.{uuid}.comments.threadId}`

> If it is `null`, the entity doesn't have a backing comments thread, and therefore has no comments yet.
