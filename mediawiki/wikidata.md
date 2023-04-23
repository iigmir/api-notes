# [Wikidata](https://www.wikidata.org)

* <https://www.wikidata.org/w/api.php>

## `action=wbsearchentities`

How to get search results by given text? Use [`action=wbsearchentities`](https://www.wikidata.org/w/api.php?action=help&modules=wbsearchentities).

> Searches for entities using labels and aliases.

```js
const get_api = (search = "") =>
{
    const params = {
        "search": search,
        "action": "wbsearchentities",
        "type": "item",
        "limit": "50",
        "format": "json",
        "errorformat": "plaintext",
        "language": "en",
        "uselang": "en",
        "origin": "*"
    };
    const search_params = new URLSearchParams(params);
    const endpoint = `https://www.wikidata.org/w/api.php`;
    return `${endpoint}?${search_params.toString()}`;
};
```

This will generate a URL with lots of query paramenters. For example, `https://www.wikidata.org/w/api.php?search=Mediawiki&action=wbsearchentities&type=item&limit=50&format=json&errorformat=plaintext&language=en&uselang=en&origin=*` will return 50 possible results of the word "Mediawiki".
