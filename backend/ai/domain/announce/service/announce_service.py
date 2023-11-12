import os

import urllib3
import json
import base64
import urllib.request

openApiURL = "http://aiopen.etri.re.kr:8000/WiseASR/Pronunciation"  # 영어

def evaluate_announce(voice_file):
    response = urllib.request.urlopen(voice_file)
    data = response.read()
    accessKey = os.getenv("ETRI_API_KEY")
    languageCode = "english"
    # script = "PRONUNCIATION_SCRIPT"

    audioContents = base64.b64encode(data).decode("utf8")

    requestJson = {
        "argument": {
            "language_code": languageCode,
            # "script": script,
            "audio": audioContents
        }
    }

    http = urllib3.PoolManager()
    response = http.request(
        "POST",
        openApiURL,
        headers={"Content-Type": "application/json; charset=UTF-8", "Authorization": accessKey},
        body=json.dumps(requestJson)
    )

    print("[responseCode] " + str(response.status))
    print("[responBody]")
    print(str(response.data, "utf-8"))
    load = json.loads(response.data)
    return load["return_object"]["score"][0]
