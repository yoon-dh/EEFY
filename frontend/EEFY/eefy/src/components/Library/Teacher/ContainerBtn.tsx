import { useState } from 'react';
import { Title, Tab, SearchInput, CreateBtn } from './ContainerBtn.style';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation'; 
function ContainerBtn() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Number>(1);
  const [search, setSearch] = useState<string>('');

  return (
    <div className='flex mt-1'>

      <div style={{
        flex:7
      }}>
        <div className="tabs" style={{
          margin:'0px 0px 0px 10px'
        }}>
          <Tab className={`tab tab-bordered ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(1)}
          >
            <Title>
              Read
            </Title>
          </Tab> 
          <Tab className={`tab tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(2)}
          >
            <Title>
              Speak
            </Title>
          </Tab> 
          <Tab className={`tab tab-bordered ${activeTab === 3 ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(3)}
          >
            <Title>
              Listening
            </Title>
          </Tab> 
          <Tab className={`tab tab-bordered ${activeTab === 4 ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(4)}
          >
            <Title>
              학습 자료
            </Title>
          </Tab> 
        </div>
      </div>

        <div style={{flex:3,display:'flex'}}>
          <div style={{display:'flex', flex:5, margin:'auto 0px auto 0px'}}>
            <SearchInput 
            className='boxShadow'
            type="text" 
            placeholder='Search'
            style={{
              width:'250px',
              height:'40px',
              padding:'10px 20px',
              borderRadius:'30px',
              border: 'none',
              outline: 'none',
            }}
            value={search}
            name='search'
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            {!search ? (
              <>
                <div style={{
                  position:'relative',
                  margin:'5px 0px 0px 0px',
                  right:'50px'
                }}>
                  <SearchIcon style={{fontSize:'30px', color:'#c5c5c5'}}/>
                </div>
              </>
            ) : (
              <>
              <div style={{width:'30px'}}></div>
              </>
            )}
          </div>

          <CreateBtn 
          className='boxShadow' 
          style={{flex:2}}
          onClick={()=>{router.push('/library/teacher/homework/create')}}
          >
           문제생성
          </CreateBtn>
        </div>
    </div>
  );
}
export default ContainerBtn;
