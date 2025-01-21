// /**
// * This configuration file lets you run `$ sanity [command]` in this folder
// * Go to https://www.sanity.io/docs/cli to learn more.
// **/
// import { defineCliConfig } from 'sanity/cli'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET


// export default defineCliConfig({ api: { projectId, dataset } })


import { createClient } from "next-sanity";

import { groq } from "next-sanity";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // Use CDN for faster access (can be false for more fresh data)
});

export async function GetCarData() {
  // Define your GROQ query (replace `cars` with your actual document type or collection)
  const query = groq`
    *[_type == "car"] { 
      _id,
      name,
      model,
      make,
      year
    }
  `;

  // Fetch the data using the Sanity client
  const data = await client.fetch(query);

  return data;
}

