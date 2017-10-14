# twine

Twine - JavaScript client for twine
Twine server REST Api definition
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install twine --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your twine from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('twine')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/twine
then install it via:

```shell
    npm install YOUR_USERNAME/twine --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Twine = require('twine');

var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new Twine.NodesApi()

var nodeId = "nodeId_example"; // {String} ID of node to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteNode(nodeId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://0.0.0.0:4000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Twine.NodesApi* | [**deleteNode**](docs/NodesApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete node by ID
*Twine.NodesApi* | [**getNode**](docs/NodesApi.md#getNode) | **GET** /nodes/{nodeId} | Find node by ID
*Twine.NodesApi* | [**getNodes**](docs/NodesApi.md#getNodes) | **GET** /nodes | Get list of registered nodes
*Twine.NodesApi* | [**registerNode**](docs/NodesApi.md#registerNode) | **POST** /nodes | Register a new node
*Twine.NodesApi* | [**updateNode**](docs/NodesApi.md#updateNode) | **PATCH** /nodes/{nodeId} | Patch node by ID
*Twine.ServersApi* | [**deleteServer**](docs/ServersApi.md#deleteServer) | **DELETE** /servers/{serverId} | Delete server by ID
*Twine.ServersApi* | [**getServer**](docs/ServersApi.md#getServer) | **GET** /servers/{serverId} | Find server by ID
*Twine.ServersApi* | [**getServers**](docs/ServersApi.md#getServers) | **GET** /servers | Get list of available servers
*Twine.ServersApi* | [**registerServer**](docs/ServersApi.md#registerServer) | **POST** /servers | Register a new server
*Twine.ServersApi* | [**updateServer**](docs/ServersApi.md#updateServer) | **PATCH** /servers/{serverId} | Patch server by ID


## Documentation for Models

 - [Twine.Error](docs/Error.md)
 - [Twine.Node](docs/Node.md)
 - [Twine.OK](docs/OK.md)
 - [Twine.Registered](docs/Registered.md)
 - [Twine.Server](docs/Server.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
