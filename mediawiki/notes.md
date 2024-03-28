# [Mediawiki](https://www.mediawiki.org) API notes

Since lots of sites use Mediawiki, the Mediawiki API is a thing. Most Mediawiki APIs are free to access: You don't need to obtain account to use it.

* <https://www.mediawiki.org/wiki/API:Main_page>

## Action API and REST API

* `https://en.wikipedia.org/w/rest.php/v1/page/Japan`
* Search: `https://en.wikipedia.org/w/rest.php/v1/search/page?q=Japan&limit=5`

## Common params

* `format=json`: Renders in JSON. `format=jsonfm` is a HTML preview of JSON. Of source, `format=xml` renders in XML and `format=php` renders in PHP format.
* `redirects=`: If the page is redirected, redirect the API to the destination page. 
* `maxlag=`, `smaxage=`, and `maxage=`?

## Usages

### `action=query`

This action will fetch the page's infomation. But, if you want to get wikitexts, this is not enough.

* <https://en.wikipedia.org/w/api.php?action=query&titles=UseModWiki&format=json>
* <https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Japan&format=json>

* <https://www.wikidata.org/w/api.php?search=Mediawiki&action=wbsearchentities&type=item&limit=50&format=json&errorformat=plaintext&language=en&uselang=en&origin=*>

### `action=parse`

This action will fetch requested HTML content.

`section`: Only parse the content of the section with this identifier. When new, parse text and sectiontitle as if adding a new section to the page. `new` is allowed only when specifying text.

https://en.wikipedia.org/w/api.php?action=help&modules=parse

* <https://bocchi-the-rock.fandom.com/api.php?action=parse&format=json&page=Hitori%20Gotoh>

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

* `action=parse`

https://bocchi-the-rock.fandom.com/api.php?action=parse&page=Ryo_Yamada&prop=images|text&format=json&disablepp=&redirects=&smaxage=600&maxage=600&section=0

### Get an image

* `action=query`
    * `iiprop=url`
    * `prop=imageinfo`
    * `titles=file:{FILE}`

https://rationalwiki.org/w/api.php?action=query&redirects=&titles=file:CMIlogo.gif&iiprop=url&prop=imageinfo&format=json
