import { getClient } from "@/lib/ApolloClient";
import { GET_DATA_QUERY } from "@/lib/Query";
import MainLogo from "./mainLogo";

export default async function Navigation() {
  const { data } = await getClient().query({ query: GET_DATA_QUERY });
  return (
    <nav className="px-10 lg:px-20 absolute top-0 left-0 z-10">
      <MainLogo data={{src:data.navigation.data.attributes.image.data.attributes.url, alt:data.navigation.data.attributes.image.data.attributes.alternativeText}}/>
    </nav>
  );
}
