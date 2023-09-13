from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware
from api.routers import url, chat
from config import settings

app = FastAPI()


origins = settings.BACKEND_CORS_ORIGINS

    
app.include_router(url.router)
app.include_router(chat.router)


app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])


