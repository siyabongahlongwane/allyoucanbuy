import { Review } from "./review";

export interface Product {
  productDetails: {
    name: string;
    price: string;
    images: Array<string>;
    description: string;
    brand: string;
    stockCount: string;
    category: string;
    reviews: Array<Review>;
    rating: string;
    size: string,
    color: string;
  };
  offer: {
    isOnSale: boolean;
    salePrice: string;
    saleStartDate: string;
    saleEndDate: string;
  };
  vendor: {
    name: string;
    vendorId: string;
    company: string;
  };
}
