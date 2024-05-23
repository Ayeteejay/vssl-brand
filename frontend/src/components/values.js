import { SecondaryHeader, ValueCard } from "./utilities";

export default async function Values({content, port}) {
  const data = await content.data.attributes;
  return (
    <section className="relative max-w-5xl mx-auto px-8 sm:px-[70px]">
      <SecondaryHeader
        title={`${data.title}`}
        className={"md:pl-[380px] pb-10 md:pb-4"}
      />
      <div className="flex flex-col gap-12 md:gap-16">
        {data.values.map((value) => {
          return (
            <ValueCard
              key={value.image.data.id}
              image={`${port}${value.image.data.attributes.url}`}
              alt={value.image.data.attributes.alternativeText}
              title={value.title}
              description={value.description}
            />
          );
        })}
      </div>
    </section>
  );
}
