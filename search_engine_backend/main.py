from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List
from db_settings import SessionLocal
from models import Webpage
from schemas import WebpageOut

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/test')
def test_fun():
    return {"message": "hello world!!"}

@app.get("/webpages/", response_model=List[WebpageOut])
def read_webpages(db: Session = Depends(get_db)):
    return db.query(Webpage).all()
