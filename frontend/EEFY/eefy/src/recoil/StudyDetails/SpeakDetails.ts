import { atom } from 'recoil';

interface WorkbookInfoTypes {
  id: number | null;
  title: string;
  pages: number;
}

interface QuestionInfoTypes {
  id: number | null;
  page: number;
  script: string;
  url: any;
}

interface StudentQuestionInfoTypes {
  id: number;
  page: number;
  data: null | { script: string; url: string; pScore: number; sScore: number };
}

// 과제 정보
export const WorkbookInfo = atom<WorkbookInfoTypes>({
  key: 'WorkbookInfo',
  default: {
    id: null, // 과제 Id
    title: '', // 과제 title
    pages: 0, // 과제 문제수
  },
});

// 현재 페이지의 문제 정보
export const QuestionInfo = atom<QuestionInfoTypes>({
  key: 'QuestionInfo',
  default: {
    id: null, // 현재 문제 Id
    page: 0, // 현재 문제 페이지 번호
    script: '',
    url: '',
  },
});

// 학생이 푼 문제 정보
export const StudentQuestionInfo = atom<StudentQuestionInfoTypes>({
  key: 'StudentQuestionInfo',
  default: {
    id: 0, // 현재 문제 아이디
    page: 0, // 현재 문제 번호
    data: {
      script:
        "The vast expanse of the Grand Canyon in Arizona, USA, is a sight to behold. Carved by the Colorado River over millions of years, the canyon's layered red rock formations tell a geological story that stretches back eons. Visitors from around the world come to admire its breathtaking beauty and hike its rugged trails, offering a deep connection with nature and a profound sense of wonder. The vast expanse of the Grand Canyon in Arizona, USA, is a sight to behold. Carved by the Colorado River over millions of years, the canyon's layered red rock formations tell a geological story that stretches back eons. Visitors from around the world come to admire its breathtaking beauty and hike its rugged trails, offering a deep connection with nature and a profound sense of wonder.", // 스크립트
      url: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3', // 녹음파일
      pScore: 0, // 발음 평가 점수
      sScore: 0, // 단어 유사도 점수
    },
  },
});

interface RequestHomeworkInfoTypes {
  homeworkQuestionId: number;
  homeworkStudentId: number;
  submitAnswer: string;
  voiceFile: any;
}
// 학생 풀이
export const RequestHomeworkInfo = atom<RequestHomeworkInfoTypes>({
  key: 'RequestHomeworkInfo',
  default: {
    homeworkQuestionId: 0,
    homeworkStudentId: 0,
    submitAnswer: '',
    voiceFile: undefined,
  },
});

// 학생이 문제 푼 여부
export const IsSolved = atom<boolean>({
  key: 'IsSolved',
  default: false, // 해당 문제를 풀었는지
});

// 녹음중
export const IsRecording = atom<boolean>({
  key: 'IsRecording',
  default: false,
});

// 모달창
export const IsModalOpen = atom<boolean>({
  key: 'IsModalOpen',
  default: false,
});

// 학생이 녹음한 음성 파일 - 제출 전
export const RecordAudioUrl = atom<undefined | any | File>({
  key: 'RecordAudioUrl',
  default: 'string',
});

export const SolvedProblemInfo = atom<any>({
  key: 'SolvedProblemInfo',
  default: {},
});
