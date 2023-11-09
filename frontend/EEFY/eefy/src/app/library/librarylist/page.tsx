// import ReadList from '@/components/Main/MainLibrary/BookList/ReadList';
import ContainerBtn from '@/components/Library/LibraryList/ContainerBtn';
import PaginationComponent from '@/components/Library/LibraryList/PaginationComponent';
import LibraryListComponent from '@/components/Library/LibraryList/LibraryListComponent';

function Library() {
  return (
    <>
      <div className='w-full h-full flex flex-col'>
        <div style={{ flex: 1 }}>
          <ContainerBtn />
        </div>
        <div style={{ flex: 8 }}>
          <LibraryListComponent />
        </div>
        <div className='flex justify-center items-center' style={{ flex: 1 }}>
          <PaginationComponent />
        </div>
      </div>
    </>
  );
}

export default Library;
