# [data.go.kr](https://www.data.go.kr/en/index.do)

* <https://www.data.go.kr/en/ugs/selectPortalInfoView.do>

The way they call API is a bit of weird. Take [Gyeongsangnam-do_Fire Department](https://www.data.go.kr/en/data/15062569/openapi.do) for example,

```js
var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/6480000/gyeongnamfirestation/gyeongnamfirestationList'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json'); /**/

xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};
xhr.send('');
```

Basing the param `ServiceKey`, which is "[a]uthentication key received from public data portal", it can be assumed you need API keys for accessing API keys?
