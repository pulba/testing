import { db } from "../../db/db.js";
import { rsvp } from "../../db/schema.js";

export const prerender = false;

export async function GET({ params, request }) {

  const url = new URL(request.url);
  const data = Object.fromEntries(new URLSearchParams(url.search));

  if(data.present == "0"){
    data.present = 0;
  }

  
  if(Object.keys(data).length != 0){
    await db.insert(rsvp).values(data); // send
  }

  return new Response(JSON.stringify(data));

}
