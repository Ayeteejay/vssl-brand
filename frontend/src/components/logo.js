import Image from "next/image";
import {
  SecondaryHeader,
  TertiaryHeader,
  Paragraph,
  WilsonHeader,
  LogoSection,
  BronzeButton,
} from "./utilities";

export default async function Logos({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative">
      <div className="overflow-scroll hidden lg:grid sm:grid-cols-2 md:grid-cols-2 md:w-[550px] xl:w-[750px] absolute right-0 top-[145px]">
        {data.primary_logos.map((logo) => {
          return (
            <Image
              key={logo.id}
              src={`${port}${logo.image.data.attributes.url}`}
              height={2000}
              width={2000}
              alt={logo.image.data.attributes.alternativeText}
              className={`py-12 px-16 bg-${logo.background_color}`}
            />
          );
        })}
      </div>
      <div className="relative grid lg:grid-cols-5 md:gap-6 lg:gap-0 max-w-5xl mx-auto px-8 pb-0 lg:pb-80">
        <div className="lg:col-span-2">
          <SecondaryHeader
            title={data.title}
            className={"mb-12 sm:mb-14 md:mb-20"}
          />
          <TertiaryHeader
            title={data.primary_title}
            className={"text-smoke mb-3"}
          />
          <Paragraph
            description={data.primary_description}
            className={"text-smoke"}
          />
        </div>
        <WilsonHeader
          title={data.primary_salty}
          className={"block sm:hidden absolute top-60 left-5 z-10"}
        />
        <div className="lg:col-span-3 flex lg:hidden mt-5 md:mt-0 mb-6 md:mb-0 overflow-scroll sm:grid sm:grid-cols-2 md:grid-cols-4">
          {data.primary_logos.map((logo) => {
            return (
              <Image
                key={logo.id}
                src={`${port}${logo.image.data.attributes.url}`}
                height={2000}
                width={2000}
                alt={logo.image.data.attributes.alternativeText}
                className={`py-12 sm:py-10 lg:py-12 px-16 bg-${logo.background_color}`}
              />
            );
          })}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
        <div className="grid md:grid-cols-2 md:gap-20 md:mt-6 xl:mt-28">
          <LogoSection
            title={data.simplified_title}
            description={data.simplified_description}
            logos={data.simplified_logos}
            salty={data.simplified_salty}
            port={port}
          />
          <LogoSection
            title={data.flag_title}
            description={data.flag_description}
            logos={data.flag_logos}
            salty={data.flag_salty}
            port={port}
          />
        </div>
        <BronzeButton
          title="Download"
          link={`${port}${data.download.data.attributes.url}`}
          className={"mt-10 md:mt-20"}
        />
      </div>
    </section>
  );
}
