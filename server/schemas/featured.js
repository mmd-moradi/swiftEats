import { defineField, defineType } from "sanity"

export default defineType({
  name: "featured",
  title: "Featured Restaurants",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      validation: rule => rule.max(200),
    }),
    defineField({
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "resturant" }] }]
    })
  ],
})