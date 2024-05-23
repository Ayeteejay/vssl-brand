import { SecondaryHeader, Paragraph, BronzeButton } from "./utilities";

export default async function Texture({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={data.title} />
          <Paragraph description={data.description} className={"text-smoke"} />
        </div>
      </div>
      <div className="my-14 md:my-20 grid grid-cols-4 sm:grid-cols-2 sm:gap-8">
        {data.texture_images.data.map((texture) => {
          return (
            <div
              key={texture.id}
              className={`h-72 bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${port}${texture.attributes.url})`,
              }}
            ></div>
          );
        })}
      </div>
      <BronzeButton
        title={"Download"}
        link={`${port}${data.download.data.attributes.url}`}
        className={"mt-10"}
      />
    </section>
  );
}
