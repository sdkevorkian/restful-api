#Making a RESTful API

##Overview

In the past, we used API endpoints provided by iTunes and OMDB. These APIs provide a search interface where we can submit queries and get responses. Since these responses are returned as JSON instead of HTML, we can easily incorporate these APIs into our applications.

Modern web development revolves around creating APIs for this purpose. However, there's some additional purposes, such as being able to use the server application with multiple **clients**. In Rails and Express, we assumed that our only client was a web browser. In reality, today's IOT (Internet of Things) provides the potential for unlimited clients, meaning we can't just send HTML to every client.

![API](http://www.happiestminds.com/pes-solutions/web-scraping-api/img/api-services.png)

By providing a RESTful API and sending data using a specific format (JSON), we can incorporate our server into multiple different applications.

Why introduce this? We'll find that these concepts fit right into our next framework, **Angular.JS**. Near the end of the Angular unit, we'll be incorporating this API with an Angular app.

##Assignment

* Create a RESTful API using Express, Mongoose, and JWT for authentication
* Do not incorporate any HTML or EJS templates, with the exception of the home page. Your API will provide the endpoints listed at the bottom.

##Pair Programming

If you'd like, feel free to practice **pair programming** on this assignment. Definition:

> Pair programming consists of two programmers sharing a single workstation (one screen, keyboard and mouse among the pair). The programmer at the keyboard is usually called the "driver", the other, also actively involved in the programming task but focusing more on overall direction is the "navigator"; it is expected that the programmers swap roles every few minutes or so. See more at: http://guide.agilealliance.org/guide/pairing.html#sthash.xsWVt7Ee.dpuf

##API Endpoints (Minimum)

* Homepage (optional)
  * GET /
    * display a nice welcome page to your API, and maybe include instructions on how to use it
* User
  * GET /api/users
    * display all users
  * POST /api/users
    * create a new user
* Authentication
  * POST /api/auth
    * ask and receive a JWT token
* Coffee (you can also use a different model/attributes if you wish. This model should require authentication)
  * GET /api/coffees
    * display all coffees
  * POST /api/coffees
    * create a new coffee
  * GET /api/coffees/:id
    * display a specific coffee
  * PUT /api/coffees/:id
    * edit a specific coffee
  * DELETE /api/coffees/:id
    * delete a specific coffee

##Attributes for the Coffee model

* Name
* Size
* Shots
* Type of milk
