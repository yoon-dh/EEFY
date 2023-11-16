import os
import shutil

from botocore.exceptions import ClientError
from fastapi import APIRouter, File, UploadFile
from domain.stt.service import stt_service

router = APIRouter(
    prefix="/api/ai/stt"
)


@router.post("")
async def speech_to_text(file: UploadFile = File(...)):
    return stt_service.get_speech_to_text(file)
