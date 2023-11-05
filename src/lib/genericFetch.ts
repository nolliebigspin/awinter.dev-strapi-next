export async function genericFetch<T>(entryId: string): Promise<T> {
  const url = `${process.env.CMS_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries/${entryId}`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.CONTENTFUL_AUTH_TOKEN}` },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}! Error: ${error}`);
  }
}
