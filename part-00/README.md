# Part 0 - Fundamentals of Web Apps
> - [Source](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)
> - [Skip to Exercises](#exercises)

## Notes
### HTTP protocol
- HTTP is like the language of client (browser) `<->` server (host) 
communication. 

#### HTTP GET
- The GET method is used to request data (See also HTTP POST, 
HTTP PUT, HTTP DELETE).
- HTTP requests are always initiated by the client 
and the server sends a response. 
- e.g. 
	1. The client sends an HTTP GET request to server hosting 
	https://studies.cs.helsinki.fi/exampleapp.
	1. The server responds with encoded data and metadata so that 
	the client can understand it should render it as HTML. The client parses 
	the HTML document and finds an `img` tag pointing to another resource.
	1. The client sends another HTTP GET request to server to retrieve the 
	`img` resource at https://studies.cs.helsinki.fi/exampleapp/kuva.png.
	1. The server responds by sending the resource back.

- In traditional web applications the browser is "dumb". It 
only fetches HTML data from the server, and all application 
logic is on the server. This is now outdated thinking.

### Event handlers and Callback functions
- When the state of the object changes, the browser calls the event 
handler finction. Event handler functions are often called callback functions. 
The functions are invoked by the runtime environment, (i.e. the browser).

### Document Object Model (DOM)
- How the HTML document is depicted in the browser, as a tree structure. Each element 
is a node, many nodes can contain other child nodes, some cannot.
- The DOM is an API which allows programmatic modification of the element 
trees that make up the HTML document's tree structure.

### HTTP POST 
- A request made to send data to the server, the POST data may be as simple as hitting 
the endpoint with the proper Headers, or there may be encoded data passed in the 
request object's body property.
- forms example
	1. A form HTTP POST request from a client sends the form submission along 
	in the body object.
	1. The server parses the request body to get the form contents, and updates the 
	store (could be a database, or simply an object persisted while the server is running).
	1. The server responds with a status code and instructions for redirection, in this case, 
	the redirect is back to the same page. 
	1. The client handles the redirect by performing a HTTP GET request to the endpoint 
	specified.

### AJAX

- Asynchronous JavaScript and XML: A term to describe the incremental fetching 
and rendering content using JS. This approached allowed an HTML document to be 
rendered and altered by response data from JS callbacks. Rather than constantly 
requesting an entirely new document for different views, the JS would modify and 
re-render pieces of the DOM as needed.

### Single Page Application (SPA)
- A SPA will initialize by fetching one HTML document from the server, typically 
the document has little structure beyond the basic template HTML document. The DOM 
(and thus the views) are created through the execution of client-side JavaScript scripts.

## Exercises
- [Exercise 0.4](./exercise-0.4): Explanation of network calls when client submits form on [example notes app](https://studies.cs.helsinki.fi/exampleapp/notes).
- [Exercise 0.5](./exercise-0.5): Explanation of network calls when client visits [example SPA notes app](https://studies.cs.helsinki.fi/exampleapp/spa).
- [Exercise 0.6](./exercise-0.6): Explanation of network calls when client submits form on [example SPA notes app](https://studies.cs.helsinki.fi/exampleapp/spa).
 
