# Web Services
Software system designed to support interoperable machine-to-machine interaction over a network.

## What is HTTP?
`HTTP` stands for `Hypertext Transfer Protocol` and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network.
The HTTp Request and Response consists of the Rrequest/Response header and body.   

### Resources
Something that you want to expose to the outside world as a web service.
- It has a `URI`(Uniform Resource Indicator)   
Eg: users/Richard/todos/1
- They Can have different  representations like XML, JSON, HTML

## TCP
The transfer of resources happens using `TCP (Transmission Control Protocol)`.TCP manages the channels between your browser and the server. TCP is used to manage many types of internet connections in which one computer or device wants to send something to another.

### HTTP & TCP: How it Works
When you type an address such as www.google.com into your browser, you are commanding it to open a TCP channel to the server that responds to that URL 
Once the TCP connection is established, the client sends a HTTP GET request to the server to retrieve the webpage it should display. After the server has sent the response, it closes the TCP connection. If you open the website in your browser again, or if your browser automatically requests something from the server, a new connection is opened which follows the same process described above. GET requests are one kind of HTTP method a client can call.

## REST:
REST, or `REpresentational State Transfer`, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.REST-compliant systems, often called `RESTful systems`, are characterized by how they are stateless and separate the concerns of client and server.   
`JSON` is the most popular data exchange format.
`HTTP` is the only transport.

### SEPARATION OF CLIENT AND SERVER
n the REST architectural style, the implementation of the client and the implementation of the server can be done independently without each knowing about the other. This means that the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client.
As long as each side knows what format of messages to send to the other, they can be kept modular and separate
By using a REST interface, different clients hit the same REST endpoints, perform the same actions, and receive the same responses.

### STATELESSNESS
Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa. In this way, both the server and the client can understand any message received, even without seeing previous messages. This constraint of statelessness is enforced through the use of resources, rather than commands. Resources are the nouns of the Web - they describe any object, document, or thing that you may need to store or send to other services.
Because REST systems interact through standard operations on resources, they do not rely on the implementation of interfaces.
These constraints help RESTful applications achieve reliability, quick performance, and scalability, as components that can be managed, updated, and reused without affecting the system as a whole, even during operation of the system.

#### COMMUNICATION BETWEEN CLIENT AND SERVER
In the REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests. 

#### MAKING REQUESTS
REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

- an HTTP verb, which defines what kind of operation to perform
- a header, which allows the client to pass along information about the request
- a path to a resource
- an optional message body containing data

#### HTTP VERBS
There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

`GET` — retrieve a specific resource (by id) or a collection of resources
`POST` — create a new resource
`PUT` — update a specific resource (by id)
`DELETE` — remove a specific resource by id

## CRUD AND REST
In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively.

### CREATE
To create resources in a REST environment, we most commonly use the HTTP POST method. POST creates a new resource of the specified resource type.
For example, let’s imagine that we are adding a new food item to the stored list of dishes for this restaurant, and the dish objects are stored in a dishes resource. If we wanted to create the new item, we would use a POST request:

#### Request:
`POST http://www.myrestaurant.com/dishes/`

##### Body -
```json
{
  "dish": {
    "name": “Avocado Toast”,
    "price": 8
  }
}
```
This creates a new item with a name value of “Avocado Toast” and a price value of 8. Upon successful creation, the server should return a header with a link to the newly-created resource, along with a HTTP response code of 201 (CREATED).

#### Response:

##### Status Code - `201 (CREATED)`

##### Body -
```json
{
  "dish": {
    "id": 1223,
    "name": “Avocado Toast”,
    "price": 8
  }
}
```
From this response, we see that the dish with name “Avocado Toast” and price 8 has been successfully created and added to the dishes resource.


### READ
To read resources in a REST environment, we use the GET method. Reading a resource should never change any information - it should only retrieve it. If you call GET on the same information 10 times in a row, you should get the same response on the first call that you get on the last call.

GET can be used to read an entire list of items:

#### Request:

`GET http://www.myrestaurant.com/dishes/`

#### Response: 
`Status Code - 200 (OK)`

