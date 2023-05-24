import { createContext, useEffect, useState } from "react";
import HeroSection from "./assets/components/HeroSection";
import AdvanceStatistics from "./assets/components/AdvanceStatistics";
import Header from "./assets/components/Header";

export const LinkContext = createContext();

function App() {
  const [links, setLinks] = useState(() => {
    const localValue = localStorage.getItem("storedLinks");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("storedLinks", JSON.stringify(links));
  }, [links]);

  return (
    <>
      <div className="px-5 md:px-40">
        <Header />
      </div>
      <LinkContext.Provider value={{ links, setLinks }}>
        <div className="overflow-x-clip px-5 pb-0 md:px-40">
          <HeroSection />
        </div>
        <div className="bg-lighter-gray  px-5 text-center md:px-40">
          <AdvanceStatistics />
        </div>
      </LinkContext.Provider>
    </>
  );
}

export default App;
