function Page({ params }: { params: { homeworkId: string } }) {
  return (
    <>
      <div>Reading {params.homeworkId}</div>
    </>
  );
}

export default Page;
