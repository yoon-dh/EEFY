function Page({ params }: { params: { homeworkId: string } }) {
  return (
    <>
      <div>Listening {params.homeworkId}</div>
    </>
  );
}

export default Page;
