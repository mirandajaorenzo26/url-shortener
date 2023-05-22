import Header from "./Header";
import Button from "./shared/Button";
import { useRef, useContext } from "react";
import { LinkContext } from "../../App";

const HeroSection = () => {
  const { setLinks } = useContext(LinkContext);
  const inputRef = useRef();

  const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl + inputRef.current.value);
      const data = await response.json();
      console.log(data);
      setLinks((prevLinks) => {
        return [
          ...prevLinks,
          {
            original: inputRef.current.value,
            shorten: data.result.full_short_link,
          },
        ];
      });
    } catch (error) {
      // Handle any errors that occurred during the data fetch
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="relative text-center flex flex-col pb-[89px] justify-between">
      <Header />
      <div className="relative h-[50vh] flex-2 grid items-center overflow-x-visible">
        <img
          className="absolute object-cover w-full ml-[25%] h-full overflow-visible"
          src="/src/assets/images/illustration-working.svg"
        />
      </div>
      <div className="py-10 space-y-5 flex-1">
        <h1 className="text-4xl font-bold">More than just shorter links</h1>
        <p className="text-gray ">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Button text={"Get Started"} className="rounded-btn  rounded-full" />
      </div>
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="grid p-5 gap-5 bg-dark-violet mobile-bg-img rounded-xl absolute w-full bottom-0 translate-y-[50%]"
      >
        <input
          ref={inputRef}
          type="text"
          className="rounded-md py-4 px-5 w-fu"
          placeholder="Shorten a link here..."
        />
        <Button
          text="Shorten it!"
          type="submit"
          className="py-4 px-3 rounded-md text-white bg-cyan"
        >
          Shorten
        </Button>
      </form>
    </section>
  );
};

export default HeroSection;
