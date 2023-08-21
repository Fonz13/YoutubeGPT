from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel
from get_transcript import get_transcript

from fastapi.middleware.cors import CORSMiddleware
 

app = FastAPI()


origins = ["http://localhost:3000",]

class VideoURL(BaseModel):
    URL: str

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])


@app.get("/")
def home():
    return {"Hello": "World"}

@app.post("/create-transcript/")
def create_transcipt(video_url: VideoURL):
    transcript = get_transcript(video_url.URL)
    return transcript



