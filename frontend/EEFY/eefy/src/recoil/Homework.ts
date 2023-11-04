import { atom } from 'recoil';

const dummyData = [];

for (let i = 1; i <= 26; i++) {
  dummyData.push({
    id:`${i}`,
  });
}

export const HomeworkCount = atom({
  key: 'HomeworkCount',
  default: [...dummyData]
})

export const HomeworkProblem = atom({
  key: 'HomeworkProblem',
  default: {
    Title:'',
    ProblemList:[{
    title:'26. The Nuer에 관한 다음 글의 내용과 일치하지 않는 것은?',
    content:`The Nuer are one of the largest ethnic groups in South Sudan, primarily residing in the Nile River Valley. The Nuer 
    are a cattle-raising people, whose everyday lives revolve 
    around their cattle. They have various terms related to cattle, 
    so they can distinguish between hundreds of types of cows, 
    based on color, markings, and shape of horns. They prefer to 
    be called by the names of the cattle they raise. The commonest 
    daily foods for the Nuer are dairy products, especially milk for 
    the young and soured milk, like yogurt, for adults. And wild 
    fruits and nuts are favorite snacks for the Nuer. The Nuer also 
    have a culture of counting only older members of the family. 
    They believe that counting the number of children one has 
    could result in misfortune and prefer to report fewer children 
    than they have.`,
    NumList:[
      {
        id:'1',
        title:'주로 Nile River Valley에 거주한다'
      },
      {
        id:'2',
        title:'소와 관련된 다양한 용어를 가지고 있다.'
      },
      {
        id:'3',
        title:'자신들이 기르는 소의 이름으로 불리는 것을 선호한다.'
      },
      {
        id:'4',
        title:'가장 일반적인 일상 음식은 유제품이다'
      },
      {
        id:'5',
        title:'어린 자녀의 수를 세는 것이 행운을 가져온다고 믿는다.'
      },
    ]
  }]}
})

export const Category = atom({
  key: 'Category',
  default: ''
})