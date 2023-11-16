from fastapi import FastAPI
from py_eureka_client import eureka_client
from starlette.responses import JSONResponse
from starlette.routing import Route

from domain.announce.router import announce_router
from domain.ocr.router import ocr_router
from domain.stt.router import stt_router
from starlette_zipkin import ZipkinMiddleware, ZipkinConfig

routes = Route("/", JSONResponse({"status": "OK"}))

app = FastAPI()

config = ZipkinConfig(
    host="13.209.81.177",
    port=9411,
    service_name="ai-service",
    sample_rate=1.0
)

app.add_middleware(ZipkinMiddleware, config=config)
app.include_router(ocr_router.router)
app.include_router(stt_router.router)
app.include_router(announce_router.router)

your_rest_server_port = 8000


@app.on_event("startup")
async def startup_event():
    await eureka_client.init_async(eureka_server="http://k9b306.p.ssafy.io:8761",
                                   app_name="ai-service",
                                   instance_host="k9b306.p.ssafy.io",
                                   instance_port=8001)
