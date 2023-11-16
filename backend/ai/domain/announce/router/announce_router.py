from fastapi import APIRouter, File
from domain.announce.service.announce_service import evaluate_announce
from pydantic import BaseModel

class VoiceFilePath(BaseModel):
    voice_file_path: str
    script: str


router = APIRouter(
    prefix="/api/ai/announce"
)

@router.post("/evaluate")
def get_document(voice_file_path: VoiceFilePath):
    print("announce" + voice_file_path.voice_file_path)
    return evaluate_announce(voice_file_path.voice_file_path, voice_file_path.script)