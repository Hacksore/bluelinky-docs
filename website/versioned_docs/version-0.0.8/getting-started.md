---
id: version-0.0.8-getting-started
title: Getting Started
sidebar_label: Getting Started
original_id: getting-started
---

## Copy pasta this
Change the variables as needed to be relevant user account and vehicle.

```js
const BlueLinky = require('bluelinky');
 const client = new BlueLinky({
  username: 'someguy@example.com',
  password: 'hunter1',
});

const main = async () => {
 
  await client.login();

  const vehicle = client.registerVehicle('5NMS55555555555555', '1234');
  const response = await vehicle.lock();
  console.log(response);

});
```

## More info
Check out the [API Docs](api-reference) if you need more information