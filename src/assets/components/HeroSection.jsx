import AddLinkForm from "./AddLinkForm";
import Button from "./shared/Button";

const HeroSection = () => {
  return (
    <section className=" relative flex w-full flex-col items-center justify-between pb-32 text-center  lg:flex-row-reverse">
      <div className="my-10 flex h-[50vh] justify-center md:my-0  md:h-full md:flex-1 lg:justify-start ">
        <div className=" object-cover md:w-[40%]">
          <img
            className="h-full overflow-visible object-cover object-left md:relative "
            src="../images/illustration-working.svg"
          />
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col items-center justify-center gap-5 py-10 lg:items-start lg:text-left">
        <h1 className="text-4xl font-bold leading-relaxed lg:text-7xl">
          More than just shorter links
        </h1>
        <p className="max-w-lg text-gray">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <a href="#form">
          <Button
            text={"Get Started"}
            className="rounded-btn  rounded-full bg-cyan hover:bg-light-cyan"
          />
        </a>
      </div>
      <AddLinkForm />
    </section>
  );
};

export default HeroSection;
