import React, { useState, useMemo } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import Header from './Header';
import HeroSection from './HeroSection';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';
import { mockProducts, categories, Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartItems.length}
        onMenuClick={toggleSidebar}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <HeroSection />

      <main className="container mx-auto px-4 py-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedCategory === 'all' ? 'All Products' :
              categories.find(cat => cat.id === selectedCategory)?.name || 'Products'}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Smartfi Electronics. Built for the future of e-commerce.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;