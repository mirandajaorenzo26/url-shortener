import Button from "./shared/Button";

const BoostLinks = () => {
  return (
    <div className=" ">
      <h2 className="mb-5 text-3xl font-bold text-white">
        Boost your links today
      </h2>
      <Button
        text={"Get Started"}
        className="rounded-btn  rounded-full bg-cyan hover:bg-light-cyan"
      />
    </div>
  );
};

export default BoostLinks;
