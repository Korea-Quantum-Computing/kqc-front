[![Netlify Status](https://api.netlify.com/api/v1/badges/03b330c2-cf2f-4140-917a-2a21f16e2255/deploy-status?branch=main)](https://app.netlify.com/sites/neon-cactus-87f81f/deploys)

# How to run webserver

* Clone the rposition
```
git clone https://github.com/Korea-Quantum-Computing/kqc-front.git
```

* Get into the created folder
```
cd kqc-front
```

* Make sure that there is nvm installed
* Install node
```
nvm install v14.20.1
```
* Select node-version
```
nvm use 14.20.1
```
* (When installing for the first time) Make sure that you don't have the following
```
/modules
package-lock.json
```
* Issue the following to install requirements
```
yarn install
```

* Start dev server
```
yarn start --host 0.0.0.0
```

* Connect to (may vary, neeed to figure out)
```
localhost:3000
```