##### Body
```json
{
  "dishes": [
    {
      "id": 1,
      "name": “Spring Rolls”,
      "price": 6
    },
    {
      "id": 2,
      "name": “Mozzarella Sticks”,
      "price": 7
    },
    ...
  ]
}
```

GET requests can also be used to read a specific item, when its id is specified in the request:

#### Request:
`GET http://www.myrestaurant.com/dishes/1223`

#### Response:
`Response: Status Code - 200 (OK)` 

##### Body -
```json
{
  "id": 1223,
  "name": “Avocado Toast”,
  "price": 8
}
```
After this request, no information has been changed in the database. The item with id 1223 has been retrieved from the dishes resource, and not modified. When there are no errors, GET will return the HTML or JSON of the desired resource, along with a 200 (OK) response code. If there is an error, it most often will return a 404 (NOT FOUND) response code.

### UPDATE
`PUT` is the HTTP method used for the CRUD operation, `Update`.

For example, if the price of Avocado Toast has gone up, we should go into the database and update that information. We can do this with a PUT request.

#### Request:

`PUT http://www.myrestaurant.com/dishes/1223`

##### Body
```json
{
  "dish": {
    "name": “Avocado Toast”,
    "price": 10
  }
}
```
This request should change the item with id 1223 to have the attributes supplied in the request body. This dish with id 1223 should now still have the name “Avocado Toast”, but the price value should now be 10, whereas before it was 8.

##### Response: 
`Status Code - 200 (OK)` 

##### Body 
not necessary

The response includes a Status Code of 200 (OK) to signify that the operation was successful, but it need not return a response body.

### DELETE
The CRUD operation Delete corresponds to the HTTP method DELETE. It is used to remove a resource from the system.

Let’s say that the world avocado shortage has reached a critical point, and we can no longer afford to serve this modern delicacy at all. We should go into the database and delete the item that corresponds to “Avocado Toast”, which we know has an id of 1223.

#### Request:

`DELETE http://www.myrestaurant.com/dishes/1223`
Such a call, if successful, returns a response code of 204 (NO CONTENT), with no response body. The dishes resource should no longer contain the dish object with id 1223.

##### Response: 
`Status Code - 204 (NO CONTENT)` 

##### Body 
None

Calling GET on the dishes resource after this DELETE call would return the original list of dishes with the {"id": 1223, "name": “Avocado Toast”, "price": 10} entry removed. All other dish objects in the dishes resource should remain unchanged. If we tried to call a GET on the item with id 1223, which we just deleted, we would receive a 404 (NOT FOUND) response code and the state of the system should remain unchanged.

Calling DELETE on a resource that does not exist should not change the state of the system. The call should return a 404 response code (NOT FOUND) and do nothing.

