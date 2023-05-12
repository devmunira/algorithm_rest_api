
# Random Algorithom API

it's an rest api project where i build some algorithm such as: random user generate , random number generate, string value analysis



## Features

- User can generate random number with start and end value 
- User can geenrate random user profile with spacific valid column but they can skip valid column if want,   but can't add invalid column data
- User provide an string then api will send a details that how many letters, symbol and number this provided string have
- 100% Bug free


## Tech Stack

**Server:** Node, Express


## API Reference

#### generate random value

take two integer value and back a random number between them
```http
  POST /api/v1/random-value
```
| Body      | Type      | Description                   |
| :-------- | :-------  | :-------------------------    |
| `start`   | `integer` | **Required must be integer**. |
| `end`     | `integer` | **Required must be integer**. |

#### Create an random user

take some user data and return user object
```http
  POST /api/v1/random-user
```
| Parameter        | Type     | Description   |
| :--------        | :------- | :-------------|
| `firstName`      | `string` | **Nullable**. |
| `lastName`       | `string` | **Nullable**. |
| `email`          | `string` | **Nullable**. |
| `age`            | `number` | **Nullable**. |
| `avatar`         | `string` | **Nullable**. |
| `address`        | `string` | **Nullable**. |

#### get string analyze Object
take a string as query and return an object
```http
  POST /api/v1/analyse-string?string=!@hsd%646hdgs
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SERVER_PORT`

## Run Locally

Clone the project

```bash
  git clone https://github.com/devmunira/algorithm_rest_api
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Authors

- [@devmunira](https://www.github.com/devmunira)

