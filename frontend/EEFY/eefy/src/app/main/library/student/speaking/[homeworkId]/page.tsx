function Page({ params }: { params: { homeworkId: string } }) {
  return (
    <>
      <div>SpeakingHomework {params.homeworkId}</div>
    </>
  );
}

export default Page;
