import { createContext, useState } from "react";
import HeroSection from "./assets/components/HeroSection";
import AdvanceStatistics from "./assets/components/AdvanceStatistics";

export const LinkContext = createContext();

function App() {
  const [links, setLinks] = useState([]);

  return (
    <>
      <LinkContext.Provider value={{ links, setLinks }}>
        <div className=" p-5 pb-0 overflow-x-clip">
          <HeroSection />
        </div>
        <div className="bg-lighter-gray  px-5 text-center">
          <AdvanceStatistics />
        </div>
      </LinkContext.Provider>
      {/* <ul className="bg-slate-500 w-full ">{renderedList}</ul> */}
    </>
  );
}

export default App;
