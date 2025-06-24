import { sanity } from "./clientSanity";

export async function getProjects() {
  return await sanity.fetch(`
    *[_type == "project"] | order(_createdAt desc){
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      url,
      year,
      tags
    }
  `);
}
