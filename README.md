# API notes

Just collect some web APIs' usage like how to call them.

## What API is, anyway?

Here's the example from ChatGPT:

> How do I make an HTTP request in Javascript?
> 
> In order to make an HTTP request in JavaScript, you can use the XMLHttpRequest object or the `fetch` API.
> 
> 1. Using XMLHttpRequest:

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/api/data', true);

xhr.onload = function() {
  if (this.status === 200) {
    console.log('Response:', this.responseText);
  } else {
    console.error('Error:', this.statusText);
  }
};

xhr.onerror = function() {
  console.error('Request failed');
};

xhr.send();
```

> 2. Using fetch:

```js
fetch('https://example.com/api/data')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

> Both methods allow you to make HTTP requests, but `fetch` is more modern and has some advantages over `XMLHttpRequest`. For example, it returns a promise that simplifies error handling, and it automatically parses JSON responses.

## See also

* <https://en.wikipedia.org/wiki/Web_API>
* <https://ithelp.ithome.com.tw/users/20107688/ironman/1507>
