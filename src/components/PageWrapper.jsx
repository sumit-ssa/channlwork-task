/* eslint-disable react/prop-types */

const PageWrapper = ({ title, children }) => {
  return (
    <section className="w-full flex items-center max-w-[1220px] mx-auto ">
      <div className="w-full flex items-center flex-col mb-20 px-2">
        <div className="w-full flex items-center mt-8">
          <span className="text-3xl capitalize font-medium">{title}</span>
        </div>
        <hr className="w-full my-4" />
        {children}
      </div>
    </section>
  );
};

export default PageWrapper;
