import { createContext, useContext, useMemo, useState } from "react";

import { LinkContext } from "../App";

import LinkItem from "./LinkItem";

export const ClipboardContext = createContext();

const LinkList = () => {
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
        id={item.id}
        original={item.original}
        shorten={item.shorten}
      />
    ));
  }, [links]);

  return (
    <ClipboardContext.Provider value={{ writeToClipboard, clipboardData }}>
      <ul>{renderedList}</ul>
    </ClipboardContext.Provider>
  );
};

export default LinkList;
