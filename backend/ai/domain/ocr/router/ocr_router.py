from fastapi import APIRouter, File
from domain.ocr.service.ocr_service import get_document_bounds

router = APIRouter(
    prefix="/api/ocr"
)

@router.post("/document")
def get_document(image_file: bytes = File()):
    return get_document_bounds(image_file=image_file)