export type GenericFetchParams = {
  contentType: string;
  id: string | number;
};

export const getData = async ({ contentType, id }: GenericFetchParams) => {
  const url = `${process.env.STRAPI_URL}/api/${contentType}/${id}`;
  console.log("🚀 ~ file: genericFetch.ts:12 ~ url:", url);

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    console.log(`Failed to fetch data from ${url}!`);
  }

  const data = res.json();
  return data;
};
