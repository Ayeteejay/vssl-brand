import Image from "next/image";
import { BronzeButton, SecondaryHeader, Paragraph } from "./utilities";

export default async function Photography({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative pb-20 sm:pb-28 overflow-hidden">
      <div className="grid lg:grid-cols-2 md:gap-20 max-w-5xl mx-auto px-8">
        <div>
          <SecondaryHeader title={data.title} />
          <Paragraph
            description={data.description}
            className={"relative text-smoke text-sm md:text-base elza"}
          />
          <BronzeButton
            title={"Download"}
            link={`${port}${data.download.data.attributes.url}`}
            className={"mb-28 sm:mb-0 mt-10 md:mt-20"}
          />
        </div>
        <div></div>
      </div>
      <div className="-translate-y-20 sm:translate-y-5 md:-translate-y-10 lg:translate-y-0 lg:absolute top-10 right-0 transition-all duration-500 sm:w-full lg:w-[600px] 2xl:w-[800px] grid grid-areas-photography_large">
        {data.photography.map((photograph) => {
          let className = null;
          const label = photograph.label.toLowerCase();
          if (label === "ship") {
            className = "absolute bottom-0 left-0 z-0";
          } else if (label === "bonfire") {
            className = "grid-in-beach translate-x-10 translate-y-10";
          } else if (label === "surfboards") {
            className = "grid-in-surfboards z-30 translate-y-32";
          } else if (label === "dog") {
            className = "grid-in-dog z-30 w-auto";
          } else if (label === "captain") {
            className = "grid-in-captain z-20 absolute -bottom-32";
          } else if (label === "vehicle") {
            className =
              "grid-in-vehicle z-10 xl:-translate-x-10 translate-y-10";
          } else if (label === "lighthouse") {
            className =
              "grid-in-lighthouse z-40 translate-y-16 w-52 translate-x-10 lg:w-72";
          }
          return (
            <Image
              key={photograph.id}
              src={`${port}${photograph.image.data.attributes.url}`}
              alt={photograph.image.data.attributes.alternativeText}
              width={photograph.width}
              height={photograph.height}
              className={className}
            />
          );
        })}
      </div>
    </section>
  );
}
