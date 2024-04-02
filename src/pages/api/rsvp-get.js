import { eq } from "drizzle-orm";
import { db } from "../../db/db.js";
import { rsvp } from "../../db/schema.js";

export const prerender = false;

export async function GET({ params, request }) {
  const url = new URL(request.url);
  const index = Object.fromEntries(new URLSearchParams(url.search));

  const data = await db.select().from(rsvp)
  .where(eq(rsvp.url, index.url));
  
  return new Response(JSON.stringify(data));
}
