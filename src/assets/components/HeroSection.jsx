import Header from "./Header";
import Button from "./shared/Button";
import { useRef, useContext, useState } from "react";
import { LinkContext } from "../../App";

const HeroSection = () => {
  const { setLinks } = useContext(LinkContext);
  const [newLink, setNewLink] = useState("");

  const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl + newLink);
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        setLinks((prevLinks) => {
          return [
            ...prevLinks,
            {
              id: crypto.randomUUID(),
              original: newLink,
              shorten: data.result.full_short_link,
            },
          ];
        });
        setNewLink("");
      } else {
        console.error("URL INVALID");
      }
    } catch (error) {
      // Handle any errors that occurred during the data fetch
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-between pb-[89px] text-center lg:h-[90vh] lg:flex-row-reverse">
      <div className="flex h-[375px] justify-center lg:h-full lg:flex-1">
        <div className="flex-2 relative grid h-full w-[390px] items-center overflow-x-visible ">
          <img
            className="absolute h-full overflow-visible object-cover object-left"
            src="/src/assets/images/illustration-working.svg"
          />
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col items-center justify-center gap-5 py-10 lg:items-start lg:text-left">
        <h1 className="text-4xl font-bold lg:text-7xl">
          More than just shorter links
        </h1>
        <p className="text-gray ">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Button text={"Get Started"} className="rounded-btn  rounded-full" />
      </div>

      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className=" absolute bottom-0 grid w-full translate-y-[50%] gap-5 rounded-xl bg-dark-violet bg-[url('./assets/images/bg-boost-mobile.svg')] bg-cover p-5 lg:flex lg:rounded-md lg:bg-[url('./assets/images/bg-boost-desktop.svg')] lg:px-16 lg:py-12"
      >
        <div className="relative w-full">
          <input
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            type="text"
            className="error w-full rounded-md px-5 py-4"
            placeholder="Shorten a link here..."
          />
          <small className="absolute -bottom-7 left-0 hidden italic text-red lg:block">
            Please add a link
          </small>
        </div>

        <Button
          text="Shorten it!"
          type="submit"
          className="rounded-btn whitespace-nowrap rounded-xl bg-cyan px-10 py-4 text-white"
        >
          Shorten
        </Button>
      </form>
    </section>
  );
};

export default HeroSection;
