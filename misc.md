# Miscellaneous

There are some small, yet useful APIs. You can familiarise yourself with AJAX caling by using these APIs.

* <https://medium.com/@vicbergquist/18-fun-apis-for-your-next-project-8008841c7be9>
* <https://dev.to/mukeshkuiry/12-free-and-fun-api-for-your-next-project-5eem>

## [ipify](https://api.ipify.org)

Use [api.ipify.org](https://api.ipify.org) for IPv4 and [api6.ipify.org](https://api6.ipify.org) for IPv6. There is a param called `format` with tree values avaiable:

1. `text` returns a text file like `127.0.0.1`.
2. `json` returns a JSON file like `{"ip":"127.0.0.1"}`.
3. `jsonp` returns a JavaScript file like `callback({"ip":"127.0.0.1"});`.
    1. Additionally, You can specify `callback` to decide the name of the callback function in your front end. FOr example, `callback=cb` returns `cb({"ip":"127.0.0.1"});`.

## [yesno.wtf](https://yesno.wtf)

* [/api](https://yesno.wtf/api)

Use `force` to force the API returns `yes`, `no`, or `maybe`. Usually the API returns `yes` or `no`, but `maybe` appears every 1/10.000 time.

## [The Cat API](https://thecatapi.com)

10,000 requests a month when using without `x-api-key`.

* <https://api.thecatapi.com/v1/images/search>

## [The Dog API](https://thedogapi.com)

10,000 requests a month when using without `x-api-key`.

* <https://api.thedogapi.com/v1/images/search>

## [Dad Jokes](https://www.dadjokes.io)

* [Docs](https://www.dadjokes.io/documentation/getting-started)

## [JokeAPI](https://v2.jokeapi.dev)

* <https://v2.jokeapi.dev/joke/Any>

A [playground](https://v2.jokeapi.dev/#try-it) is avaiable.

## [Advice Slip](https://api.adviceslip.com)

* <https://api.adviceslip.com/advice>

## [Fun Translations](https://funtranslations.com)

* <https://funtranslations.com/api>

## [Open Trivia Database](https://opentdb.com)

* <https://opentdb.com/api_config.php>

## [TheCocktailDB](https://www.thecocktaildb.com)

* <https://www.thecocktaildb.com/api.php>

## [xkcd](https://xkcd.com)

* <https://xkcd.com/info.0.json> (current comic)
* `https://xkcd.com/{ID}/info.0.json` (comic of `ID`)

> Is there an interface for automated systems to access comics and metadata?
> Yes. You can get comics through the JSON interface, at URLs like <https://xkcd.com/info.0.json> (current comic) and <https://xkcd.com/614/info.0.json> (comic #614). 
> ~ From https://xkcd.com/about
