# [data.gov](https://data.gov)

* [User guide](https://data.gov/user-guide)

Not confused with [code.gov](https://code.gov).

## Response Fofrmat

API endpoint URLs are mostly formatted in:

`https://data.{GOVERNMENT}.gov/api/views/{API_ENDPOINT}/rows.{DATA_FORMAT}?accessType=DOWNLOAD`

* `GOVERNMENT`: Like `austintexas` are open datas from the City of Austin (Texas), while `ny` are open datas from New City.
* `API_ENDPOINT`:
* `DATA_FORMAT`: Common formats are: `csv`, `json`, `.rdf`, and `xml`.

## Response format

For JSON, the API contains two props: `meta` and `data`. `meta` describe the API info while `data` lists all datas you may needed. `data` mostly represented as an array like:

```json
[
    "row-nx2r_usun.g52b",
    "00000000-0000-0000-9D99-B9EA775FDC5E",
    0,
    1619710755,
    null,
    1619710755,
    null,
    "{ }",
    "2020-09-26T00:00:00",
    "11 21 27 36 62 24",
    "3"
]
```

You need to check `columns` in `meta` to know how it works:

```json
{
    "columns": [{
        "id": -1,
        "name": "sid",
        "dataTypeName": "meta_data",
        "fieldName": ":sid",
        "position": 0,
        "renderTypeName": "meta_data",
        "format": {},
        "flags": [
            "hidden"
        ]
    },
    {
        // (elided for readability)
    },
    {
        "id": 538589855,
        "name": "Multiplier",
        "dataTypeName": "number",
        "description": "Multiplier",
        "fieldName": "multiplier",
        "position": 3,
        "renderTypeName": "number",
        "tableColumnId": 8275910,
        "width": 136,
        "cachedContents": {
            "non_null": "1407",
            "largest": "10",
            "null": "210",
            "top": [
                {
                    "item": "2",
                    "count": "726"
                },
                {
                    "item": "3",
                    "count": "425"
                },
                {
                    "item": "4",
                    "count": "140"
                },
                {
                    "item": "5",
                    "count": "100"
                },
                {
                    "item": "10",
                    "count": "16"
                }
            ],
            "smallest": "2",
            "count": "1617",
            "cardinality": "5"
        },
        "format": {
            "precisionStyle": "standard",
            "noCommas": "false",
            "align": "center"
        }
    }]
}
```
