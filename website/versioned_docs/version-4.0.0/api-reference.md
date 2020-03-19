---
id: version-4.0.0-api-reference
title: API Overview
original_id: api-reference
---

## Bluelinky Client

## `Bluelinky()`

This is the client in which you interact.

**Parameters:**
| Name       | Type    | Required | Default | Comment                             |
| ---------- | ------- | -------- | ------- | ----------------------------------- |
| username   | string  | yes      | N/A     | Username for the account            |
| password   | string  | yes      | N/A     | Password for the account            |
| region     | region  | yes      | N/A     | Region US/EU/CA                     |
| autoLogin  | boolean | yes      | true    | If the client automatically logs in |
| deviceUuid | string  | yes (EU) | N/A     | Used only by EU                     |


## `login()`
Send your credentials to the server, get auth tokens.

```js
login()
```

#### Returns
`Promise<string>`

## `getVehicles()`
Get a list of all vehicles found on the account.

```js
getVehicles()
```

#### Returns
`List<Vehicle>`

## `getVehicle()`

Get a vehicle instance based on the inputed vin number.

```js
getVehicles(vinNumber: String)
```

#### Returns
`Vehicle`

## `refreshAccessToken()`

Allows you to request a new access token.

#### Returns
`Promise<string>`

## Vehicle

## `start()`

```js
start(config: Object)
```

Start the vehicle with optional configuration setting.
For EVs, this only starts airconditioning.

**StartConfig:**
| Name                 | Type    | Comment |
| -------------------- | ------- | -------- |
| airCtrl              | string  | Turn on the HVAC                           |
| igniOnDuration       | string  | How long to run (max 10)                   |
| airTempvalue         | region  | Temp in Fahrenheit                         |
| defrost              | boolean | Turn on defrosters, side mirrors, etc      |
| heating1             | string  | yes (EU)                                   |


## `stop()`

Stop the vehicle.
For EVs, this only stops airconditioning.

```js
stop()
```

## `lock()`

Lock the vehicle.

```js
lock()
```


## `unlock()`

Unlock the vehicle.

```js
unlock()
```

## `update()`

Updates the vehicles status, location and odometer (if supported by the given region).

```js
update()
```

## `status`

Get the last status snapshot of the vehicle.

```js
status()
```


## `location`

Get the last location snapshot of the vehicle.

## `odometer`

Get the last odometer state snapshot of the vehicle.

## `location`

Get the last location snapshot of the vehicle.


## Events


### ready
The ready event is fired when the client has finished logging in to the BlueLink API. It also does a lookup to get all the vehicles associated with your account.
```js
const client = new BlueLinky(config);

client.on('ready', (vehicles) => {
  // Client has logged in, and vehicles contains
  // all the logged inn users vehicles.
}));
```
