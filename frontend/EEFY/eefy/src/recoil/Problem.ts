import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// 더미데이터
const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 10; i++) {
    const homeworkQuestion = {
      id: i,
      homeworkId: i,
      title: `Question ${i}`,
      content: `allowed the creation of a new kind of knowledge. Diaries were 
      central media through which enlightened and free subjects 
      could be constructed. They provided a space where one could 
      write daily about her whereabouts, feelings, and thoughts. 
      Over time and with rereading, disparate entries, events, and 
      happenstances could be rendered into insights and narratives 
      about the self, and allowed for the formation of subjectivity. It 
      is in that context that the idea of “the self [as] both made and 
      explored with words” emerges. Diaries were personal and 
      private; one would write for oneself, or, in Habermas ${i}`,
      filePath: `Path/To/File${i}.txt`,
      type: "CHOICE",
      answer: `1`
    };

    const choices = [
      {
        content: `Choice 1 for Question ${i}`,
        number: "1"
      },
      {
        content: `Choice 2 for Question ${i}`,
        number: "2"
      },
      {
        content: `Choice 1 for Question ${i}`,
        number: "3"
      },
      {
        content: `Choice 2 for Question ${i}`,
        number: "4"
      },
    ];

    dummyData.push({
      homeworkQuestion,
      choices,
    });
  }

  return dummyData;
};

let submitAnswer = [];

for (let i = 1; i <= 10; i++) {
  const solvedProblem=null
  submitAnswer.push({
    solvedProblem,
  });
}

const dummyData = generateDummyData();
console.log(dummyData);


const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'problemData',
  storage: localStorage,
});


export const problemData = atom({
  key: 'problemData',
  default: dummyData,
  effects_UNSTABLE: [persistAtom],
});

export const SolvedProblem = atom({
  key: 'SolvedProblem',
  default: submitAnswer,
});

export const homeworkPage = atom({
  key: 'homeworkPage',
  default: 'problem',
});
