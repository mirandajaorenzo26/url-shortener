import Button from "./shared/Button";
const LinkItem = ({ original, shorten, className }) => {
  return (
    <div
      className={`${className} flex gap-5 justify-between flex-col bg-white text-sm p-5 rounded-xl`}
    >
      <p>{original}</p>
      <p className="text-cyan">{shorten}</p>
      <Button text="Copy" className={"rounded-btn rounded-md"} />
    </div>
  );
};

export default LinkItem;
