import getData from "@/components/strapi";
import Hero from "@/components/hero";
import Positioning from "@/components/positioning";
import Persona from "@/components/persona";
import Values from "@/components/values";
import Voice from "@/components/voice";
import Boilerplate from "@/components/boilerplate";
import Grit from "@/components/grit";
import Logos from "@/components/logo";
import Typography from "@/components/typography";
import Colors from "@/components/colors";
import Texture from "@/components/texture";
import Illustration from "@/components/illustration";
import Grid from "@/components/grid";
import Rules from "@/components/rules";
import Photography from "@/components/photography";

const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";

export default async function Home() {
  const data = await getData("/api/voice?populate=*");
  console.log(data);
  return (
    <>
      <Hero />
      <Positioning />
      <Persona />
      <Values />
      <Voice content={data} port={PORT}/>
      <Boilerplate />
      <Grit />
      <Logos />
      <Typography />
      <Colors />
      <Photography />
      <Texture />
      <Illustration />
      <Grid />
      <Rules />
    </>
  );
}
