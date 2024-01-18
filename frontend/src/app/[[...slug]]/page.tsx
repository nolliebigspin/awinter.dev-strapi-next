import Blocks from "@/components/Blocks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import client from "@/lib/apolloClient";
import { Enum_Route_Placement, NavigationDocument, NavigationQuery, PageBySlugDocument, PageBySlugQuery } from "@/lib/genTypes";
import { Slug } from "@/types";

const getNavigation = async () => {
  const { data, error } = await client.query<NavigationQuery>({
    query: NavigationDocument,
  });
  if (!data.routes || error) throw Error(`${error}`);

  return data.routes.data;
};

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
  const slug = params.slug || "index";
  const navData = await getNavigation();
  const data = await getData(slug);

  return (
    <>
      <Navigation
        routes={navData?.filter(
          (route) =>
            route.attributes?.placement === Enum_Route_Placement.MainNavigaiton,
        )}
      />
      <main className="flex flex-col items-center p-6 text-justify">
        {data ? (
          <div className="flex flex-col py-12">
            {data.attributes?.headline && (
              <Header title={data.attributes?.headline} />
            )}
            <Blocks content={data.attributes?.blocks} />
          </div>
        ) : (
          <Header title={"No content found!"} />
        )}
      </main>
      <Footer
        routes={navData?.filter(
          (route) =>
            route.attributes?.placement === Enum_Route_Placement.FooterNavigation,
        )}
      />
    </>
  );  
}

export default Slug;
