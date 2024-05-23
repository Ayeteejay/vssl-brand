import Image from "next/image";
import { SecondaryHeader, Paragraph } from "./utilities";
export default async function Rules({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-0 sm:pb-20">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={data.title} />
          <Paragraph description={data.description} className={"text-smoke"} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-7 my-12 sm:my-14 md:my-20">
        {data.rules.map((rule) => {
          return (
            <div key={rule.id}>
              <Image
                src={`${port}${rule.image.data.attributes.url}`}
                alt={rule.image.data.attributes.alternativeText}
                height={500}
                width={500}
              />
              <p className="text-smoke text-sm md:text-base elza mt-4 mb-12 sm:mb-5 text-center antialiased">
                {rule.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
