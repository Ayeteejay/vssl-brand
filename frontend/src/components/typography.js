import {
  SecondaryHeader,
  Paragraph,
  FontSection,
  BronzeButton,
} from "./utilities";

export default async function Typography({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="sm:w-[600px]">
        <SecondaryHeader title={data.title} />
        <Paragraph description={data.description} className={"text-smoke"} />
      </div>
      {data.typography.map((font) => {
        if (font.font_family.toLowerCase() === "gin") {
          return (
            <div
              key={font.id}
              className="bg-iron p-10 md:p-14 my-14 md:my-20 transition-all duration-300 hover:-rotate-2"
            >
              <p
                className={`gin-regular text-white relative break-all text-5xl md:text-8xl`}
              >
                {font.description}
                <span className="gin-lines text-iron absolute top-[2px] left-[2px] opacity-40">
                  {font.description}
                </span>
              </p>
              <p className="text-faded_iron rift font-bold mt-5">
                {font.title}
              </p>
            </div>
          );
        } else {
          return (
            <FontSection
              key={font.id}
              title={font.title}
              description={font.description}
              className={`text-smoke ${font.font_family} leading-tight text-5xl`}
            />
          );
        }
      })}
      <BronzeButton
        title={"Download"}
        link={`${port}${data.download.data.attributes.url}`}
        className={"mt-10"}
      />
    </section>
  );
}
