# [The Guardian](https://theguardian.com)

* <https://open-platform.theguardian.com/> ([Github](https://github.com/guardian/open-platform-site/tree/gh-pages))
* [API Documentation](https://open-platform.theguardian.com/documentation) ([In Markdown](https://github.com/guardian/open-platform-site/tree/gh-pages/documentation/md))
* Find and test The Guardian APIs form [Explore](https://open-platform.theguardian.com/explore)

You must get an [API token](https://bonobo.capi.gutools.co.uk/register/developer) and attach it to the `api-key` parameter.

## [Common parameters](https://github.com/guardian/open-platform-site/blob/gh-pages/documentation/md/common.md)

* `api-key`: API key. If you are just exploring APIs, attach `test` to the `api-key` parameter.
* `format`: [`json`](https://developer.mozilla.org/en-US/docs/Glossary/JSON) or [`xml`](https://developer.mozilla.org/en-US/docs/Glossary/XML).
* `callback`: A JavaScript style function callback. `foobar` will return something like this: `foobar({"response":{"status":"ok","userTier":"developer","total":2492557,"startIndex":1,"pageSize":10,"currentPage":1,"pages":249256,"orderBy":"newest","results":[]}))`
* `page-size`: How many items should the API show? The default size is 10, but can get more by given values. The maxium sizes are vary from the API.

### [show-fields](https://github.com/guardian/open-platform-site/blob/gh-pages/documentation/md/show_fields.md)

You can show additional fields by attaching values to the `show-fields` parameter.

Now, what if you want to get the picture, the first paragraph, and the reporter? You need to attach `thumbnail,standfirst,byline` to the `show-fields` parameter, and it returns on `fields`.

Take <https://content.guardianapis.com/search?api-key=test&q=Korea&show-fields=thumbnail,standfirst,byline> for example:

```json
{
    "id":"world/2024/jan/28/north-korea-fires-cruise-missiles-off-east-coast-says-south-korea",
    "type":"article",
    "sectionId":"world",
    "sectionName":"World news",
    "webPublicationDate":"2024-01-28T03:53:53Z",
    "webTitle":"North Korea fires cruise missiles off east coast, says South Korea",
    "webUrl":"https://www.theguardian.com/world/2024/jan/28/north-korea-fires-cruise-missiles-off-east-coast-says-south-korea",
    "apiUrl":"https://content.guardianapis.com/world/2024/jan/28/north-korea-fires-cruise-missiles-off-east-coast-says-south-korea",

    "fields": {
        "standfirst":"<p>South Korean military says it is analysing the launch along with US intelligence authorities</p>","byline":"Guardian staff and agencies",
        "thumbnail":"https://media.guim.co.uk/2dbccdc65e2f9eb3f6dfe62f3db107528315004c/0_236_3543_2126/500.jpg"
    },

    "isHosted":false,
    "pillarId":"pillar/news",
    "pillarName":"News"
}
```

See `fields` here and you get the point.

If you don't know what fields should use, you can try `all` to find fields.

### [Operators](https://github.com/guardian/open-platform-site/blob/gh-pages/documentation/md/boolean_operators.md)

* `AND` (`,`): For example, `Taiwan AND Hong Kong` return news with "Taiwan" and "Hong Kong".
* `OR` (`|`): For example, `food OR alcohol` return news with "food" and "alcohol".
* `NOT` (`-`): For example, `Russia AND NOT Ukraine` return news with "Russia" and without(`NOT`) "Ukraine".
* `()`: Priority. For example, `Palestinian AND (UK OR France OR Germany)` return news with "Palestinian" and either three of them: "UK", "France", and "Germany".
* `""`: The exact keyword. For example, `"Bocchi the Rock!"` returns exactly the keyword ["Bocchi the Rock!"](https://bocchi-the-rock.fandom.com), not "Bocchi" or "Rock".


## Each APIs

### [`/search`](https://github.com/guardian/open-platform-site/blob/gh-pages/documentation/md/content_search.md)

Also see [overview](https://open-platform.theguardian.com/documentation) for example.

Default results returned is 10 news.

* `page`: You read the next 10 news by adding the `page` parameter.
* `q`: Use the parameter to find any keyword you need. If not given, the API lists all news.
* `page-size` can be 1~50.

### [item](https://github.com/guardian/open-platform-site/blob/gh-pages/documentation/md/item.md)

Get the info from the news item. Get it from the the root. For example, the URL of "[Starmer says he cannot "turn the taps on" to fix council funding crisis](https://www.theguardian.com/politics/2024/mar/28/starmer-says-he-cannot-turn-the-taps-on-to-fix-crisis-in-council-funding)"" is `https://www.theguardian.com/politics/2024/mar/28/starmer-says-he-cannot-turn-the-taps-on-to-fix-crisis-in-council-funding`.

The ID of the news is `/politics/2024/mar/28/starmer-says-he-cannot-turn-the-taps-on-to-fix-crisis-in-council-funding`, so you need to get the API of the news is: <https://content.guardianapis.com/politics/2024/mar/28/starmer-says-he-cannot-turn-the-taps-on-to-fix-crisis-in-council-funding?api-key=test>.

Try using the `show-fields` parameter. I helps.

### [`/sections`](https://github.com/guardian/open-platform-site/blob/gh-pages/documentation/md/section.md)

Get sections from the API. Looks like it can get more sections...

### [`/tag`](https://open-platform.theguardian.com/documentation/tag)

* `page-size` can be 1~1000.
* `show-references` can get references.
* `section` can return only tags in those sections.

### [`/editions`](https://github.com/guardian/open-platform-site/blob/gh-pages/documentation/md/edition.md)

Return editions The Guardian have. 
