# [TV Tropes](https://tvtropes.org)

Unfortnately, [there're no public APIs avaiable in TVTropes](https://tvtropes.org/pmwiki/posts.php?discussion=15421549710A54432900), <https://tvtropes.org/pmwiki/posts.php?discussion=14313163830A95025400>, <https://tvtropes.org/pmwiki/posts.php?discussion=14478420050A97600200>. So we need to get contents in other way.

## Basic page API

`https://tvtropes.org/pmwiki/pmwiki.php/{GROUPNAME}/{TITLE}`

For example,

* `https://tvtropes.org/pmwiki/pmwiki.php/Literature/BlackDaggerBrotherhood` will be `{ GROUPNAME: "Literature", TITLE: "BlackDaggerBrotherhood" }`
* `https://tvtropes.org/pmwiki/pmwiki.php/Main/ClipboardOfAuthority` will be `{ GROUPNAME: "Main", TITLE: "ClipboardOfAuthority" }`
* `https://tvtropes.org/pmwiki/pmwiki.php/SoYouWantTo/BreakTheCutie` will be `{ GROUPNAME: "SoYouWantTo", TITLE: "BreakTheCutie" }`
* `https://tvtropes.org/pmwiki/pmwiki.php/VideoExamples/Hell` will be `{ GROUPNAME: "VideoExamples", TITLE: "Hell" }`

## Get content of a page

`https://tvtropes.org/pmwiki/context.php?groupname={GROUPNAME}&title={TITLE}`

For example, the Literature work, [*Black Dagger Brotherhood*](https://tvtropes.org/pmwiki/pmwiki.php/Literature/BlackDaggerBrotherhood) will be: <https://tvtropes.org/pmwiki/context.php?groupname=Literature&title=BlackDaggerBrotherhood>

### Exceptions:

`VideoExamples` is not abaiable here.

https://tvtropes.org/pmwiki/context.php?groupname=VideoExamples&title=Hell

Fornately we can use `document.querySelectorAll("._pmvv-foot-scrollwrapper a")` here. And `dataset` can get all of infomations!

## Get search list: Google search

`https://cse.google.com/cse/element/v1?&num={PAGE}&start={START}&cx={CX}&cse_tok={TOKEN}&callback={CALLBACK}&q={QUERY}&safe={SAFE}`

* PAGE: How many the page shows here. `10` in the site.
* START: The article searching action start with. `0`, `10`, or `20`...
* CALLBACK: Which callback function should start? Google use something like `google.search.cse.api3879`. But can we use `JSON.parse`?
* QUERY: The keyword you are searching for.
* SAFE: I guess it's safe search. So let's `off`.
* TOKEN: `https://cse.google.com/cse/cse.js?cx={CX}` -- Then find `"cse_token": "...",` in the file.
* CX: We are asking for something in `#search-box`...

```html
<div id="search-box">
    <form class="search" action="/pmwiki/search_result.php">
        <input type="hidden" name="cx" value="...">
</form>
```

### Steps

So we firstly need: 

CX: `document.querySelector("input[name='cx']").value`

then we request: `https://cse.google.com/cse/cse.js?cx={CX}`

And `texts.match(/"cse_token":\s*"([^"]+)"/);`.

Now we get {TOKEN} and we can combine other scripts.

## Get discussion

https://tvtropes.org/pmwiki/posts.php?discussion={ID}

## Notes: Get JSON

```js
const fn = (responseText) => {
    const jsonRegex = /\{.*\}/s;
    const jsonMatch = responseText.match(jsonRegex);
    if (jsonMatch) {
        const jsonObject = jsonMatch[0].replace(/,\s*([}\]])/g, "$1"); // remove last comma
        return JSON.parse(jsonObject);
    }
    return {};

}```
