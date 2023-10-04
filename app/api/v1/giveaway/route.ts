// import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export async function POST(req: Request) {
  const token = process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN;
  const body = await req.json();
  const headersList = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const bodyContent = JSON.stringify({
    properties: {
      email: body.email,
      company: "LMP",
      website: "lmp.com.ng",
      fullname: body.fullname,
    },
  });
  const reqOptions = {
    url: `${process.env.NEXT_PUBLIC_HUBSPOT_URL}/objects/contacts`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  const { data } = await axios.request(reqOptions);
  // console.log("GiveAway-Success:", data);
  return new Response("Success");
}
