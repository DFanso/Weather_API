# Weather_API
 ## intern assessment CodeScale  || Nodejs API

 ## Bakend Hosted on vercel URL: [dfanso/weather-api](https://weather-api-dfanso.vercel.app)



# Weather_api



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
- [Weather\_API](#weather_api)
- [Weather\_api](#weather_api-1)
  - [Endpoints](#endpoints)
    - [1. Create User](#1-create-user)
      - [I. Example Request: Create User](#i-example-request-create-user)
      - [I. Example Response: Create User](#i-example-response-create-user)
    - [2. Login](#2-login)
      - [I. Example Request: Login](#i-example-request-login)
      - [I. Example Response: Login](#i-example-response-login)
    - [3. Get Weather](#3-get-weather)
      - [I. Example Request: Get Weather](#i-example-request-get-weather)
      - [I. Example Response: Get Weather](#i-example-response-get-weather)
    - [4. Get Weather for specific time stamp](#4-get-weather-for-specific-time-stamp)
      - [I. Example Request: Get Weather for specific time stamp](#i-example-request-get-weather-for-specific-time-stamp)
      - [I. Example Response: Get Weather for specific time stamp](#i-example-response-get-weather-for-specific-time-stamp)
    - [5. Update User](#5-update-user)
      - [I. Example Request: Update User](#i-example-request-update-user)
      - [I. Example Response: Update User](#i-example-response-update-user)



## Endpoints


--------



### 1. Create User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://weather-api-dfanso.vercel.app/api/users
```



***Body:***

```js        
{
  "firstName": "DFanso",
  "lastName": "Felcianas",
  "email": "dfanso@pm.me",
   "password": "123@Dfanso",
  "location": "Colombo"
}

```



***More example Requests/Responses:***


#### I. Example Request: Create User



***Body:***

```js        
{
  "firstName": "DFanso",
  "lastName": "Felcianas",
  "email": "dfanso@pm.me",
   "password": "123@Dfanso",
  "location": "Colombo"
}

```



#### I. Example Response: Create User
```js
{
    "message": "User created",
    "id": "6501a6cdcc08e4386139ffc0"
}
```


***Status Code:*** 201

<br>



### 2. Login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://weather-api-dfanso.vercel.app/api/users/login
```



***Body:***

```js        
{
  "email": "dfanso@pm.me",
  "password": "123@Dfanso"
}

```



***More example Requests/Responses:***


#### I. Example Request: Login



***Body:***

```js        
{
  "email": "dfanso@pm.me",
  "password": "123@Dfanso"
}

```



#### I. Example Response: Login
```js
{
    "message": "Logged in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFhNmNkY2MwOGU0Mzg2MTM5ZmZjMCIsImVtYWlsIjoiZGZhbnNvQHBtLm1lIiwiaWF0IjoxNjk0NjA3NTQ4LCJleHAiOjE2OTQ2MTExNDh9.XffXGV7XgFa_jImGibB_7dQs9VeUCrER-T8kCz1cHps"
}
```


***Status Code:*** 200

<br>



### 3. Get Weather



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://weather-api-dfanso.vercel.app/api/users/weather
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFhNmNkY2MwOGU0Mzg2MTM5ZmZjMCIsImVtYWlsIjoiZGZhbnNvQHBtLm1lIiwiaWF0IjoxNjk0NjA3MDU2LCJleHAiOjE2OTQ2MTA2NTZ9.0pkJKRWBH_nadjdvJZ1UFAlSPpw805hssA_X5rfaBHA |  |



***More example Requests/Responses:***


#### I. Example Request: Get Weather


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDE1ODRlNWM5OGU1NGViYmFhNWNiNSIsImVtYWlsIjoibGVvZ2F2aW4xMjNAZ21haWwuY29tIiwiaWF0IjoxNjk0NjA4MDQ3LCJleHAiOjE2OTQ2MTE2NDd9.6__-71sO6kU0RTUytVdOqeDkOCA0Fl_J6NlzPno2oFY |  |



***Body: None***



#### I. Example Response: Get Weather
```js
{
    "location": "Nattandiya",
    "weather": {
        "temperature": 28,
        "weatherDescription": "Rain (light rain)",
        "windSpeed": 6.61
    }
}
```


***Status Code:*** 200

<br>



### 4. Get Weather for specific time stamp



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://weather-api-dfanso.vercel.app/api/users/weatherByDate/:date
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFhNmNkY2MwOGU0Mzg2MTM5ZmZjMCIsImVtYWlsIjoiZGZhbnNvQHBtLm1lIiwiaWF0IjoxNjk0NjA3MDU2LCJleHAiOjE2OTQ2MTA2NTZ9.0pkJKRWBH_nadjdvJZ1UFAlSPpw805hssA_X5rfaBHA |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2023-09-15 |  |



***More example Requests/Responses:***


#### I. Example Request: Get Weather for specific time stamp


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFhNmNkY2MwOGU0Mzg2MTM5ZmZjMCIsImVtYWlsIjoiZGZhbnNvQHBtLm1lIiwiaWF0IjoxNjk0NjA3MDU2LCJleHAiOjE2OTQ2MTA2NTZ9.0pkJKRWBH_nadjdvJZ1UFAlSPpw805hssA_X5rfaBHA |  |



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2023-09-15 |  |



***Body: None***



#### I. Example Response: Get Weather for specific time stamp
```js
{
    "dt": 1694736000,
    "main": {
        "temp": 298.57,
        "feels_like": 299.36,
        "temp_min": 298.57,
        "temp_max": 298.57,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1010,
        "humidity": 84,
        "temp_kf": 0
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    "clouds": {
        "all": 100
    },
    "wind": {
        "speed": 4.2,
        "deg": 227,
        "gust": 5.75
    },
    "visibility": 10000,
    "pop": 0.81,
    "rain": {
        "3h": 2.48
    },
    "sys": {
        "pod": "n"
    },
    "dt_txt": "2023-09-15 00:00:00"
}
```


***Status Code:*** 200

<br>



### 5. Update User



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: https://weather-api-dfanso.vercel.app/api/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFhNmNkY2MwOGU0Mzg2MTM5ZmZjMCIsImVtYWlsIjoiZGZhbnNvQHBtLm1lIiwiaWF0IjoxNjk0NjA3MDU2LCJleHAiOjE2OTQ2MTA2NTZ9.0pkJKRWBH_nadjdvJZ1UFAlSPpw805hssA_X5rfaBHA |  |



***Body:***

```js        
{
  "firstName": "Leo",
  "lastName": "Gavin",
  "email": "dfanso@pm.me",
  "location": "Colombo"
}

```



***More example Requests/Responses:***


#### I. Example Request: Update User


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFhNmNkY2MwOGU0Mzg2MTM5ZmZjMCIsImVtYWlsIjoiZGZhbnNvQHBtLm1lIiwiaWF0IjoxNjk0NjA3MDU2LCJleHAiOjE2OTQ2MTA2NTZ9.0pkJKRWBH_nadjdvJZ1UFAlSPpw805hssA_X5rfaBHA |  |



***Body:***

```js        
{
  "firstName": "Leo",
  "lastName": "Gavin",
  "email": "dfanso@pm.me",
  "location": "Colombo"
}

```



#### I. Example Response: Update User
```js
{
    "message": "User updated",
    "user": {
        "_id": "6501a6cdcc08e4386139ffc0",
        "firstName": "Leo",
        "lastName": "Gavin",
        "email": "dfanso@pm.me",
        "password": "$2a$10$UrklruMBDwqHDIGa2PidW.hhNR8LDSgdDNCncWS2cjDbMrQfzF8Cm",
        "location": "Colombo",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



---
[Back to top](#weather_api)

>Generated at 2023-09-13 12:34:33 by [docgen](https://github.com/thedevsaddam/docgen)
