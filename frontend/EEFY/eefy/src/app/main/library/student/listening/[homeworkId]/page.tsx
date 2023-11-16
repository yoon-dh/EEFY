function Page({ params }: { params: { homeworkId: string } }) {
  return (
    <>
      <div>ListeningHomework {params.homeworkId}</div>
    </>
  );
}

export default Page;
