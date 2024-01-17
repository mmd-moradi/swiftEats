import {createClient, type ClientConfig} from "@sanity/client"

export const config: ClientConfig = {
  projectId: "b156arh8",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
}

export const client = createClient(config)
