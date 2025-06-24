export default {
  name: "video",
  title: "Videos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "vimeoUrl",
      title: "Vimeo URL",
      type: "url",
      description: "URL del vídeo en Vimeo (ejemplo: https://vimeo.com/123456789)",
      validation: (Rule: any) => Rule.required().uri({ scheme: ['https'] }),
    },
    {
      name: "main",
      title: "¿Video principal?",
      type: "boolean",
      initialValue: false,
      description: "Marca si este vídeo es el principal (aparecerá en grande)",
    },
  ]
}
