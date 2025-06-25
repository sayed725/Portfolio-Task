const PageHeader = ({title}) => {
  return (
    <div className="text-white text-center py-5 lg:py-10">
      <h1 className=" text-4xl lg:text-6xl font-bold tracking-wider">{title}</h1>
      <p className="py-3 lg:py-5 tracking-wider">
        <a href="/" className="mr-4">Home</a> • <a href="/blog" className="ml-4">{title}</a>
      </p>
    </div>
  );
};

export default PageHeader;