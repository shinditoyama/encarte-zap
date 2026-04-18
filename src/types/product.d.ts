interface IProduct {
  id: number;
  name: string;
  price: string;
  salePrice: string | null;
  imageUrl: string;
  isPromo: boolean | null;
}

interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
