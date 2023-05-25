import LinkList from "./LinkList";
import BrandRecognitionImg from "../assets/images/icon-brand-recognition.svg";
import DetaildRecordsImg from "../assets/images/icon-detailed-records.svg";
import FullyCustomizableImg from "../assets/images/icon-fully-customizable.svg";

const AdvanceStatistics = () => {
  return (
    <section className="pt-[89px]">
      <LinkList />
      <div className="mb-16 mt-16 grid justify-center lg:mb-0">
        <h2 className="my-5 text-3xl font-bold lg:text-4xl">
          Advanced Statistics
        </h2>
        <p className="my-2 max-w-lg px-2 text-grayish-violet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="pb-20 font-normal">
        <div className=" relative my-14 flex flex-col items-center gap-20 md:gap-5 lg:flex-row lg:text-left xl:gap-20">
          <div className="absolute left-[50%] h-full w-2 translate-x-[-50%]  bg-cyan lg:top-[50%] lg:h-2 lg:w-full lg:translate-y-[50%]"></div>
          <div className="relative   rounded-md bg-white px-7 py-10">
            <div className="absolute left-[50%] top-0 w-max translate-x-[-50%]  translate-y-[-50%] rounded-full bg-dark-violet p-5 lg:left-7  lg:translate-x-[0]">
              <img src={BrandRecognitionImg} alt="" />
            </div>
            <h3 className="my-5 text-xl font-bold">Brand Recognition</h3>
            <p className=" text-sm leading-relaxed text-gray lg:text-base">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="relative  rounded-md bg-white px-7 py-10 md:mt-16 ">
            <div className="absolute left-[50%] top-0 w-max  translate-x-[-50%]  translate-y-[-50%] rounded-full bg-dark-violet  p-5 lg:left-7 lg:translate-x-[0]">
              <img src={DetaildRecordsImg} alt="" />
            </div>
            <h3 className="my-5 text-xl font-bold">Detailed Records</h3>
            <p className="text-sm leading-relaxed text-gray lg:text-base">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="relative  rounded-md bg-white px-7  py-10  md:mt-32">
            <div className="absolute left-[50%] top-0 w-max translate-x-[-50%]  translate-y-[-50%] rounded-full bg-dark-violet p-5 lg:left-7 lg:translate-x-[0]">
              <img src={FullyCustomizableImg} alt="" />
            </div>
            <h3 className="my-5 text-xl font-bold">Fully Customizable</h3>
            <p className="text-sm leading-relaxed text-gray lg:text-base">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceStatistics;
