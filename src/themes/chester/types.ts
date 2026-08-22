export interface ChesterProduct {
  id: string;
  name: string;
  category: 'sofa' | 'corner' | 'armchair' | 'set';
  tagline: string;
  description: string;
  startingPrice: string;
  dimensions: {
    length: number;
    depth: number;
    height: number;
  };
  leatherType: string;
  tuftingDepth: string;
  cushionFill: string;
  warranty: string;
  primaryImage: string;
  gallery: string[];
  availableLeathers: string[];
  sizeOptions: string[];
  isBestseller?: boolean;
  isNew?: boolean;
}

export interface LeatherOption {
  id: string;
  name: string;
  category: 'Hakiki İtalyan Derisi' | 'Vintage Pull-Up' | 'İtalyan Kadife' | 'Doğal Nubuk';
  origin: string;
  hex: string;
  description: string;
  image: string;
  thickness: string;
}
