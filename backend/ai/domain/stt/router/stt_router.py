import os
import shutil

from botocore.exceptions import ClientError
from fastapi import APIRouter, File, UploadFile
from domain.stt.service import stt_service

router = APIRouter(
    prefix="/api/stt"
)

@router.post("")
async def speech_to_text(file: UploadFile = File(...)):
    # stt_service.get_speech_to_text(file)

    speech_dir = "domain/stt/speech"

    # # 디렉토리가 없으면 생성
    if not os.path.exists(speech_dir):
        os.makedirs(speech_dir)

    # 업로드된 파일의 내용을 읽어서 지정된 경로에 저장
    file_path = os.path.join(speech_dir, file.filename)
    with open(file_path, "wb") as audio_file:
        shutil.copyfileobj(file.file, audio_file)

    stt_service.get_speech_to_text(file_path)
    # path = await stt_service.get_speech_to_text(file.file)
    # s3 = s3_connection()
    #
    # try:
    #     s3.upload_file("{로컬에서 올릴 파일이름}","{버킷 이름}","{버킷에 저장될 파일 이름}")
    # except Exception as e:
    #     print(e)

    # tmp_directory = "/tmp"
    # if not os.path.exists(tmp_directory):
    #     os.makedirs(tmp_directory)
    #
    # temp_file_path = os.path.join(tmp_directory, file.filename)
    #
    # with open(temp_file_path, "wb") as temp_file:
    #     shutil.copyfileobj(await file.read(), temp_file)
    #
    # transcript = stt_service.get_speech_to_text(temp_file_path)
    #
    # os.remove(temp_file_path)

    # return transcript

