# HTTP Requests - example 1
> Description of the chain of events when user creates a new note on the [example notes app](https://studies.cs.helsinki.fi/exampleapp/notes).

![Graphic depicting client-server communication when loading https://studies.cs.helsinki.fi/exampleapp/notes](./http-requests.png)

## Overview
> Review of HTTP Requests and their initiator
1. `HTTP POST	https://studies.cs.helsinki.fi/exampleapp/new_note` - via form submission
1. `HTTP GET	https://studies.cs.helsinki.fi/exampleapp/notes` - via form redirect
1. `HTTP GET	https://studies.cs.helsinki.fi/exampleapp/main.css` - via HTML document
1. `HTTP GET	https://studies.cs.helsinki.fi/exampleapp/main.js` - via HTML document
1. `HTTP GET	https://studies.cs.helsinki.fi/exampleapp/data.json` - via `main.js` execution

<!-- 
## Details
### Form Submission
- **Client** submits form which has a method of `POST`, and an action which points to `/new_note`, so it sends a *HTTP POST* request to `https://studies.cs.helsinki.fi/exampleapp/new_note`
	- **Server** responds with a status code `302` to redirect the client, the response has information in the header to let the client know where to redirect to: `/notes`.

### Data Updated
- **Server** immediately invokes a function to parse the data received in the `body` of the POST request and update the stored data (in this case, the storage is a simple array of objects, so the data will be pushed onto the array). 

### Redirecting and Initial Rendering
- **Client** makes a *HTTP GET* request to `https://studies.cs.helsinki.fi/exampleapp/notes`
	- **Server** responds with an HTML document, encoding information is passed along so that the client knows how to parse and render the document.
- **Client** parses document and understands that it will require the resources `main.css` and `main.js`, it will send two additional HTTP GET requests to `https://studies.cs.helsinki.fi/exampleapp/main.css` and `https://studies.cs.helsinki.fi/exampleapp/main.js` respectively
	> NOTE: in most cases, this these files were likely cached, so the client would skip making requests for these resources
	- **Server** responds with each requested resource

### Script Execution and Hydrating the DOM
- **Client** parses and executes the `main.js` which contains a function to send an another *HTTP GET* request to `https://studies.cs.helsinki.fi/exampleapp/data.json`
	- **Server** responds with JSON data.
- **Client**, a callback function awaiting the response from the server is evoked and the incoming JSON data is parsed, and new HTML elements are created via the DOM API. -->