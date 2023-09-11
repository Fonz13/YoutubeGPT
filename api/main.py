from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware
from routers import url, chat

app = FastAPI()


origins = ["http://localhost:3000",]

    
app.include_router(url.router)
app.include_router(chat.router)


app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])


