import { sanity } from './clientSanity'

export async function getVideobook() {
  return await sanity.fetch(
    `*[_type == "video"]{
      _id,
      title,
      vimeoUrl,
      main
    }`
  )
}
