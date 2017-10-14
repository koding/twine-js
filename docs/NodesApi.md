# Twine.NodesApi

All URIs are relative to *http://0.0.0.0:4000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteNode**](NodesApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete node by ID
[**getNode**](NodesApi.md#getNode) | **GET** /nodes/{nodeId} | Find node by ID
[**getNodes**](NodesApi.md#getNodes) | **GET** /nodes | Get list of registered nodes
[**registerNode**](NodesApi.md#registerNode) | **POST** /nodes | Register a new node
[**updateNode**](NodesApi.md#updateNode) | **PATCH** /nodes/{nodeId} | Patch node by ID


<a name="deleteNode"></a>
# **deleteNode**
> OK deleteNode(nodeId)

Delete node by ID

Deletes a node with given ID

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.NodesApi();

var nodeId = "nodeId_example"; // String | ID of node to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNode(nodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| ID of node to delete | 

### Return type

[**OK**](OK.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNode"></a>
# **getNode**
> Node getNode(nodeId)

Find node by ID

Returns a single node with details

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.NodesApi();

var nodeId = "nodeId_example"; // String | ID of node to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNode(nodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| ID of node to return | 

### Return type

[**Node**](Node.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNodes"></a>
# **getNodes**
> [&#39;String&#39;] getNodes()

Get list of registered nodes

Returns list of registered nodes by their IDs

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.NodesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNodes(callback);
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

<a name="registerNode"></a>
# **registerNode**
> Registered registerNode(body)

Register a new node



### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.NodesApi();

var body = new Twine.Node(); // Node | Node object to register Twine


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerNode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Node**](Node.md)| Node object to register Twine | 

### Return type

[**Registered**](Registered.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNode"></a>
# **updateNode**
> OK updateNode(nodeId, body)

Patch node by ID

Updates a node with given ID and data

### Example
```javascript
var Twine = require('twine');
var defaultClient = Twine.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Twine.NodesApi();

var nodeId = "nodeId_example"; // String | ID of node to update

var body = new Twine.Node(); // Node | Node details to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNode(nodeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| ID of node to update | 
 **body** | [**Node**](Node.md)| Node details to update | 

### Return type

[**OK**](OK.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

