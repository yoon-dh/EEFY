function Page({ params }: { params: { homeworkId: string } }) {
  return (
    <>
      <div>Speaking {params.homeworkId}</div>
    </>
  );
}

export default Page;
