# mock-data-generator
Showcase of getting started with Docker for demo purposes.

## Prerequisite

* [Docker](https://www.docker.com/)
* [Node](https://nodejs.org/en/) (Tested on Node 8)
* [npm](https://www.npmjs.com/)
* [MongoDB Compass](https://www.mongodb.com/download-center/compass)

## Getting started

```
docker-compose up -d
```

Will run the services, the following services are ran within Docker:

* Mongo (Port: 27017)

Under `api`, running the following will run the API service:

```
npm install
npm run dev
```

The API has the following routes:

```
GET /random/data [Returns a random mixture of data]
POST /generate/data/:type [Generates random data and stores in the MongoDB]
GET /generated/data/:type [Returns random data previously generated]
```