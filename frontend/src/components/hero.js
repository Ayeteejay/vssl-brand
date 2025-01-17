import Image from "next/image";
import { PrimaryHeader, WilsonHeader, Paragraph } from "./utilities";

export default async function Hero({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative">
      <div className="relative z-10 max-w-xl mx-auto px-8 sm:px-0 pt-40">
        <PrimaryHeader title={data.title} />
        <Paragraph
          description={data.description}
          className={"text-smoke relative pt-6"}
        />
      </div>
      <div className="w-full absolute top-0 left-0 z-0 grid grid-areas-hero_small sm:grid-areas-hero_large">
        <Image
          src={`${port}${data.top_right_image.data.attributes.url}`}
          alt={`${data.top_right_image.data.attributes.alternativeText}`}
          className="grid-in-pirates transition-all duration-500 pl-52 opacity-75 xl:pl-0 xl:w-[750px] xl:translate-x-20 xl:-translate-y-10"
          height={1000}
          width={1000}
          priority={true}
        />
        <Image
          src={`${port}${data.bottom_left_image.data.attributes.url}`}
          alt={`${data.bottom_left_image.data.attributes.alternativeText}`}
          className="grid-in-shaka transition-all duration-500 -translate-y-32 lg:-translate-y-52 xl:translate-x-32 h-auto w-auto"
          height={350}
          width={350}
        />
        <Image
          src={`${port}${data.bottom_middle_image.data.attributes.url}`}
          alt={`${data.bottom_middle_image.data.attributes.alternativeText}`}
          className="grid-in-storm pl-32 transition-all duration-500 opacity-50 lg:w-[400px] lg:-translate-x-20 lg:translate-y-5 xl:-translate-y-10 xl:opacity-100"
          height={500}
          width={500}
        />
        <div className="grid-in-coin relative pt-10">
          <Image
            src={`${port}${data.bottom_right_image.data.attributes.url}`}
            alt={`${data.bottom_right_image.data.attributes.alternativeText}`}
            className="transition-all duration-500 opacity-50 lg:opacity-100 w-full h-auto lg:w-[350px] lg:-translate-x-40 lg:-translate-y-10"
            height={500}
            width={500}
          />
          <WilsonHeader
            title={data.salty}
            className={
              "absolute -top-5 -left-20 hidden xl:block lg:-left-52 lg:-top-16"
            }
          />
        </div>
      </div>
    </section>
  );
}
