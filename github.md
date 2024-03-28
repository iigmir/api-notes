# [Github](https://github.com)

https://docs.github.com/en

## GraphQL API

https://docs.github.com/en/graphql

## RESTful API

* https://docs.github.com/en/rest
* https://docs.github.com/en/rest/guides/scripting-with-the-rest-api-and-javascript

### `/users/{user}`

Get user info.

* Example: <https://api.github.com/users/octocat>

### `/repos`

#### `/repos/{owner}/{repo}/contents/{path}`

Get repository info.

* Example: <https://api.github.com/repos/HackerNews/API/readme>

Use `atob()` when rendering Base64.

#### Get repository content

`/repos/{owner}/{repo}/contents/{path}`

* Example:
    * <https://github.com/vuejs/core/blob/main/packages/compiler-core/src/parse.ts> => <https://api.github.com/repos/vuejs/core/contents/packages/compiler-core/src/parse.ts>

https://github.com/vuejs/core

#### Get commits: `/repos/{owner}/{repo}/commits`

* <https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#list-commits>
* Example: <https://api.github.com/repos/jindrapetrik/jpexs-decompiler/commits>

* `/repos/{owner}/{repo}/commits`


Some additional params:

* `sha`: Commit SHA ID.
* `path`: Commit log of given file/path
* `author`: Commit log of given author
* `committer`: Commit log of given committer

## Quota, Authentication, and so on

You may face [rate limit](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) when using APIs without token. If so, refer [authentication at getting started with the REST API](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28&tool=javascript#authentication) and [managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) for details.

You can go to [personal access tokens](https://github.com/settings/tokens and generate your personal access token. You'll get a token, said, `YOUR-TOKEN`. Add it on your HTTP request's [`Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) header like: `Authorization: Bearer YOUR-TOKEN`.

```javascript
// See: https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api
const GITHUB_TOKEN = "YOUR-TOKEN";
const ajax = fetch("https://api.github.com/octocat", {
    headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
    }
});
```
