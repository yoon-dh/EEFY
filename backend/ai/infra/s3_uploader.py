import os
import uuid

import boto3
from botocore.exceptions import ClientError
from fastapi import UploadFile

client_s3 = boto3.client(
    service_name="s3",
    region_name="ap-northeast-2",
    aws_access_key_id=os.environ["S3_ACCESS_KEY"],
    aws_secret_access_key=os.environ["S3_SECRET_KEY"]
)


def upload_speech(file: UploadFile):
    # file_name = str(generete_uuid()) + file.filename

    try:
        client_s3.upload_file(
            os.getcwd() + "\\infra\\test.mp3",
            "eefy-bucket",
            "speech/test.mp3",
            ExtraArgs={'ContentType': 'mp3'}
        )

        print("생성 완료!!")
    except ClientError as e:
        print(f'Credential error => {e}')
    except Exception as e:
        print(f"Another error => {e}")

    file_url = "https://eefy-bucket.s3.ap-northeast-2.amazonaws.com/speech/test.mp3"

def generete_uuid():
    new_uuid = uuid.uuid4()
    return new_uuid
