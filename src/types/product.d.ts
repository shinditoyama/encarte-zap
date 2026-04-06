interface IProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  department: string;
  discount: number;
  isFlashDeal: boolean;
}

interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
