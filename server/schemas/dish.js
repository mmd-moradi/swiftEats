
import { defineField, defineType } from "sanity"

export default defineType({
  name: "dish",
  title: "Dishes",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Dish Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Dish Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Dish Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Dish price in USD",
      type: "number",
      validation: (Rule) => Rule.required(),
    })
  ],
})
