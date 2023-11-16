import FileUpload from '@/components/Main/Library/Homework/Create/Reading/FileUpload';
import { useRecoilState } from 'recoil';
import { OcrData } from '@/recoil/Library/CreateHomework/CreateReading';
import * as S from '@/styles/MainStyle.style';
import ProblemBox from '@/components/Main/Library/Homework/Create/Reading/ProblemBox';
import CropperModal from '@/components/Main/Library/Homework/Create/Reading/CropperModal';
import SaveQuestions from './SaveQuestions';

function CreateReadingComponent() {
  const [ocrDatas, setOcrDatas] = useRecoilState(OcrData);
  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridTemplateAreas: "'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'd d d d' ",
    rowGap: '3%',
    columnGap: '3%',
  };

  return (
    <div className='w-full h-full' style={{ padding: '2% 3%' }}>
      <div className='w-full h-full' style={mainStyle}>
        <S.MainContainer style={{ gridArea: 'b', padding: '2% 3% 0% 3%' }}>
          {ocrDatas.pdfFile || ocrDatas.imgUrl ? (
            <>
              <div className='w-full h-full flex justify-center items-center'>
                {!ocrDatas.isSuccess ? (
                  <>
                    <CropperModal />
                  </>
                ) : (
                  <>
                    <ProblemBox />
                  </>
                )}
              </div>
            </>
          ) : (
            <div className='w-full h-full flex flex-col justify-center items-center text-xl gap-5'>
              <div>파일을 업로드한 후 영역을 선택해주세요.</div>
              {/* <div>파일을 저장하면 더 이상 수정이 불가능합니다.</div> */}
            </div>
          )}
        </S.MainContainer>
        <S.MainContainer style={{ gridArea: 'c', padding: '5% 3%' }}>
          <SaveQuestions />
        </S.MainContainer>
        <div className='flex items-end' style={{ gridArea: 'd' }}>
          <FileUpload />
        </div>
      </div>
    </div>
  );
}

export default CreateReadingComponent;
