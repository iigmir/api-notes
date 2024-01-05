interface NasaImagesMetadata {
    location: string;
}

interface NasaImagesAsset {
    collection: {
        href:   string;
        data:   string[];
        version: string;
    }
}

interface NasaImagesSearch {
    collection: {
        version: string;
        href:   string;
        items:   DataInterface[];
        links?: SearchLink[];
        metadata: {
            total_hits: number
        }
    }
}

interface SearchLink {
    rel: string
    prompt: string
    href: string
}

interface DataInterface {
    album?:             string[];
    center:             Center;
    title:              string;
    keywords?:          string[];
    location?:          string;
    /**
     * The ID used to get another infos from API
     */
    nasa_id:            string;
    date_created:       Date;
    media_type:         MediaType;
    description:        string;
    photographer?:      string;
    description_508?:   string;
    secondary_creator?: string;
}

/**
 * Don't know what exactly is but it looks like [these centres](https://en.wikipedia.org/wiki/Category:NASA_facilities)...
 */
enum Center {
    Gsfc = "GSFC",
    Jpl = "JPL",
    Jsc = "JSC",
}

enum MediaType {
    Audio = "audio",
    Image = "image",
    Video = "video",
}

interface Link {
    href:    string;
    rel:     Rel;
    render?: MediaType;
}

enum Rel {
    Captions = "captions",
    Preview = "preview",
}
