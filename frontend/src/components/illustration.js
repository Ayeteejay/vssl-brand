import Image from "next/image";
import { SecondaryHeader, Paragraph, BronzeButton } from "./utilities";

export default async function Illustration({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={data.title} />
          <Paragraph description={data.description} className={"text-smoke"} />
          <BronzeButton
            title={"Download"}
            link={`${port}${data.download.data.attributes.url}`}
            className={"mt-10 sm:mt-20"}
          />
        </div>
        <div className="relative mt-5 md:mt-0">
          {data.illustrations.map((illustration) => {
            let className = null;
            const label = illustration.label.toLowerCase();
            if (label === "lighthouse") {
              className = "top-5 sm:top-0 left-0 w-[250px]";
            } else if (label === "octopus") {
              className = "top-32 right-5 sm:top-20 sm:right-0 z-10 w-[250px]";
            } else if (label === "mermaid") {
              className = "top-72 right-20 sm:right-32 w-[300px]";
            }
            return (
              <div
                key={illustration.id}
                className={`${className} absolute sm:w-72`}
              >
                <Image
                  src={`${port}${illustration.image.data.attributes.url}`}
                  alt={illustration.image.data.attributes.alternativeText}
                  width={illustration.image.data.attributes.width}
                  height={illustration.image.data.attributes.height}
                  className="w-auto h-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
