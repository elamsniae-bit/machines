import productsData from './data.json';

export interface Product {
  id: number;
  name: string;
  brand: string;
  categorie: string;
  price: string;
  model: string;
  condition: string;
  year: string;
  image: string;
  description: string;
  weight: string;
}

export interface Category {
  id: number;
  name: string;
}

export const products: Product[] = productsData.products;
export const categories: Category[] = productsData.categories;

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.categorie.trim() === category.trim());
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}
