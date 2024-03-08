//Fetch API in javscript:

//Fetch API provides an interface for fetching(sending/receiving) resources.

//fetch() method is used to fetch a resource(data)

/*
fetch(): JavaScript fetch() method is used to make network requests, typically to fetch resources from a server. It returns a Promise that resolves to the Response object representing the response to the request.

fetch('url',[options]) // api for the get request
    .then(response => response.json())
    .then(data => console.log(data));

1. Fetch also integrates advanced HTTP concepts such as CORS and other extensions to HTTP.
2. URL: It is the URL to which the request is to be made.
3. Options: It is an array of properties. It is an optional parameter.
*/

//getting data
fetch("https://jsonplaceholder.typicode.com/users")
  .then((respoonse) => {
    //console.log(respoonse);
    return respoonse.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//inserting data on server
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); //{ title: 'foo', body: 'bar', userId: 1, id: 101 }
