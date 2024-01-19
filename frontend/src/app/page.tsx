import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PageContent from "@/components/PageContent";
import client from "@/lib/apolloClient";
import {
  Enum_Route_Placement,
  PageBySlugDocument,
  PageBySlugQuery,
} from "@/lib/genTypes";
import { getNavigation } from "@/lib/helpers";
import type { Slug } from "@/types";

const getData = async (slug: string) => {
  const { data, error } = await client.query<PageBySlugQuery>({
    query: PageBySlugDocument,
    variables: {
      slug,
    },
  });
  if (!data.pages || error) throw Error(`${error}`);

  return data.pages.data[0];
};

const Slug = async () => {
  const navData = await getNavigation();
  const pageData = await getData("/");

  return (
    <main>
      <Navigation
        routes={navData?.filter(
          (route) =>
            route.attributes?.placement === Enum_Route_Placement.MainNavigaiton
        )}
      />
      <PageContent data={pageData} />
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
