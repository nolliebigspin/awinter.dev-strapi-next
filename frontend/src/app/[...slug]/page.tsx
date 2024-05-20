import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PageContent from "@/components/PageContent";
import client from "@/lib/apolloClient";
import {
  Enum_Route_Placement,
  PageBySlugDocument,
  PageBySlugQuery,
  PageEntity,
} from "@/lib/genTypes";
import { getNavigation } from "@/lib/helpers";
import type { Slug } from "@/types";

const getData = async (slug: Slug) => {
  const slugPath = !slug
    ? ""
    : typeof slug === "string"
      ? slug
      : slug.join("/");
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
  const navData = await getNavigation();
  const pageData = await getData(params.slug);

  return (
    <main>
      <Navigation
        routes={navData?.filter(
          (route) =>
            route.attributes?.placement === Enum_Route_Placement.MainNavigaiton
        )}
      />
      <PageContent data={pageData as PageEntity} />
      <Footer
        routes={navData?.filter(
          (route) =>
            route.attributes?.placement ===
            Enum_Route_Placement.FooterNavigation
        )}
      />
    </main>
  );
};

export default Slug;
