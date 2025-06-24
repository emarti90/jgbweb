export default {
  name: "cv",
  title: "CV",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "photoUrl",
      title: "Foto (URL Cloudinary)",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "bio",
      title: "Biografía",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "cvUrl",
      title: "CV (Archivo PDF)",
      type: "url",
      validation: (Rule: any) => Rule.required().uri({ scheme: ["https"] }),
      description: "URL directa al archivo PDF del CV (Cloudinary, Drive, etc.)"
    },
  ],
};
