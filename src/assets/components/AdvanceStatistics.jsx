import { createContext, useContext, useMemo, useState } from "react";
import { LinkContext } from "../../App";
import LinkItem from "./LinkItem";

export const ClipboardContext = createContext();

const AdvanceStatistics = () => {
  const { links } = useContext(LinkContext);

  const [clipboardData, setClipboardData] = useState("");

  const writeToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setClipboardData(text);
      })
      .catch((error) => {
        console.error("Failed to write to clipboard: ", error);
      });
  };

  const renderedList = useMemo(() => {
    return links.map((item) => (
      <LinkItem
        key={crypto.randomUUID()}
        original={item.original}
        shorten={item.shorten}
      />
    ));
  }, [links]);

  return (
    <section className="pt-[89px]">
      <ClipboardContext.Provider value={writeToClipboard}>
        <ul>{renderedList}</ul>
      </ClipboardContext.Provider>
      <h2 className="mt-10 text-2xl font-bold">Advanced Statistics</h2>
      <p className="my-2 text-grayish-violet">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </section>
  );
};

export default AdvanceStatistics;
