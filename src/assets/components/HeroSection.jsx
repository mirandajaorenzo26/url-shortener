import AddLinkForm from "./AddLinkForm";
import Button from "./shared/Button";

const HeroSection = () => {
  return (
    <section className=" relative flex w-full flex-col items-center justify-between pb-32 text-center  lg:flex-row-reverse">
      <div className="flex h-[375px] justify-center lg:h-full lg:flex-1">
        <div className="flex-2 relative grid h-full w-[390px] items-center overflow-x-visible ">
          <img
            className="absolute h-full overflow-visible object-cover object-left"
            src="/src/assets/images/illustration-working.svg"
          />
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col items-center justify-center gap-5 py-10 lg:items-start lg:text-left">
        <h1 className="text-4xl font-bold leading-relaxed lg:text-7xl">
          More than just shorter links
        </h1>
        <p className="text-gray ">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Button
          text={"Get Started"}
          className="rounded-btn  rounded-full bg-cyan hover:bg-light-cyan"
        />
      </div>
      <AddLinkForm />
    </section>
  );
};

export default HeroSection;
