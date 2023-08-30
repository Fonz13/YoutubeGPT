from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel
from get_transcript import get_transcript
import time

from fastapi.middleware.cors import CORSMiddleware
 

app = FastAPI()


origins = ["http://localhost:3000",]

class videoURL(BaseModel):
    URL: str
    
class urlResponse(BaseModel):
    Status: str
    Message: str
    VideoID: Optional[str] = None
    
class chatRequest(BaseModel):
    VideoID: str
    Message: str
    
class chatResponse(BaseModel):
    Status: str
    Message: str
    

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])


@app.get("/")
def home():
    return {"Hello": "World"}

@app.post("/create-summary/")
def create_transcipt(video_url: videoURL):
    time.sleep(1)
    return_message = get_transcript(video_url.URL)
    return urlResponse(**return_message)


@app.post("/chat-req/")
def create_transcipt(chat_request: chatRequest):
    return_message = "Chat request received"
    time.sleep(1)
    return urlResponse(**{"Status": "OK", "Message": return_message})



