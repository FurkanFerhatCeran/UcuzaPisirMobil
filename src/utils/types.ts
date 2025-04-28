// Malzeme tipi
export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
}

// Tarif tipi
export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number; // Dakika cinsinden hazırlama süresi
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  ingredients: Ingredient[];
  instructions: string[];
  category: string;
} 