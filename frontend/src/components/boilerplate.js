import { SecondaryHeader, TertiaryHeader, Paragraph } from "./utilities";
export default async function Boilerplate({content}) {  
  const data = await content.data.attributes;
  return (
    <section className="max-w-5xl mx-auto px-8 relative mb-16 md:mb-32">
      <SecondaryHeader title={data.title} className={"md:mb-14"} />
      <div className="grid md:grid-cols-2 gap-5 md:gap-14">
        {data.about.map((item) => {
          return (
            <div key={item.id} className="group">
              <TertiaryHeader title={item.title} className={"text-smoke"} />
              <Paragraph
                description={item.description}
                className={"text-smoke mt-3"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
