import os

import openai

openai.api_key = os.environ["OPENAI_API_KEY"]

def get_speech_to_text(file_path: str):
    audio_file = open(file_path, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)

    print(transcript)
    return transcript