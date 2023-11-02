# Sunbucks
## Concept
Sunbucks is a coffee shop that offers milkshakes, cakes and, obviously, coffee. On a thematic level the project does not have much relevance, the important thing is the set of technologies with which I have been able to experiment to carry it out.

## Frontend
Sunbucks is not a web application, but a mobile application, with the aim of reaching the widest possible audience we bet on a technology that would allow us to bring Sunbucks to both Android and iOS devices, in this case it is React Native.

Taking advantage of the experience I have developing in React I wanted to work on a project using React Native.

## Backend
At the Backend level is where we have been able to experiment the most, designing a microservices system that divides the application into 3 microservices: products, inventory and orders.

Spring Cloud Api Gateway is used to unify the microservices addresses under a single url. In addition, Eureka Netflix is used as a Discovery Service to locate the microservices and balance the load between them.

For credential security, it uses the OAuth 2.0 method, using Keycloak as authentication server. In addition to using Spring security to work with roles and jwt.

For event management it uses Kafka together with Zoekeeper, in order to launch a notification when a successful order has been placed in the app.

For data persistence, each microservice uses its own PostgreSQL database.

For system observability, Zipkin is used to monitor user requests and Prometheus together with Grafana to observe various performance and health parameters of the system.

Finally, it is possible to find a Postman collection with all the endpoints offered by the system to execute all its functionalities.
