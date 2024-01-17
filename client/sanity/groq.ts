import { client } from "./sanity"

export const getFeaturedGroq = `
*[_type == "featured"]{
  ...,
  restaurants[] -> {
    ...,
    dishes[] -> {
      ...
    },
    type -> {
    name
    }
  }
}`

export const getFeaturedByIdGroq = `
*[_type == "featured" && _id == $id]{
  ...,
  restaurants[] -> {
    ...,
    dishes[] -> {
      ...
    },
    type -> {
    name
    }
  }
}
`
export const getCategoriesGroq = `*[_type == "category"]{...}`

export const getData = (query: string, params?: string) => client.fetch(query, params);

