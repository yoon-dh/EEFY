'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

// api
import { classCheck } from '@/api/Class/classlist';
import { postHomeworkAssignClass } from '@/api/Library/AssignHomeworkApi';

import * as S from '@/styles/MainStyle.style';
import AssignClassBox from './AssignClassBox';

type Class = {
  id: number;
  title: string;
  studentCnt: number;
  content: string;
};

function AssignHomeworkComponent() {
  const HOMEWORK_ID = useParams();
  const router = useRouter();

  const [classList, setClassList] = useState<Class[]>([]);
  const [classCnt, setClassCnt] = useState<number>(0);

  // 체크박스 ---
  const [checkedClassList, setCheckedClassList] = useState<number[]>([]);
  const [itemStates, setItemStates] = useState<boolean[]>(new Array(classList.length).fill(false));

  const handleCheckedList = (classId: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedClassList(prev => [...prev, classId]);
      setClassCnt(prev => prev + 1);
      return;
    }
    if (!isChecked && checkedClassList.includes(classId)) {
      setCheckedClassList(prev => prev.filter(item => item !== classId));
      setClassCnt(prev => prev - 1);

      return;
    }
    return;
  };

  const handleItemClick = (index: number, classId: number) => {
    const newitemStates = [...itemStates];
    newitemStates[index] = !newitemStates[index];
    setItemStates(newitemStates);
    handleCheckedList(classId, newitemStates[index]);
  };
  //---

  const CompleteHandler = async () => {
    if (classCnt === 0) {
    } else {
      await checkedClassList.forEach(async (currentElement, index) => {
        if (typeof HOMEWORK_ID.homeworkId === 'string') {
          let requestData = {
            classId: currentElement,
            dueDate: new Date(),
            homeworkId: parseInt(HOMEWORK_ID.homeworkId, 10),
          };
          const jsonBlob = new Blob([JSON.stringify(requestData)], {
            type: 'application/json',
          });
          const res = await postHomeworkAssignClass(jsonBlob);
        }
      });
      router.push('/main/library/teacher');
    }

    // alert('클래스에 과제가 등록되었습니다.');
  };

  // 클래스 리스트 호출
  useEffect(() => {
    // 클래스 리스트 호출
    const fetchData = async () => {
      const result = await classCheck(0, null);
      setClassList(result.studyClassList);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='flex justify-between items-center' style={{ flex: 1 }}>
        <div style={{ fontSize: '28px', flex: '1.5', display: 'flex', alignItems: 'center' }}>
          클래스 선택 <span style={{ color: '#4f4d4d81' }}>({classCnt})</span>
        </div>
      </div>
      <div style={{ flex: 9 }}>
        <S.MainContainer className='relative w-full h-full flex flex-wrap' style={{ border: '1px solid rgba(131, 129, 129, 0.2)' }}>
          {classList.length !== 0 && (
            <div className='absolute overflow-auto no-scrollbar flex flex-wrap' style={{ top: '2%', bottom: '10%', right: '3%', left: '3%' }}>
              <div className='w-full flex flex-wrap gap-x-10 gap-y-6 overflow-auto'>
                {classList.map((item, idx) => (
                  <div key={idx} onClick={() => handleItemClick(idx, item.id)}>
                    <AssignClassBox classId={item.id} title={item.title} cnt={item.studentCnt} $isActive={itemStates[idx]} />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className='absolute text-2xl' style={{ bottom: '2%', right: '3%' }} onClick={CompleteHandler}>
            COMPLETE
          </div>
        </S.MainContainer>
      </div>
    </>
  );
}

export default AssignHomeworkComponent;
