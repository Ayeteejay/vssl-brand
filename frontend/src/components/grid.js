import Image from "next/image";
import { SecondaryHeader, Paragraph } from "./utilities";

export default async function Grid({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative max-w-5xl mx-auto px-8 mt-[500px] sm:mt-[400px] md:mt-0 pt-20 sm:pt-40 pb-7 sm:pb-20">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={data.title} />
          <Paragraph
            description={data.description}
            className={"text-smoke text-sm md:text-base elza"}
          />
        </div>
      </div>
      <Image
        src={`${port}${data.layout_image_magnified.data.attributes.url}`}
        alt={`${data.layout_image_magnified.data.attributes.alternativeText}`}
        width={1000}
        height={1000}
        className="my-12 sm:my-14 md:my-20 md:hidden"
      />
      <Image
        src={`${port}${data.layout_image.data.attributes.url}`}
        alt={`${data.layout_image.data.attributes.alternativeText}`}
        width={1000}
        height={1000}
        className="my-14 md:my-20 hidden md:block"
      />
    </section>
  );
}
