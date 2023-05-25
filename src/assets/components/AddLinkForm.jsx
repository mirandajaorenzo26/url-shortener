import { useContext } from "react";
import { LinkContext } from "../../App";
import Button from "./shared/Button";

const AddLinkForm = () => {
  const { newLink, setNewLink, addLink, error, inputRef } =
    useContext(LinkContext);
  return (
    <form
      action=""
      onSubmit={(e) => addLink(e)}
      className=" absolute bottom-0 grid w-full translate-y-[50%] gap-5 rounded-xl bg-dark-violet bg-[url('./assets/images/bg-boost-mobile.svg')] bg-cover p-5 lg:flex lg:rounded-md lg:bg-[url('./assets/images/bg-boost-desktop.svg')] lg:px-16 lg:py-12"
    >
      <div className="relative w-full">
        <input
          ref={inputRef}
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          type="text"
          className=" w-full rounded-md px-5 py-4"
          placeholder="Shorten a link here..."
        />
        <small className="absolute -bottom-7 left-0 hidden italic text-red lg:block">
          {error}
        </small>
      </div>

      <Button
        text="Shorten it!"
        type="submit"
        className="rounded-btn whitespace-nowrap rounded-xl bg-cyan px-10 py-4 text-white hover:bg-light-cyan"
      >
        Shorten
      </Button>
    </form>
  );
};

export default AddLinkForm;
