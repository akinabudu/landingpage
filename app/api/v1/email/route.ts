// import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";
import {google} from "googleapis"

export async function POST(req: Request) {
  try{
 // const token = process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN;
 const body = await req.json();
 // const headersList = {
 //   "Content-Type": "application/json",
 //   // Authorization: `Bearer ${token}`,
 // };
 const d = new Date()
 const entryDate= d.toUTCString()
 const auth = await google.auth.getClient({
   credentials:{
     client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
     private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY
   },
   scopes:[
     'https://www.googleapis.com/auth/drive',
     'https://www.googleapis.com/auth/drive.file',
     'https://www.googleapis.com/auth/spreadsheets',
   ]
 })

 const sheets = google.sheets({auth, version:'v4'})
 const response = await sheets.spreadsheets.values.append({
   spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
   range: 'A1:D1',
   valueInputOption: 'USER_ENTERED',
   requestBody:{
     values:[
       [`${entryDate}`, body.fullName, body.email, "lmp_com_ng_giveaway"]
     ]
   }
 })

 // const bodyContent = JSON.stringify({
 //   properties: {
 //     email: body.email,
 //     company: "LMP",
 //     website: "lmp.com.ng",
 //     fullname: body.fullname,
 //   },
 // });
 // const reqOptions = {
 //   url: `${process.env.NEXT_PUBLIC_HUBSPOT_URL}/objects/contacts`,
 //   method: "POST",
 //   headers: headersList,
 //   data: bodyContent,
 // };

 // const { data } = await axios.request(reqOptions);
 // console.log("GiveAway-Success:", data);
 return new Response("Success");  
  }catch(e){
    return new Response("Error");

  }
 
}
