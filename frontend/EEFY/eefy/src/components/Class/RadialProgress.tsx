type RadialProgressProps = {
  percent: number;
};

function RadialProgress({ percent }: RadialProgressProps) {
  const style = {
    '--value': percent,
    '--size': '4rem',
  };
  return (
    <div className='radial-progress bg-neutral text-primary-content border-4 border-primary flex-2' style={style}>
      {percent}%
    </div>
  );
}
export default RadialProgress;
