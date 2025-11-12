import { faker } from '@faker-js/faker';
import type { Product } from './types';

const categories = ['Dresses', 'Tops', 'Jeans', 'Jackets', 'Accessories'];

// A new, fully verified, and reliable list of high-quality images for each category.
const curatedImages = {
  Dresses: [
    'https://images.unsplash.com/photo-1595505193393-9a0c77ea1316?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
  ],
  Tops: [
    'https://images.unsplash.com/photo-1620799140408-edc6d5f96333?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581655353564-df123a5eb820?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
  ],
  Jeans: [
    'https://images.unsplash.com/photo-1604176354204-926873782855?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541099649105-f69AD21f3246?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=800&auto=format&fit=crop',
  ],
  Jackets: [
    'https://images.unsplash.com/photo-1591047139829-d916e6caea4c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1603217041431-9a9937e38317?q=80&w=800&auto=format&fit=crop',
  ],
  Accessories: {
    Watch: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
    Handbag: 'https://images.unsplash.com/photo-1590737144026-456d558997a3?q=80&w=800&auto=format&fit=crop',
    Necklace: 'https://images.unsplash.com/photo-1611652022417-a55445a6b439?q=80&w=800&auto=format&fit=crop',
    Sunglasses: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    Belt: 'https://images.unsplash.com/photo-1557890628-d3936a05333e?q=80&w=800&auto=format&fit=crop',
    Bracelet: 'https://images.unsplash.com/photo-1611081626496-95924a316c73?q=80&w=800&auto=format&fit=crop',
    Ring: 'https://images.unsplash.com/photo-1598561086322-ac5126f3a813?q=80&w=800&auto=format&fit=crop',
    Earrings: 'https://images.unsplash.com/photo-1588653299112-331a770375aa?q=80&w=800&auto=format&fit=crop',
  }
};

const accessoryTypes = Object.keys(curatedImages.Accessories) as (keyof typeof curatedImages.Accessories)[];

function createRandomProduct(): Product {
    const id = faker.string.uuid();
    const category = faker.helpers.arrayElement(categories);
    
    let name: string;
    let imageUrl: string;

    if (category === 'Accessories') {
        const accessoryType = faker.helpers.arrayElement(accessoryTypes);
        name = `${faker.commerce.productAdjective()} ${accessoryType}`;
        imageUrl = curatedImages.Accessories[accessoryType];
    } else {
        const singularCategory = category.endsWith('s') ? category.slice(0, -1) : category;
        name = `${faker.commerce.productAdjective()} ${singularCategory}`;
        imageUrl = faker.helpers.arrayElement(curatedImages[category as keyof Omit<typeof curatedImages, 'Accessories'>]);
    }

    return {
        id: id,
        name: name,
        category: category,
        price: faker.commerce.price({ min: 20, max: 200, dec: 0, symbol: '£' }),
        imageUrl: imageUrl,
    };
}

export const products: Product[] = faker.helpers.multiple(createRandomProduct, {
    count: 20,
});
