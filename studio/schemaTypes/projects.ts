export default {
  name: "project",
  title: "Proyectos",
  type: "document",
  fields: [
    // Título español
    {
      name: "title_es",
      title: "Título (Español)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    // Título inglés
    {
      name: "title_en",
      title: "Title (English)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    // Descripción español
    {
      name: "description_es",
      title: "Descripción (Español)",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    // Descripción inglés
    {
      name: "description_en",
      title: "Description (English)",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    // URL del proyecto (puedes dejar solo uno, porque es universal)
    {
      name: "url",
      title: "Enlace (Imagen Cloudinary)",
      type: "url",
      validation: (Rule: any) => Rule.required().uri({ scheme: ["https"] }),
      description: "URL de la imagen del proyecto (Cloudinary, debe empezar por https://)",
    },
    // Etiquetas (en español, pero puedes usar slug/clave interna y traducir en frontend)
    {
      name: "tags",
      title: "Categorías",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Action", value: "action" },
              { title: "Adventure", value: "adventure" },
              { title: "Comedy", value: "comedy" },
              { title: "Drama", value: "drama" },
              { title: "Sci-Fi", value: "scifi" },
              { title: "Thriller", value: "thriller" },
              { title: "Fantasy", value: "fantasy" },
              { title: "Horror", value: "horror" },
              { title: "Romance", value: "romance" },
              { title: "Crime", value: "crime" },
              { title: "Mistery", value: "mistery" },
              { title: "Musical", value: "musical" }
            ],
            layout: "tags" // visualización tipo "chips" (opcional, puede ser checkbox si lo prefieres)
          }
        }
      ],
      description: "Selecciona una o varias categorías",
    },
  ],
}
