from fastapi import APIRouter, File
from domain.announce.service.announce_service import evaluate_announce

router = APIRouter(
    prefix="/api/ai/announce"
)

@router.get("/evaluate/{voice_file_path}")
def get_document(voice_file_path):
    print("announce" + voice_file_path)
    return evaluate_announce(voice_file_path)