import { sanity } from "./clientSanity";

export async function getGallery() {
  return await sanity.fetch(`
    *[_type == "photo"] | order(highlight desc, _createdAt desc) {
      _id, title, cloudinaryUrl, highlight
    }
  `);
}
