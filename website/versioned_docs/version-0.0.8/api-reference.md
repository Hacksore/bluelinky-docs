---
id: version-0.0.8-api-reference
title: API Overview
original_id: api-reference
---

## Bluelinky Client

### `Bluelinky(config)`

This is the client in which you interact.

config
```js
{
  username: 'username', // Required - Username for the BlueLink account
  password: 'password', // Required - Password for the BlueLink account
  region: 'US', // Required - Region where the vehicle/account is
  pin: '1234', // Required - PIN code used on the account for the vehicle
  autoLogin: true, // Optional - override the autologin behaviour
  deviceUuid: '202020202' // Optional - Something use for EU?
}

```

### `login()`

Tells the library to login to BlueLink API

### `getVehicles()`

Returns a list of all vehicles found on the account.

### `getVehicle()`

Returns a new vehicle based on the inputed vin number.

### `refreshAccessToken()`

Allows you to request a new access token.


## Vehicle

### `start()`

Start the vehicle with optional configuration setting

```js
{}
```
#### return - startConfig: StartConfig): Promise<string>

### `stop()`

Stop the vehicle

### `lock()`

Lock the vehicle

### `unlock()`

Unlock the vehicle

### `status()`

Gather the status of the vehicle

# TODO: some some design from https://testing-library.com/docs/react-testing-library/api on how they did their API