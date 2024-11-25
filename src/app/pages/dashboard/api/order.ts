export type OrderType = 'buy' | 'sell';


export interface OrdersResponse {
    orders: Orders[]
}
export interface Matches {
  time: number;
  price: string;
  value: string;
  match_amount: string;
  type: OrderType;
  match_id: string;
}
export interface Orders {
  amount: string;
  remain: string;
  price: string;
  value: string;
}
