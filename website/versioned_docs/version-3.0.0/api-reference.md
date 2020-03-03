---
id: version-3.0.0-api-reference
title: API Overview
original_id: api-reference
---

## Bluelinky Client

### `Bluelinky()`

This is the client in which you interact.

config
```js
{
  username: 'username', // Required - Username for the BlueLink account
  password: 'password', // Required - Password for the BlueLink account
  region: 'US', // Required - Region where the vehicle/account is (US, EU) Supprt for CA is in the works
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

Start the vehicle with optional configuration setting.
For EVs, this only starts airconditioning.

```js
{
  defrost: boolean;
  windscreenHeating: boolean;
  temperature: number; // Decimal with 0.5 precition min: 15.0 max 30.0
  unit: string; // 'C' or 'F'
}
```

### `stop()`

Stop the vehicle.
For EVs, this only stops airconditioning.

### `lock()`

Lock the vehicle

### `unlock()`

Unlock the vehicle

### `update()`

updates the vehicles status, location and odometer (if supported by the given region)

### `status`

Get the last status snapshot of the vehicle.

### `location`

Get the last location snapshot of the vehicle.

### `odometer`

Get the last odometer state snapshot of the vehicle.

### `location`

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
