import Image from "next/image";
import { SecondaryHeader, PersonaCard, Paragraph, Captain, Tattooed } from "./utilities";

export default async function Persona({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="max-w-5xl mx-auto px-8 sm:px-[70px] md:px-28 relative pt-4 pb-20 sm:py-32">
      <div className="grid md:grid-cols-2 md:items-center">
        <div>
          <div className="z-10 relative">
            <SecondaryHeader title={`${data.title}`} />
            <Paragraph
                description={data.description}
                className={"text-smoke"}
              />
          </div>
          <Image
            className="absolute -top-32 right-0 z-0 transition-all duration-300 opacity-40 md:opacity-60 h-auto w-auto"
            src={`${port}${data.shipwreck_image.data.attributes.url}`}
            alt={`${data.shipwreck_image.data.attributes.alternativeText}`}
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <Captain content={data.captain_image} port={port}/>
      </div>
      <div className="grid md:grid-cols-5 mt-10 md:mt-20">
        <Tattooed content={data.tattooed_image} port={port}/>
        <div className="col-span-1"></div>
        <div className="flex col-span-4 md:pl-20 gap-10">
          {data.personas.map((persona) => {
            return (
              <PersonaCard
                key={persona.id}
                title={persona.title}
                description={persona.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
