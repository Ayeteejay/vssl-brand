import { SecondaryHeader, Paragraph, GinCard } from "./utilities";

export default async function Positioning({content}) {
  const data = await content.data.attributes;
  return (
    <section className="max-w-5xl mx-auto px-8 relative my-16 md:mt-52 lg:mt-80 z-10">
      <div className="bg-bronze p-10 md:p-20 grid md:grid-cols-5 gap-5 md:gap-10 items-center">
        <div className="md:col-span-3">
          <SecondaryHeader title={`${data.title}`} />
          <Paragraph description={data.description} className={"text-ink"} />
          <div className="mt-5">
            <Paragraph description={data.bullets} className={"text-smoke"} />
          </div>
        </div>
        <div className="flex gap-5 flex-col md:col-span-2">
          {data.positioning.map((position) => {
            return (
              <GinCard
                key={position.id}
                title={position.title}
                description={position.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
