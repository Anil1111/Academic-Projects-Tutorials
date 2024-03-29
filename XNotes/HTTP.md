# HTTP

## HTTP Status Code

HTTP status codes are generated by a web server every time a file is requested.

### 1×× Informational HTTP status codes

The 1xx status codes are informational requests. They indicate that the server received and understood the request and that the browser should wait a little longer for the server to process the information

- `100 Continue`
- `101 Switching Protocols`
- `102 Processing`

### 2×× Success codes HTTP status codes

These are the successful requests. Meaning, your request to access a file was successful.

- `200 OK` the request was received and processed successfully.
- `201 Created` The resource was created and the server has acknowledged it. It could be useful on responses to POST or PUT requests. Additionally, the new resource could be returned as part of the response body.
- `202 Accepted` The client's request has been received but the server is still processing it.
- `203 Non-authoritative Information` The response that the server sent to the client is not the same as it was when the server sent it.
- `204 No Content` The action was successful but there is no content returned. Useful for actions that do not require a response body, such as a DELETE action.
- `205 Reset Content` The client should refresh the document sample.
- `206 Partial Content` The server is sending only a portion of the resource.
- `207 Multi-Status`  The message body that follows is by default an XML message and can contain a number of separate response codes.
- `208 Already Reported` The members of a WebDAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
- `226 IM Used`

### 3×× Redirection HTTP status codes

The 3xx HTTP status codes indicate a redirection. When a user or search engines come across a 3xx status code, they will be redirected to a different URL from the initial

- `300 Multiple Choices`  The request the client made has several possible responses.
- `301 Moved Permanently` This resource was moved to another location and the location is returned.
- `302 Found` A website or page has been moved to a different URL temporarily. It's another status code relevant to SEO.
- `303 See Other` the server is not redirecting them to the requested resource but to another page.
- `304 Not Modified`  The requested resource has not been changed since the previous transmission.
- `305 Use Proxy` The client can only access the requested resource through a proxy that's given in the response.
- `307 Temporary Redirect` The server tells the client that the resource they look for has been redirected temporarily to another URL.
- `308 Permanent Redirect` The server tells the client that the resource they look for has been redirected permanently to another URL.

### 4×× Client Error HTTP status codes

The 4xx status codes are client errors.It means that the page wasn't found, and something is wrong with the request. Something that is happening on the client-side is the issue.

- `400 Bad Request` The request issued has problems (for example, might be lacking some required parameters). A good addition to a 400 response might be an error message that a developer can use to fix the request.
- `401 Unauthorized` Especially useful for authentication when the requested resource is not accessible to the user owning the request
- `402 Payment Required`
- `403 Forbidden` The resource is not accessible, but unlike 401, authentication will not affect the response.
- `404 Not Found` The URL provided does not identify any resource.
- `405 Method Not Allowed` The HTTP verb(e.g POST, GET, PUT etc)used on a resource is not allowed — for instance, doing a PUT on a resource that is read-only.
- `406 Not Acceptable`
- `407 Proxy Authentication Required` This status code is similar to 401 Unauthorized. The only difference is that authorization needs to be done by a proxy.
- `408 Request Timeout` : The request the client sent to the website server has expired.
- `409 Conflict`  The request that it was sent conflicts with the server's internal operations.
- `410 Gone` The resource the client wants to access has been permanently erased.
- `411 Length Required`
- `412 Precondition Failed`
- `413 Payload Too Large`
- `414 Request-URI Too Long`
- `415 Unsupported Media Type`
- `416 Requested Range Not Satisfiable`
- `417 Expectation Failed`
- `418 I'm a teapot`
- `421 Misdirected Request`
- `422 Unprocessable Entity`
- `423 Locked`
- `426 Upgrade Required`
- `428 Precondition Required`
- `429 Too Many Requests`
- `431 Request Header Fields Too Large`
- `444 Connection Closed Without Response`
- `451 Unavailable For Legal Reasons`
- `499 Client Closed Request`

### 5×× Server Error HTTP status codes

The 5xx HTTP status codes are server errors.

- `500 Internal Server Error` A generic error code when an unexpected condition is met and the server crashes. Normally, this response is accompanied by an error message explaining what went wrong.
- `501 Not Implemented` The server doesn't know or can resolve the request method sent by the client.
- `502 Bad Gateway` The server was acting as a gateway or proxy and received an invalid message from an inbound server.
- `503 Service Unavailable` The server was unable to handle your HTTP request at the time. This could be due to server crash, server maintenance, server overload, or other reasons
- `504 Gateway Timeout`
- `505 HTTP Version Not Supported`
- `506 Variant Also Negotiates`
- `507 Insufficient Storage`
- `508 Loop Detected`
- `510 Not Extended`
- `511 Network Authentication Required`
- `599 Network Connect Timeout Error`
