import { SecondaryHeader, TertiaryHeader, Paragraph } from "./utilities";

export default async function Colors({content}) {
  const data = await content.data.attributes;
  return (
    <section className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-2">
        <div>
          <SecondaryHeader title={data.title} />
          <Paragraph description={data.description} className={"text-smoke"} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 my-14 md:my-20">
        {data.primary_colors.map((color) => {
          return (
            <div
              key={color.id}
              className={`px-10 py-10 sm:py-16 bg-${color.background_color.toLowerCase()}`}
            >
              <TertiaryHeader
                title={color.title}
                className={`mb-4 text-${color.title_color}`}
              />
              <p
                className={`rift font-bold leading-tight text-${color.code_color}`}
              >
                <br />
                {color.hexcode}
                <br />
                {color.rgb}
                <br />
                {color.rgba}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-2 md:gap-20">
        <div>
          <TertiaryHeader
            title={data.secondary_title}
            className={"text-smoke mb-3"}
          />
          <Paragraph
            description={data.secondary_description}
            className={"text-smoke"}
          />
        </div>
        <div className="grid grid-cols-4 sm:py-5 mt-5 sm:mt-0">
          {data.secondary_colors.map((color) => {
            return (
              <div
                key={color.id}
                className={`flex justify-center py-6 md:py-0 items-center bg-${color.background_color}`}
              >
                <p
                  className={`rift font-bold leading-tight text-${color.code_color}`}
                >
                  {color.hexcode}
                  <br />
                  {color.rgb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
