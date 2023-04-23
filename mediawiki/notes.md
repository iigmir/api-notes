# [Mediawiki](https://www.mediawiki.org) API notes

Since lots of sites use Mediawiki, the Mediawiki API is a thing. Most Mediawiki APIs are free to access: You don't need to obtain account to use it.

* <https://www.mediawiki.org/wiki/API:Main_page>

## Action API and REST API

* `https://en.wikipedia.org/w/rest.php/v1/page/Japan`
* Search: `https://en.wikipedia.org/w/rest.php/v1/search/page?q=Japan&limit=5`

## Usages

### `action=query`

This action will fetch the page's infomation. But, if you want to get wikitexts, this is not enough.

* <https://en.wikipedia.org/w/api.php?action=query&titles=UseModWiki&format=json>
* <https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Japan&format=json>

* <https://www.wikidata.org/w/api.php?search=Mediawiki&action=wbsearchentities&type=item&limit=50&format=json&errorformat=plaintext&language=en&uselang=en&origin=*>

### `origin`

> When accessing the API using a cross-domain AJAX request (CORS), set this to the originating domain. This must be included in any pre-flight request, and therefore must be part of the request URI (not the POST body). 

## Example

### Request a wikitext HTML

* `action=query`
    * `prop=revisions`
    * `rvprop=content`

https://en.wikipedia.org/w/api.php?action=help&modules=query%2Brevisions
https://en.wikipedia.org/w/api.php?action=help&modules=query%2Bextracts

https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&rvprop=content&rvslots=*&titles=Japan

