import { createContext, useEffect, useRef, useState } from "react";
import HeroSection from "./assets/components/HeroSection";
import AdvanceStatistics from "./assets/components/AdvanceStatistics";
import Header from "./assets/components/Header";
import BoostLinks from "./assets/components/BoostLinks";

export const LinkContext = createContext();

function App() {
  const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

  // Getting the data from the local storage
  const [links, setLinks] = useState(() => {
    const localValue = localStorage.getItem("storedLinks");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const [newLink, setNewLink] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef();

  // Helper functions
  const addLink = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl + newLink);
      const data = await response.json();
      if (data.ok) {
        // Remove the error indicator
        inputRef.current.classList.remove("error");
        setError(() => "");
        // -----------------------------------------

        // Return a new set of links and add the new link
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
        // Adding Error Indicators
        if (data.error_code === 1) {
          console.error("Please add a link");
          setError(() => "Please add a link");
          inputRef.current.classList.add("error");
        } else if (data.error_code === 2) {
          console.error("Invalid URL");
          setError(() => "Invalid URL");
          inputRef.current.classList.add("error");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteLink = (id) => {
    setLinks((prevLinks) => {
      return prevLinks.filter((link) => link.id !== id);
    });
  };

  // Update the local storage whenever there are changes made in the links
  useEffect(() => {
    localStorage.setItem("storedLinks", JSON.stringify(links));
  }, [links]);

  // Remove the error indicator when new link has been added
  useEffect(() => {
    inputRef.current.classList.remove("error");
    setError(() => "");
  }, [newLink]);

  return (
    <>
      <div className="px-5  md:px-16 xl:px-40 2xl:px-48">
        <Header />
      </div>
      <LinkContext.Provider
        value={{
          links,
          setLinks,
          newLink,
          setNewLink,
          addLink,
          deleteLink,
          error,
          setError,
          inputRef,
        }}
      >
        <div className="flex h-[100vh] overflow-x-clip px-5  md:px-16 xl:px-40 2xl:px-48">
          <HeroSection />
        </div>
        <div className="bg-lighter-gray px-5 text-center  md:px-16 xl:px-40 2xl:px-48">
          <AdvanceStatistics />
        </div>
      </LinkContext.Provider>
      <div className="bg-dark-violet bg-[url('./assets/images/bg-boost-mobile.svg')] bg-cover p-10 px-5 text-center md:px-16  lg:bg-[url('./assets/images/bg-boost-desktop.svg')] xl:px-40 2xl:px-48">
        <BoostLinks />
      </div>
    </>
  );
}

export default App;
