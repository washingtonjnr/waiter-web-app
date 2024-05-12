export type ProductType = {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  ingredients: {
    name: string;
    icon: string;
  }[];
};
