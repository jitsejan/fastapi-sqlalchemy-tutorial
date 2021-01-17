# fastapi-sqlalchemy-tutorial
Simple tutorial setting up FastAPI with SQLAlchemy with a VueJS frontend. I have followed the [sql-database](https://fastapi.tiangolo.com/tutorial/sql-databases/) tutorial and combined it with the [VueJS CRUD](https://bezkoder.com/vue-js-crud-app/) article.

This project is still work in progress and mainly aims to get myself familair with FastAPI and recap working with an ORM. Eventually this project will grow and contain more models and more logic.

## Architecture

VueJS <> Axios <> FastAPI <> PostgreSQL

## Run
You will need a terminal to start the backend and one for the frontend. The backend API is running on port 8000 and the frontend on port 8081, both on localhost.

### Frontend

```bash
$ cd frontend
$ npm install
$ npm run serve
```

### Backend

```bash
$ pipenv shell
$ pipenv install
$ uvicorn backend.main:app
```


## Todo
- Form validation
- Extend CRUD actions
- Add authorization

## Sources
- https://fastapi.tiangolo.com/tutorial/sql-databases/
- https://bezkoder.com/vue-js-crud-app/
- https://github.com/tiangolo/full-stack-fastapi-postgresql
- https://github.com/dwisulfahnur/blog-fastapi-vuejs
