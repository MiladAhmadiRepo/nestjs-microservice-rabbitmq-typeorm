export interface CreateOrderDto  {
    id?: string;
    bookId?: string;
    customerId?: string;
    quantity?: number;
    totalPrice?: number;
}