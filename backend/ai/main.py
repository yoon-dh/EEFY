from fastapi import FastAPI
from domain.ocr.router import ocr_router

app = FastAPI()
app.include_router(ocr_router.router)
