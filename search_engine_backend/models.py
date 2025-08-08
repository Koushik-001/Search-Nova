from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.dialects.postgresql import TSVECTOR

Base = declarative_base()

class Webpage(Base):
    __tablename__ = "webpages"

    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, unique=True, index=True)
    title = Column(String)
    content = Column(Text)
    keywords = Column(String)
    vector = Column(TSVECTOR) 
