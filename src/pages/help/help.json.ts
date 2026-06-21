import { getCollection } from "astro:content";

export async function GET() {
  const docs = await getCollection("help");

  return Response.json(
    docs.map((d) => ({
      key: d.id,
      url: `/help/${d.id}`,
    })),
  );
}
