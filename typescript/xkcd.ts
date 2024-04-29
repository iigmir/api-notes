/**
 * @see misc.md#xkcd
 */
export interface XkcdInterface {
    /**
     * Released month. MM in YYYY-MM-DD.
     */
    month:      string;
    /**
     * Current comic number. So for, no 404.
     */
    num:        number;
    /**
     * Don't know yet
     */
    link:       string;
    /**
     * Released year. YYYY in YYYY-MM-DD.
     */
    year:       string;
    /**
     * Don't know yet
     */
    news:       string;
    /**
     * Comic title. I guess it is plaintext version of `title`?
     */
    safe_title: string;
    /**
     * What the comic depicted on the comic by text.
     */
    transcript: string;
    /**
     * @see [Alt Text - TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Main/AltText)
     */
    alt:        string;
    /**
     * Image URL
     */
    img:        string;
    /**
     * Comic title.
     */
    title:      string;
    /**
     * Released day. DD in YYYY-MM-DD.
     */
    day:        string;
}
