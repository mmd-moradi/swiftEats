import { SanityDocument } from "@sanity/client";

export type FeaturedRestaurantDataType = {
  name: string;
  description: string;
  restaurants: RestaurantDataType[];
} & SanityDocument;

export type RestaurantDataType = {
  name: string;
  description: string;
  image: SanityImage;
  lat: number;
  lng: number;
  address: string;
  rating: number;
  reviews: string;
  type: CategoryDataType;
  dishes: DishDataType[];
} & SanityDocument

export type CategoryDataType = {
  name: string;
  description: string;
  image: SanityImage
} & SanityDocument

export type DishDataType = {
  name: string;
  description: string;
  image: SanityImage;
  price: number;
} & SanityDocument



export type SanityImage = {
  _id: string;
  _type: "image";
  alt: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop?: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};