### HTTP HEADERS AND ACCEPT PARAMETERS
In the header of the request, the client sends the type of content that it is able to receive from the server. This is called the `Accept` field, and it ensures that the server does not send data that cannot be understood or processed by the client. The options for types of content are MIME Types (or `Multipurpose Internet Mail Extensions`,

`MIME` Types, used to specify the content types in the Accept field, consist of a type and a subtype. They are separated by a slash (/).
For example, a text file containing HTML would be specified with the type `text/html`. If this text file contained CSS instead, it would be specified as `text/css`. A generic text file would be denoted as `text/plain`. This default value, text/plain, is not a catch-all, however. If a client is expecting text/css and receives text/plain, it will not be able to recognize the content.

Other types and commonly used subtypes:
- **image** — image/png, image/jpeg, image/gif
- **audio** — audio/wav, image/mpeg
- **video** — video/mp4, video/ogg
application — application/json, application/pdf, application/xml, application/octet-stream

For example, a client accessing a resource with id 23 in an articles resource on a server might send a GET request like this:

```html
GET /articles/23
Accept: text/html, application/xhtml
```

#### PATHS
Requests must contain a path to a resource that the operation should be performed on. 
When referring to a list or collection of resources, it is unnecessary to add an id to a POST request to a fashionboutique.com/customers path would not need an extra identifier, as the server will generate an id for the new object.

If we are trying to access a single resource, we would need to append an id to the path. For example: GET fashionboutique.com/customers/:id

### SENDING RESPONSES

#### CONTENT TYPES
In cases where the server is sending a data payload to the client, the server must include a content-type in the header of the response
These content types are MIME Types, just as they are in the accept field of the request header. The content-type that the server sends back in the response should be one of the options that the client specified in the accept field of the request.

For example, when a client is accessing a resource with id 23 in an articles resource with this GET Request:

```html
GET /articles/23 HTTP/1.1
Accept: text/html, application/xhtml
```

The server might send back the content with the response header:
```html
HTTP/1.1 200 (OK)
Content-Type: text/html
```

#### RESPONSE CODES
Status code	Meaning
- `200 (OK)`	This is the standard response for successful HTTP requests.
- `201 (CREATED)`	This is the standard response for an HTTP request that resulted in an item being successfully created.
- `204 (NO CONTENT)`	This is the standard response for successful HTTP requests, where nothing is being returned in the response body.
- `400 (BAD REQUEST)`	The request cannot be processed because of bad request syntax, excessive size, or another client error.
- `403 (FORBIDDEN)`	The client does not have permission to access this resource.
- `404 (NOT FOUND)`	The resource could not be found at this time. It is possible it was deleted, or does not exist yet.
- `500 (INTERNAL SERVER ERROR)`	The generic answer for an unexpected failure if there is no more specific information available.

#### If we wanted to view all customers, 
the request would look like this:
```html
GET http://fashionboutique.com/customers
Accept: application/json
```

A possible response header would look like:
```html
Status Code: 200 (OK)
Content-type: application/json
```
followed by the customers data requested in application/json format.


#### Create a new customer by posting the data:

`POST http://fashionboutique.com/customers`
Body:
```json
{
  “customer”: {
    “name” = “Scylla Buss”
    “email” = “scylla.buss@codecademy.org”
  }
}
```
The server then generates an id for that object and returns it back to the client, with a header like:

```html
201 (CREATED)
Content-type: application/json
```

#### To view a single customer we GET it by specifying that customer’s id:
```html
GET http://fashionboutique.com/customers/123
Accept: application/json
```

A possible response header would look like:
```html
Status Code: 200 (OK)
Content-type: application/json
```
followed by the data for the customer resource with id 23 in application/json format.

#### We can update that customer by _PUT_ting the new data:

`PUT http://fashionboutique.com/customers/123`
Body:
```json
{
  “customer”: {
    “name” = “Scylla Buss”
    “email” = “scyllabuss1@codecademy.com”
  }
}
```
A possible response header would have `Status Code: 200 (OK)`, to notify the client that the item with id 123 has been modified.

#### We can also DELETE that customer by specifying its id:

`DELETE http://fashionboutique.com/customers/123`
The response would have a header containing Status Code: `204 (NO CONTENT)`, notifying the client that the item with id 123 has been deleted, and nothing in the body.

### HTTP:
 The GET request contains the following text:

```html
GET / HTTP/1.1
Host: www.codecademy.com
```

`HTTP/1.1` uses one connection more than once, so that additional content (like images or stylesheets) is retrieved even after the page has been retrieved. As a result, requests using HTTP/1.1 have less delay than those using HTTP/1.0.





## Interaction in Web Services
A web service should be platform independent ie application built in different technologies should be able to consume the output/data from it.   
`Request` is the method of communication where a client requests for a resource from the webservice.   
`Response` is the method where the requested information is sent back.   
`XML` (Extensible Markup language) and `JSON` are the popular languages used to perform this communication. 
- The client is known as the `service consumer` whereas the web service is referred to as the `service provider`.


### How does the client know how to interact with the Web Service

#### Service Definition
Is the contract between the service provider and service consumer
1. Request/Response Format
2. Request Structure
3. Response Structure
4. Endpoint - Refers to the URL where the services is exposed at


### MQTT vs HTTP

`MQTT` stands for Message Queing Telemetry Transport.   
It is a lightweight, open source and easy to implement messaging protocol mainly used by IOT devices due to its operability in low bandwidth and constrained Environment.
The clients are known as connected devices and the MQTT server is known as the MQTT Broker.   
The client `Publish` the topics based on the data it wants to send and the MQTT server/ allied devices `subscribes`to it. 
