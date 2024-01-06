# [NASA](https://www.nasa.gov)

* <https://api.nasa.gov/>

You must get an [API key](https://api.nasa.gov/#signUp) and attach it on `api_key`, but for exploring use `api_key=DEMO_KEY` is fine.

## APOD

[*A*stronomy *P*icture *o*f the *D*ay](https://apod.nasa.gov/apod/astropix.html)

* GET https://api.nasa.gov/planetary/apod
* <https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2022-12-25&end_date=2022-12-30>

* Date params
    * Use `date` to specify the APOD on the day.
    * You can get an array with APODs by using both `start_date` and `end_date`.

## NASA Image and Video Library

Search images or videos on [NASA](https://images.nasa.gov)

* https://images-api.nasa.gov

See `search-api.ts` for info.

* `/search?q={q}`: search image/videos with the keyword. <https://images-api.nasa.gov/search?q=Taiwan>
* `/asset/{nasa_id}`, `/metadata/{nasa_id}`, `/captions/{nasa_id}`. Get the asset ot info. Use `collection.items[].nasa_id` in `/search` API.
