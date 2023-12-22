import ThemeSwitch from "@/components/ThemeSwitch";
import { EMOJI_CONSTRUCTION } from "@/constants";
import client from "@/lib/apolloClient";
import { HomePageDocument, HomePageQuery } from "@/lib/genTypes";

const getData = async () => {
  const { data, error } = await client.query<HomePageQuery>({
    query: HomePageDocument,
  });

  if (!data.page?.data || error) throw Error(`${error}`);
  return data.page.data;
};

const Home = async () => {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="mb-8 text-4xl font-bold">{data.attributes?.headline}</h1>
      <ThemeSwitch />
      <h3 className="mt-8 text-2xl font-bold">
        still cooking content {EMOJI_CONSTRUCTION}
      </h3>
    </main>
  );
};

export default Home;
