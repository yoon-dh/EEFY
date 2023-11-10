from fastapi import FastAPI
from py_eureka_client import eureka_client
from domain.ocr.router import ocr_router
from domain.stt.router import stt_router

app = FastAPI()
app.include_router(ocr_router.router)
app.include_router(stt_router.router)

your_rest_server_port = 8000


@app.on_event("startup")
async def startup_event():
    await eureka_client.init_async(eureka_server="http://k9b306.p.ssafy.io:8761",
                                   app_name="ai-service",
                                   instance_host="k9b306.p.ssafy.io",
                                   instance_port=8001)
