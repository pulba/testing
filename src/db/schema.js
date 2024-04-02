
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const rsvp = sqliteTable('rsvp',{
    id: integer('id').primaryKey(),
    url: text('url').notNull(),
    name: text('name').notNull(),
    content: text('content').notNull(),
    present: integer('present', { mode: 'boolean' }),
  }
)