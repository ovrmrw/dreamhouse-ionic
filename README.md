# dreamhouse-ionic

Re-write of [dreamhouseapp/dreamhouse-mobile-ionic](https://github.com/dreamhouseapp/dreamhouse-mobile-ionic).

[Demo on Firebase Hosting](https://dreamhouse-5b969.firebaseapp.com/)

## Setup
```
$ npm install -g ionic cordova
$ npm install
```

## Run on local browser
```
$ npm start
```

---

## Setup for Cordova Build
```
$ ionic state restore
```

## Run on usb-connected Android device
```
$ ionic run Android
```

---

## Deploy to Firebase Hosting
```
$ npm run Deploy
```

---

(README from original repository)

Ionic DreamHouse is a sample application that demonstrates how to build mobile apps with Ionic 2. 

## Installation Instructions

Follow these instructions to install the app and run it with the mock (in-memory) data services:

1. **Make sure you have the latest version of Cordova and Ionic:**
    ```
    npm install -g npm
    npm install -g cordova
    npm install -g ionic
    ```

1. Clone the repository:
    ```
    git clone https://github.com/dreamhouseapp/dreamhouse-mobile-ionic
    ```

1. Navigate to the `dreamhouse-mobile-ionic` directory :
    ```
    cd dreamhouse-mobile-ionic
    ```

1. Install the dependencies
    ```
    npm install
    ```
  
1. Run the app in the browser
    ```
    ionic serve
    ```

## Using REST Services

Follow these instructions to run it with the REST data services:

1. Replace all references to `property-service-mock` and `broker-service-mock` with `property-service` and `broker-service`
 
1. Install the Node.js implementation of the REST services (see [this repository](https://github.com/dreamhouseapp/dreamhouse-rest-services) for instructions), and run the Node server.
 
1. Adjust the `SERVER_URL` in `providers/config.ts`. The default is http://localhost:5000.

1. Run the app in the browser
    ```
    ionic serve
    ```