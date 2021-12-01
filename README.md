# NodeJS REST API Example
[comment]: <> ([![Build Status]&#40;https://travis-ci.org/jaredpetersen/nodejs-api-template.svg?branch=master&#41;]&#40;https://travis-ci.org/jaredpetersen/nodejs-api-template&#41;)

Example of Node.js REST API

[comment]: <> (## Endpoints)

[comment]: <> (* `GET /health`: Gets API health status)

[comment]: <> (* `GET /tasks`: Lists all tasks)

[comment]: <> (* `POST /tasks`: Intentionally buggy route, returns an error)

[comment]: <> (* `null`: Default route, returns 404 as the endpoint requested does not exist)

## Usage
For node environment in windows
```
npm install -g win-node-env
```

Test and Run server
```
npm install
npm test
npm run coverage
npm start
```

For debug
```
npm run debug
```

In Chrome run  
```
chrome://inspect/#devices
```
Pres CONFIGURE button and select host and port 
```
localhost:9229
```
In Remote Target will be a link to debug window
