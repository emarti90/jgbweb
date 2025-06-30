export default {
  name: "article",
  title: "Prensa",
  type: "document",
  fields: [
    // Español
    { name: "title_es", type: "string", title: "Título (ES)", validation: (Rule: any) => Rule.required() },
    { name: "slug_es", type: "slug", title: "Slug (ES)", options: { source: "title_es", maxLength: 96 } , validation: (Rule: any) => Rule.required()},
    { name: "summary_es", type: "text", title: "Resumen (ES)", validation: (Rule: any) => Rule.required() },
    { name: "content_es", type: "array", title: "Contenido (ES)", of: [{ type: "block" }], validation: (Rule: any) => Rule.required() },

    // Inglés
    { name: "title_en", type: "string", title: "Title (EN)", validation: (Rule: any) => Rule.required() },
    { name: "slug_en", type: "slug", title: "Slug (EN)", options: { source: "title_en", maxLength: 96 } , validation: (Rule: any) => Rule.required()},
    { name: "summary_en", type: "text", title: "Summary (EN)" , validation: (Rule: any) => Rule.required()},
    { name: "content_en", type: "array", title: "Content (EN)", of: [{ type: "block" }], validation: (Rule: any) => Rule.required() },

    // Común
    { name: "imageUrl", type: "url", title: "Imagen destacada (Cloudinary URL)" },
    { name: "date", type: "datetime", title: "Fecha", options: { dateFormat: "YYYY-MM-DD" } }
  ]
}
