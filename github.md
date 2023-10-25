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
