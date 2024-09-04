const Title = ({ title }) => {
  return (
    <>
      <h2
        className={`col-start-2 col-span-10 text-green-600 text-3xl font-bold tracking-tighter sm:text-5xl text-center`}
      >
        {title}
      </h2>
    </>
  );
};

export default Title;
