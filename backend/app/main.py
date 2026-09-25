from fastapi import FastAPI
from sqlalchemy import text

from app.database.connection import engine


app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "Medicare Plus API is running"
    }


@app.get("/test-db")
def test_database():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))

        return {
            "database": result.scalar()
        }