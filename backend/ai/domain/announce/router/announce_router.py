from fastapi import APIRouter, File
from domain.announce.service.announce_service import evaluate_announce

router = APIRouter(
    prefix="/api/ai/announce"
)

@router.post("/evaluate")
def get_document(voice_file: bytes = File()):
    return evaluate_announce(voice_file)