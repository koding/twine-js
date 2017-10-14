# Twine.ServersApi

All URIs are relative to *http://0.0.0.0:4000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteServer**](ServersApi.md#deleteServer) | **DELETE** /servers/{serverId} | Delete server by ID
[**getServer**](ServersApi.md#getServer) | **GET** /servers/{serverId} | Find server by ID
[**getServers**](ServersApi.md#getServers) | **GET** /servers | Get list of available servers
[**registerServer**](ServersApi.md#registerServer) | **POST** /servers | Register a new server
[**updateServer**](ServersApi.md#updateServer) | **PATCH** /servers/{serverId} | Patch server by ID


<a name="deleteServer"></a>
# **deleteServer**
> OK deleteServer(serverId)

Delete server by ID

Deletes a server with given ID

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.ServersApi();

var serverId = "serverId_example"; // String | ID of server to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteServer(serverId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| ID of server to delete | 

### Return type

[**OK**](OK.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServer"></a>
# **getServer**
> Server getServer(serverId)

Find server by ID

Returns a single server with details

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.ServersApi();

var serverId = "serverId_example"; // String | ID of server to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServer(serverId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| ID of server to return | 

### Return type

[**Server**](Server.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServers"></a>
# **getServers**
> [&#39;String&#39;] getServers()

Get list of available servers

Returns list of registered servers by their IDs

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.ServersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="registerServer"></a>
# **registerServer**
> Registered registerServer(body)

Register a new server



### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.ServersApi();

var body = new Twine.Server(); // Server | Server object to register Twine


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerServer(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Server**](Server.md)| Server object to register Twine | 

### Return type

[**Registered**](Registered.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateServer"></a>
# **updateServer**
> OK updateServer(serverId, body)

Patch server by ID

Updates a server with given ID and data

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.ServersApi();

var serverId = "serverId_example"; // String | ID of server to update

var body = new Twine.Server(); // Server | Server details to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateServer(serverId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverId** | **String**| ID of server to update | 
 **body** | [**Server**](Server.md)| Server details to update | 

### Return type

[**OK**](OK.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

