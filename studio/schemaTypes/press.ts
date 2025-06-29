export default {
  name: "article",
  title: "Prensa",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Título" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title", maxLength: 96 } },
    { name: "summary", type: "text", title: "Resumen" },
    { name: "content", type: "array", title: "Contenido", of: [{ type: "block" }] },
    { name: "imageUrl", type: "url", title: "Imagen destacada (Cloudinary URL)" },
    { name: "date", type: "datetime", title: "Fecha", options: { dateFormat: "YYYY-MM-DD" } }
  ]
}
