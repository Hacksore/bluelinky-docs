---
id: api-reference
title: API Overview
original_id: api-reference
---

# NOTE: Docs are WIP and probably not updated fullly

## Bluelinky Client

## `Bluelinky()`

This is the client in which you interact.

**Parameters:**
| Name | Type | Required | Default | Comment |
| ---------- | ------- | -------- | ------- | ----------------------------------- |
| username | string | yes | N/A | Username for the account |
| password | string | yes | N/A | Password for the account |
| region | region | yes | N/A | Region US/EU/CA |
| autoLogin | boolean | no | true | If the client automatically logs in |

## `login()`

Send your credentials to the server, get auth tokens.

#### Returns

`Promise<string>`

## `getVehicles()`

Get a list of all vehicles found on the account.

#### Returns

`List<Vehicle>`

## `getVehicle()`

Get a vehicle instance based on the inputed vin number.

#### Returns

`Vehicle`

## `refreshAccessToken()`

Allows you to request a new access token.

#### Returns

`Promise<string>`

## Vehicle

## `start()`

Start the vehicle with optional configuration setting.
For EVs, this only starts airconditioning.

**StartConfig:**
| Name | Type | Comment |
| -------------------- | ------- | -------- |
| airCtrl | string | Turn on the HVAC |
| igniOnDuration | string | How long to run (max 10) |
| airTempvalue | region | Temp in Fahrenheit |
| defrost | boolean | Turn on defrosters, side mirrors, etc |
| heating1 | string | yes (EU) |

## `stop()`

Stop the vehicle.
For EVs, this only stops airconditioning.

## `lock()`

Lock the vehicle.

## `unlock()`

Unlock the vehicle.

## `status()`

Get the status of the vehicle.

## `location()`

Get the location of the vehicle.

## `odometer()`

Get the odometer of the vehicle.

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
