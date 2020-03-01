---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Copy pasta this
Change the variables as needed to be relevant to your region and user account.

```js
const BlueLinky = require('bluelinky');

const client = new BlueLinky({
  username: 'someguy@example.com',
  password: 'hunter1',
  region: 'US',
  pin: '1234'
});

client.on('ready', async () => {
  const vehicle = client.getVehicle('5NMS55555555555555');
  const response = await vehicle.lock();
  console.log(response);
});
```

