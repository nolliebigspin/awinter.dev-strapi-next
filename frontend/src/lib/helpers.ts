import client from "./apolloClient";
import { NavigationDocument, NavigationQuery } from "./genTypes";

export const getNavigation = async () => {
  const { data, error } = await client.query<NavigationQuery>({
    query: NavigationDocument,
  });
  if (!data.routes || error) throw Error(`${error}`);

  return data.routes.data;
};
