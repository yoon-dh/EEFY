import os
from google.cloud import vision

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'english-study-manager-b6ecd35ea7d1.json'

def get_document_bounds(image_file):
    client = vision.ImageAnnotatorClient()
    breaks = vision.TextAnnotation.DetectedBreak.BreakType

    '''Path 방식'''
    # with open(image_file, "rb") as image_file:
    #     content = image_file.read()

    image = vision.Image(content=image_file)

    response = client.document_text_detection(image=image)
    document = response.full_text_annotation

    paragraphs = []
    lines = []
    for page in document.pages:
        for block in page.blocks:
            for paragraph in block.paragraphs:
                para = ""
                line = ""
                for word in paragraph.words:
                    for symbol in word.symbols:
                        line += symbol.text
                        if symbol.property.detected_break.type == breaks.SPACE:
                            line += ' '
                        if symbol.property.detected_break.type == breaks.EOL_SURE_SPACE:
                            line += ' '
                            lines.append(line)
                            para += line
                            line = ''
                        if symbol.property.detected_break.type == breaks.LINE_BREAK:
                            lines.append(line)
                            para += line
                            line = ''
                paragraphs.append(para)

    return paragraphs