import { getClient } from "@/lib/ApolloClient";
import { GET_DATA_QUERY } from "@/lib/Query";
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

const PORT = process.env.NEXT_PUBLIC_BACKEND;

export default async function Home() {  
  const { data } = await getClient().query({ query: GET_DATA_QUERY });
  return (
    <>
      <Hero content={data.hero} port={PORT}/>
      <Positioning content={data.positioning}/>
      <Persona content={data.persona} port={PORT}/>
      <Values content={data.ourValue} port={PORT}/>
      <Voice content={data.voice} port={PORT}/>
      <Boilerplate content={data.boilerplate}/>
      <Grit content={data.grit} port={PORT}/>
      <Logos content={data.logo} port={PORT}/>
      <Typography content={data.typography} port={PORT}/>
      <Colors content={data.color}/>
      <Photography content={data.photography} port={PORT}/>
      <Texture content={data.texture} port={PORT}/>
      <Illustration content={data.illustration} port={PORT}/>
      <Grid content={data.layout} port={PORT}/>
      <Rules content={data.rule} port={PORT}/>
    </>
  );
}
