import { d as db, r as rsvp } from './rsvp-get_BehlboVO.mjs';

const prerender = false;

async function GET({ params, request }) {

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

export { GET, prerender };
