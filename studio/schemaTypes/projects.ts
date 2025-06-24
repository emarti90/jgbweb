export default {
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "url",
      title: "Enlace",
      type: "url",
      validation: (Rule: any) => Rule.required().uri({ scheme: ["https"] }),
      description: "URL del proyecto (debe empezar por https://)",
    },
    {
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [{ type: "string" }],
      description: "Palabras clave o categorías (opcional)",
    },
  ],
};
