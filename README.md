# NestJs Template

## Description

NestJs is an example assignment while applying to development at VFA.

We're applying some keys:

1. MVC architecture.
2. RESTful API
3. E2E testing
4. AWS Intergration
5. Background processing task
6. Multi database
7. Typescript
8. Nodejs with Nestjs Framework

## Checklists

- [x] 1. Building the base project by MVC architecture.
- [x] 2. RESTful API support
- [x] 3. Authorization by API key use [PasspostJs](http://www.passportjs.org/docs/oauth/)
- [x] 4. Authentication by access key
- [x] 5. E2E testing for RESTful
- [x] 6. Logging in file
- [x] 7. Auto check syntax and convention rules
- [x] 8. Implementing automated build, test and deploy to CircleCI
- [x] 9. Swagger UI
- [x] 10. Migation MYSQL

## Installation

```bash
$ yarn
```

- Adds the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

```bash
 export RDS_ROOT_PASSWORD="admin@123"
 export RDS_DATABASE="db_template"
 export RDS_USERNAME="devUser"
 export RDS_PASSWORD="123456"
```

```bash
 $ cp .env.example .env
```

- Editing file `.env`

## Running the app

```bash
# development
$ yarn run start
# watch mode
$ yarn run start:dev
# production mode
$ yarn run start:prod
```

- Swagger: Open browser and go to http://localhost:3000/swagger, you can check your API here.

## Structure

1. Project configuration

```
.dockerignore             - docker ignore files
.lintstagerc              - tslint check config
.prettierignore           - prettier ignore files
.prettierrc               - prettier config
DockerFile                - Dockerfile
tsconfig.json             - typescript transpilation rule
tslint.json               - typescript lint rule
```


### Entities:

- **src/app/entities/\*.ts**
  - Declare all ORM. Currently, We use TypeORM to declare. Read more detail at [TypeORM](https://typeorm.io/#/).

## How to code a API

1. Create a file In directory src/app/modules

## Test

```bash
# unit tests
$ yarn run test
# e2e tests
$ yarn run test:e2e
# test coverage
$ yarn run test:cov
```

## Deploy your service

```bash
# Run command:
$ yarn start-docker


# Stop your service:
$ yarn stop-docker
```
