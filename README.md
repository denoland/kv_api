<!-- deno-fmt-ignore-file -->

# Deno KV REST API

This module provides utilities to attach a flexible RESTful API to a [Deno KV](https://deno.com/kv) data store.

## Usage with Fresh

TODO

## Usage with Oak

TODO

## Authentication and authorization

How you authenticate and authorize access to your Deno KV data store is currently the responsibility of the user. Our assumption is that these routes will be used alongside whatever authentication and authorization system is in place for your existing web application.

We may provide more help for this in future iterations of this module.

## REST API Usage

Once the API is attached to your server of choice, the following routes and HTTP methods are supported - this assumes you have attached the API to the default `/kv` path in your routing scheme. Each KV operation is mapped to a route and HTTP verb. For example, to [get a specific key](https://deno.com/manual/runtime/kv/operations#get) with a key value of `["users", "kevin"]`, you would make an HTTP GET request to:

```
/kv?key=users,kevin
```

Which would return a JSON representation of the same method call in Deno KV like the following:

```
{
  "key": ["some", "key"],
  "value": { "some": "value" },
  "versionstamp": "000001"
}
```

### Route overview

| HTTP Method | Path                    | Deno KV operation |
| ----------- | ----------------------- | ----------------- |
| GET         | `/kv`                   | [get](#get)       |
| GET         | `/kv/list`              | [list](#list)     |
| DELETE      | `/kv`                   | [delete](#delete) |
| POST        | `/kv`                   | [set](#set)       |
| POST        | `/kv/sum`               | [sum](#sum)       |
| POST        | `/kv/min`               | [min](#min)       |
| POST        | `/kv/max`               | [max](#max)       |

### get

Execute a [get operation](https://deno.com/manual/runtime/kv/operations#get).

Example request:

```
GET /kv?key=users,kevin
```

Example response (`application/json`):

```
{
  "key": ["users", "kevin"],
  "value": {
    "username": "kevin",
    "admin": true
  },
  "versionstamp": "000001"
}
```

### list

Execute a [list operation](https://deno.com/manual/runtime/kv/operations#list).

Example request:

```
GET /kv/list?prefix=users&start=users,kevin
```

Example response (`application/json`):

```
[
  {
    "key": ["users", "kevin"],
    "value": {
      "username": "kevin",
      "admin": true
    },
    "versionstamp": "000001"
  }
]
```

### delete

Execute a [delete operation](https://deno.com/manual/runtime/kv/operations#delete).

Example request:

```
DELETE /kv?key=users,kevin
```

Successful response returns 200 OK with no body.

### set

Execute a [set operation](https://deno.com/manual/runtime/kv/operations#set).

Example request:

```
POST /kv?key=users,kevin
Body:
{
  "username": "kevin",
  "admin": true
}
```

Example response (`application/json`):

```
[
  {
    "key": ["users", "kevin"],
    "value": {
      "username": "kevin",
      "admin": true
    },
    "versionstamp": "000001"
  }
]
```

### sum

Execute a [sum operation](https://deno.com/manual/runtime/kv/operations#sum).

TODO

### min

Execute a [min operation](https://deno.com/manual/runtime/kv/operations#min).

TODO

### max

Execute a [max operation](https://deno.com/manual/runtime/kv/operations#max).

TODO

## License

MIT
