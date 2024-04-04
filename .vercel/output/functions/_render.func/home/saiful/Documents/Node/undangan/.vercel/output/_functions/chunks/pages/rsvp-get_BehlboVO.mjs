import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});
const db = drizzle(client);

const rsvp = sqliteTable('rsvp',{
    id: integer('id').primaryKey(),
    url: text('url').notNull(),
    name: text('name').notNull(),
    content: text('content').notNull(),
    present: integer('present', { mode: 'boolean' }),
  }
);

const prerender = false;

async function GET({ params, request }) {
  const url = new URL(request.url);
  const index = Object.fromEntries(new URLSearchParams(url.search));

  const data = await db.select().from(rsvp)
  .where(eq(rsvp.url, index.url));
  
  return new Response(JSON.stringify(data));
}

const rsvpGet = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { rsvpGet as a, db as d, rsvp as r };
