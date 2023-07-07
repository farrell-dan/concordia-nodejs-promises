# The Concordia Bootcamps Hello API

The base url of the API is `https://journeyedu.herokuapp.com`.

## Usage

Use the [request-promise](https://www.npmjs.com/package/request-promise) module to make requests to this API. Take some time to read the their docs. (_Note that this module, and the `request` module are deprecated but still very much relevant and in-use. You can read about it [here](https://github.com/request/request/issues/3142)._)

This API follows the REST principles.

It uses [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes to classify the data. Although, when adding a new "ficticious" language, the code doesn't not need to conform to this. (Code can be whatever you like.)

### Persistence

There is not _real_ persistence to the data that you add. It will remain in memory on the server as long as the server is not restarted. It is not restarted on any specified schedule, but expect that data entered today might not exist tomorrow.

## List of Endpoints

| Method   | Endpoint       | Description                                                                                                                      |
| -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `GET`    | `/hello`       | This is a test endpoint that always returns 'Hello'.                                                                             |
| `POST`   | `/hello`       | **Disabled** Adds a new language, into database. Requires `lang`, `code` and `text` in the `body`. Returns `201`, `400` or `409` |
| `GET`    | `/hello/:code` | returns 'Hello' in the `code` provided                                                                                           |
| `PUT`    | `/hello/:code` | **Disabled** Updates the lang based on the `code` provided. Requires `lang` and/or `text` in the `body`. Returns `200`, or `404` |
| `DELETE` | `/hello/:code` | **Disabled** Deletes the lang based on the `code` provided. Returns `200`, or `404`                                              |

### API Response

The API will always provide a complete response. This response will include the `status`, the `data` that you sent to the API. or the data reaquested, as well as a detailed message, when applicable (mostly for errors).

#### Example Response

```js
{
  "status": 404,
  "data": {
    "code": "XX"
  },
  "message": "Cannot find that language code"
}
```

#### Status Codes

| Code | Description                     |
| ---- | ------------------------------- |
| 200  | Request successfully processed. |
| 201  | New item successfully created.  |
| 400  | Request is missing data.        |
| 404  | Item not found.                 |
| 409  | Item already exists.            |

## Examples

_Requests are not written with Node, in order to allow you to learn to use `request-promise` on your own._

### Test endpoint

- endpoint: `/hello`
- method: GET
- body: n/a

#### Request

```bash
GET https://journeyedu.herokuapp.com/hello
```

#### Response

```json
{
  "status": 200,
  "data": {
    "lang": "English",
    "code": "EN",
    "text": "Hello"
  }
}
```

### Get a specific language

- endpoint: `/hello/:code`
- method: GET
- body: n/a

#### Request

```bash
GET https://journeyedu.herokuapp.com/hello/fr
```

#### Response

```json
{
  "status": 200,
  "data": {
    "lang": "French",
    "code": "FR",
    "text": "Bonjour"
  }
}
```

### Add a language

- endpoint: `/hello`
- method: POST
- body: requires `lang`, `text` and `code`.

#### Request

```bash
POST https://journeyedu.herokuapp.com/hello
{
	"lang": "Klingon",
	"text": "nuqneH",
	"code": "KGN"
}
```

#### Response

```json
{
  "status": 201,
  "data": {
    "lang": "Klingon",
    "text": "nuqneH",
    "code": "KGN"
  },
  "message": "Language added!"
}
```

### Update a language

- endpoint: `/hello/:code`
- method: PUT
- body: requires `lang` or `text`.

#### Request

```bash
POST https://journeyedu.herokuapp.com/hello/FR
{
	"text": "Salut!",
}
```

#### Response

```json
{
  "status": 200,
  "data": {
    "code": "fr",
    "lang": "French",
    "text": "Salut!"
  },
  "message": "Language updated."
}
```
