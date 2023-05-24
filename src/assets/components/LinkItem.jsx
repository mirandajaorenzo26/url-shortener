import { useContext } from "react";
import Button from "./shared/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import { ClipboardContext } from "./AdvanceStatistics";
const LinkItem = ({ original, shorten, className }) => {
  const writeToClipboard = useContext(ClipboardContext);

  return (
    <div
      className={`${className} lg-p-0 my-5 flex flex-col items-center justify-between gap-5 rounded-xl bg-white px-10 py-3 text-sm lg:flex-row lg:rounded-md`}
    >
      <p className="font-bold">{original}</p>
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        <p className="text-cyan">{shorten}</p>
        <div className="flex items-center gap-2">
          <Button
            text="Copy"
            className={"rounded-btn rounded-md lg:py-3"}
            onClick={() => writeToClipboard(shorten)}
          />
          <AiFillCloseCircle
            size={32}
            className="cursor-pointer rounded-full fill-red"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
