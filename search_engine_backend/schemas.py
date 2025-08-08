from typing import List
from pydantic import BaseModel

class WebpageOut(BaseModel):
    id: int
    url: str
    title: str
    content: str
    keywords: List[str] 

    class Config:
        orm_mode = True
