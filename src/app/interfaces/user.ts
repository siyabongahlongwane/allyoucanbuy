import { Order } from "./order";
import { Product } from "./product";

export interface User {
  userDetails: {
    name: string;
    phone: string;
    email: string;
    password: string;
    role: {
      id: string;
      description: string;
    };
    isVerified: boolean;
  };
  address: {
    street: string;
    town: string;
    province: string;
    code: string;
  };
  wishlist: Array<Product>;
  cart: Array<Product>;
  orders: Array<Order>;
}
