import Blocks from "@/components/Blocks";
import Header from "@/components/Header";
import client from "@/lib/apolloClient";
import { PageBySlugDocument, PageBySlugQuery } from "@/lib/genTypes";

const getData = async () => {
  const { data, error } = await client.query<PageBySlugQuery>({
    query: PageBySlugDocument,
    variables: {
      slug: "data-policy",
    },
  });

  if (!data.pages || error) throw Error(`${error}`);
  return data.pages.data[0];
};

const DataPolicy = async () => {
  const data = await getData();
  return data ? (
    <main className="flex min-h-screen flex-col p-12">
      {data.attributes?.headline && (
        <Header title={data.attributes?.headline} />
      )}
      <Blocks content={data.attributes?.blocks} />
    </main>
  ) : (
    <Header title={"No content found!"} />
  );
};

export default DataPolicy;
