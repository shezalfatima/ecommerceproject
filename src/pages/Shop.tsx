import ProductCard from '@/components/shared/ProductCard';
import { products } from '@/lib/mockData';

const Shop = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Shop Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
