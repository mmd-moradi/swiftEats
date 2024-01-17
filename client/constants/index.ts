export type RestaurantType = {
  id: number;
    name: string;
    image: any;
    description: string;
    lng: number;
    lat: number;
    address: string;
    stars: number;
    reviews: string;
    category: string;
    dishes: DishesType[];
}

export type DishesType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
}


export const categories = [
  {
      id: 1,
      name: "Pizza",
      image: require("../assets/images/categories/icons8-pizza-96.png"),
  },
  {
      id: 2,
      name: "Burger",
      image: require("../assets/images/categories/icons8-hamburger-96.png"),
  },
  {
      id: 3,
      name: "Italian",
      image: require("../assets/images/categories/icons8-spaghetti-96.png"),
  },
  {
      id: 4,
      name: "Chinese",
      image: require("../assets/images/categories/icons8-tropical-fish-96.png"),
  },
  {
      id: 5,
      name: "Noodles",
      image: require("../assets/images/categories/icons8-takeout-box-96.png"),
  },
  {
      id: 6,
      name: "Sweets",
      image: require("../assets/images/categories/icons8-tropical-drink-96.png"),
  },

]


export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
      {
          id: 1,
          name: "Papa Johns",
          image: require("../assets/images/restaurants/pizzaDish.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
              {
                 id: 1,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
              {
                 id: 2,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
              {
                 id: 3,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
          ]
  
      },
      {
          id: 2,
          name: "Papa Johns",
          image: require("../assets/images/restaurants/pizzaDish.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
              {
                 id: 1,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
              {
                 id: 2,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
              {
                 id: 3,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
          ]
  
      },
      {
          id: 3,
          name: "Papa Johns",
          image: require("../assets/images/restaurants/pizzaDish.jpg"),
          description: "Hot and spicy pizzas",
          lng: -85.5324269,
          lat: 38.2145602,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
              {
                 id: 1,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
              {
                 id: 2,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
              {
                 id: 3,
                 name: "pizza",
                 description: "cheezy garlic pizza",
                 price: 10,
                 image:  require("../assets/images/dishes/pizzaDish.jpeg")
              },
          ]
  
      }
  ]
}