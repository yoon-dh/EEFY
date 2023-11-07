from fastapi import FastAPI
from py_eureka_client import eureka_client
from fastapi.middleware.cors import CORSMiddleware

from domain.announce.router import announce_router
from domain.ocr.router import ocr_router
from domain.stt.router import stt_router

app = FastAPI()
app.include_router(ocr_router.router)
app.include_router(stt_router.router)
app.include_router(announce_router.router)

your_rest_server_port = 8000

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"]
)

@app.on_event("startup")
async def startup_event():
    await eureka_client.init_async(eureka_server="http://k9b306.p.ssafy.io:8761",
                                   app_name="ai-service",
                                   instance_host="k9b306.p.ssafy.io",
                                   instance_port=8001)
