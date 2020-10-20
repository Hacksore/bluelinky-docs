---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
original_id: getting-started
---

## Copy pasta this

Change the variables as needed to be relevant to your region and user account.

```js
const BlueLinky = require("bluelinky");

const client = new BlueLinky({
  username: "someguy@example.com",
  password: "hunter1",
  region: "US",
  pin: "1234",
});

client.on("ready", async () => {
  const vehicle = client.getVehicle("5NMS55555555555555");
  const response = await vehicle.lock();
  console.log(response);
});
```


## Testing locally

Ensure you have a `config.json` that looks like below so you can use the `debug.js` script.

Also make sure before running the `debug.js` script you have done a `npm run build` to make the code runnable.
```json
{
  "username": "xxxx@gmail.com",
  "password": "xxxx",
  "pin": "1234",
  "vin": "xxxxx"
}
```

## More info

Check out the [API Docs](api-reference) if you need more information


