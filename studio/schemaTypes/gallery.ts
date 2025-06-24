export default {
  name: "photo",
  title: "Fotos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    { 
        name: "cloudinaryUrl", 
        title: "URL Cloudinary", 
        type: "url", 
        validation: (Rule: any) => Rule.required() 
    },
    { 
        name: "highlight", 
        title: "Destacada", 
        type: "boolean", 
        initialValue: false 
    }
  ]
}
