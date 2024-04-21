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

For JSON, the API contains two props: `meta` and `data`. `meta` describe the API info while `data` lists all datas you may needed.
