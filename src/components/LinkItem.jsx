import { useContext, useEffect } from "react";

import { ClipboardContext } from "./LinkList";
import { LinkContext } from "../App";

import Button from "./shared/Button";
import { MdClose } from "react-icons/md";

const LinkItem = ({ id, original, shorten, className }) => {
  const { writeToClipboard, clipboardData } = useContext(ClipboardContext);
  const { deleteLink } = useContext(LinkContext);

  return (
    <div
      className={`${className} lg-p-0 my-5 flex flex-col items-center justify-between gap-5 rounded-xl bg-white px-10 py-3 text-sm lg:flex-row lg:rounded-md`}
    >
      <p className="font-bold">{original}</p>
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        <p className="text-cyan">{shorten}</p>
        <div className="flex items-center gap-2">
          {clipboardData !== shorten ? (
            <Button
              text="Copy"
              className={
                "rounded-btn rounded-md bg-cyan hover:bg-light-cyan lg:py-3"
              }
              onClick={() => writeToClipboard(shorten)}
            />
          ) : (
            <Button
              text="Copied"
              className={"rounded-btn rounded-md  bg-dark-violet lg:py-3"}
            />
          )}

          <button onClick={() => deleteLink(id)}>
            <MdClose size={32} className="cursor-pointer fill-red" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
