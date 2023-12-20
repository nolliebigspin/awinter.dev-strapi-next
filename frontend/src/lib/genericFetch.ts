export type GenericFetchParams = {
  contentType: string;
  id: string | number;
};

export const getData = async <T>({ contentType, id }: GenericFetchParams) => {
  const url = `${process.env.STRAPI_URL}/api/${contentType}/${id}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    console.error(`Failed to fetch data from ${url}!`);
  }

  const data = res.json() as T;
  return data;
};
