import { getClient } from "@/lib/ApolloClient";
import { GET_DATA_QUERY } from "@/lib/Query";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Markdown from "react-markdown";
import { PrimaryHeader } from "./utilities";

const PORT = process.env.NEXT_PUBLIC_BACKEND;

export default async function Footer() {  
  const { data } = await getClient().query({ query: GET_DATA_QUERY });
  return (
    <footer className="relative max-w-5xl mx-auto px-8 pb-20 sm:pb-40 overflow-hidden">
      <div className="grid md:grid-cols-2 pb-52">
        <div>
          <PrimaryHeader title={data.footer.data.attributes.title} />
          {data.footer.data.attributes.description.map((item, index) => {
            return (
              <Markdown
                key={uuidv4()}
                className={`markdown text-smoke font-light text-sm antialiased md:text-base elza ${
                  index === 0 ? "mt-6" : "my-3"
                }`}
              >
                {item.children[0].text}
              </Markdown>
            );
          })}
        </div>
        <Image
          src={`${PORT}${data.footer.data.attributes.image.data.attributes.url}`}
          alt={`${data.footer.data.attributes.image.data.attributes.alternativeText}`}
          height={2000}
          width={2000}
          className="w-[600px] absolute -bottom-20 -left-5 sm:bottom-auto sm:left-auto sm:top-52 sm:right-10"
        />
      </div>
      <div hidden className="hidden">
        <span className="bg-iron"></span>
        <span className="bg-bronze"></span>
        <span className="bg-ink"></span>
        <span className="bg-smoke"></span>
        <span className="bg-faded_iron"></span>
        <span className="bg-barnacle_green"></span>
        <span className="bg-rusted_brown"></span>
        <span className="bg-faded_blue"></span>
        <span className="bg-sand_beige"></span>
      </div>
    </footer>
  );
}
