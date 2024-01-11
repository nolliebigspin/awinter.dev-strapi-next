import Blocks from "@/components/Blocks";
import Header from "@/components/Header";
import client from "@/lib/apolloClient";
import { PageBySlugDocument, PageBySlugQuery } from "@/lib/genTypes";
import { Slug } from "@/types";

const getData = async (slug: Slug) => {
  const slugPath = !slug ? "" : typeof slug === "string" ? slug : slug.join("/")
  const { data, error } = await client.query<PageBySlugQuery>({
    query: PageBySlugDocument,
    variables: {
      slug: `/${slugPath}`,
    },
  });
  if (!data.pages || error) throw Error(`${error}`);
  return data.pages.data[0];
};

const Slug = async ({ params }: { params: { slug: Slug } }) => {
  const data = await getData(params.slug);

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

export default Slug;
