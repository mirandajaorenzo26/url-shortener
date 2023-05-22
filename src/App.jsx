import { useRef, useState, useMemo } from "react";
import HeroSection from "./assets/components/HeroSection";

function App() {
  const inputRef = useRef();
  const [links, setLinks] = useState([]);

  const renderedList = useMemo(() => {
    return links.map((item, index) => (
      <li key={index} className="flex justify-between">
        <p>{item.original}</p>
        <p>{item.shorten}</p>
      </li>
    ));
  }, [links]);

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
    <>
      <HeroSection />

      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="grid p-5 gap-5 bg-dark-violet mobile-bg-img rounded-xl"
      >
        <input
          ref={inputRef}
          type="text"
          className="rounded-md py-4 px-5"
          placeholder="Shorten a link here..."
        />
        <button
          type="submit"
          className="py-4 px-3 rounded-md text-white bg-cyan"
        >
          Shorten
        </button>
      </form>
      <ul className="bg-slate-500 w-full ">{renderedList}</ul>
    </>
  );
}

export default App;
