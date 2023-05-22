import { useContext, useMemo } from "react";
import { LinkContext } from "../../App";
import LinkItem from "./LinkItem";

const AdvanceStatistics = () => {
  const { links } = useContext(LinkContext);

  const renderedList = useMemo(() => {
    return links.map((item, index) => (
      <LinkItem
        key={index}
        className=""
        original={item.original}
        shorten={item.shorten}
      />
    ));
  }, [links]);

  return (
    <section className="pt-[89px]">
      <ul>{renderedList}</ul>
      <h2 className="text-2xl font-bold mt-10">Advanced Statistics</h2>
      <p className="my-2 text-grayish-violet">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </section>
  );
};

export default AdvanceStatistics;
