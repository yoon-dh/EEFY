function Page({ params }: { params: { homeworkId: string } }) {
  return (
    <>
      <div>ReadingHomework {params.homeworkId}</div>
    </>
  );
}

export default Page;
