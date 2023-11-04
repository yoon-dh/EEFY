from fastapi import FastAPI
from domain.ocr.router import ocr_router
from domain.stt.router import stt_router

app = FastAPI()
app.include_router(ocr_router.router)
app.include_router(stt_router.router)