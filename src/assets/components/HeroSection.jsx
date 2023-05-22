import Header from "./Header";

const HeroSection = () => {
  return (
    <div className="text-center h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="relative h-[50vh]">
        <img
          className="absolute object-cover object-left w-full h-full overflow-visible"
          src="/src/assets/images/illustration-working.svg"
        />
      </div>
      <div className="py-10 space-y-5">
        <h1 className="text-4xl font-bold">More than just shorter links</h1>
        <p className="text-lg  text-gray ">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
