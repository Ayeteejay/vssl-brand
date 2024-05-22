import Image from "next/image";
import { SecondaryHeader, Paragraph } from "./utilities";

export default async function Voice({content, port}) {
  return (
    <section className="bg-ink relative">
      <div className="max-w-5xl mx-auto px-8 py-16 my-16 md:py-32 md:my-32">
        <SecondaryHeader title={content.title} />        
        <div className="grid md:grid-cols-2 md:gap-14">
          <div id="collage" className="order-2 md:order-1 mt-10">
            <div className="grid grid-areas-voice relative pt-5 md:pt-10 px-10 md:p-5">
              <Image
                src={`${port}${content.background_image.data.attributes.url}`}
                alt={`${content.background_image.data.attributes.alternativeText}`}
                width={700}
                height={700}
                className="absolute top-5 md:top-20 -left-20"
              />
              <Image
                src={`${port}${content.portrait_image.data.attributes.url}`}
                alt={`${content.portrait_image.data.attributes.alternativeText}`}
                width={300}
                height={300}
                className="grid-in-painting relative -translate-y-5"
              />
              <Image
                src={`${port}${content.dog_image.data.attributes.url}`}
                alt={`${content.dog_image.data.attributes.alternativeText}`}
                width={300}
                height={300}
                className="grid-in-dog relative"
              />
              <Image
                src={`${port}${content.boat_image.data.attributes.url}`}
                alt={`${content.boat_image.data.attributes.alternativeText}`}
                width={200}
                height={200}
                className="grid-in-boat relative m-3"
              />
            </div>
            <Paragraph
              description={content.tone}
              className={"text-smoke mt-4 md:mt-0 md:mb-4"}
            />
          </div>
          <div className="order-1 md:order-2">
            <Paragraph
              description={content.description}
              className={"text-smoke"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
