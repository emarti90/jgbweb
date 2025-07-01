export default {
  name: "reel",
  title: "Reel",
  type: "document",
  fields: [
    {
      name: "videoUrl",
      title: "URL del vídeo (Cloudinary)",
      type: "url",
      validation: (Rule: any) => Rule.required().uri({ scheme: ["https"] }),
    },
    {
      name: "poster",
      title: "Imagen de portada (opcional)",
      type: "url",
    },
    {
      name: "title",
      title: "Título (opcional)",
      type: "string",
    },
  ],
};
