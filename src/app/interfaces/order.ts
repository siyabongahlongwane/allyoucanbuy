import { Product } from "./product";

export interface Order {
  name: string;
  orderNumber: string;
  orderDate: string;
  shipDate: string;
  vendorIds: Array<string>;
  products: Array<Product>;
  total: string
}
