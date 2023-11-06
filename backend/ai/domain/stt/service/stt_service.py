import os
import shutil
import uuid

import openai
from fastapi import UploadFile, File

from domain.stt.schemas.stt_result_response import SttResultResponse

openai.api_key = os.environ["OPENAI_API_KEY"]


def get_speech_to_text(file: UploadFile = File(...)):
    speech_dir = "domain/stt/speech"

    if not os.path.exists(speech_dir):
        os.makedirs(speech_dir)

    file_extension = file.filename.split(".")[-1]

    if file_extension == "mp4": filename = f"{str(uuid.uuid4())}.mp4"
    if file_extension == "mp3": filename = f"{str(uuid.uuid4())}.mp3"

    # 업로드된 파일의 내용을 읽어서 지정된 경로에 저장
    file_path = os.path.join(speech_dir, file.filename)
    with open(file_path, "wb") as audio_file:
        shutil.copyfileobj(file.file, audio_file)
    file.file.close()

    audio_file = open(file_path, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)['text']
    audio_file.close()

    os.remove(file_path)

    return SttResultResponse(transcript)


def generate_uuid():
    new_uuid = uuid.uuid4()
    return new_uuid
