from pydantic import AnyHttpUrl, BaseSettings
from typing import Any, Dict, List, Optional, Union

class Settings(BaseSettings):
    NAME: str
    API_ENDPOINT: str
    BACKEND_CORS_ORIGINS:List[AnyHttpUrl] = []
    
    
    STORAGE_DIRECTORY: str

    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_SERVER: str
    POSTGRES_DB: str
    POSTGRES_PORT: str

    OPENAI_API_KEY: str

    class Config:
        env_file = ".env"
    

settings = Settings()
