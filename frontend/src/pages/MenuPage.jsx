import React, { useState } from 'react';
import { Leaf, Sparkles } from 'lucide-react';
import { menuItems, menuCategories } from '../data/mock';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const groupedItems = menuCategories.map(category => ({
    ...category,
    items: menuItems.filter(item => item.category === category.id)
  }));

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#ECEC75] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0f172a]/70 font-medium mb-4 tracking-wide uppercase">
            Culinary Excellence
          </p>
          <h1 
            className="text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Our Menu
          </h1>
          <p className="text-xl text-[#0f172a]/80 max-w-2xl mx-auto">
            Each dish is thoughtfully crafted using the finest seasonal ingredients, 
            bringing together tradition and innovation on every plate.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white sticky top-20 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center overflow-x-auto py-4 gap-2 sm:gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#0f172a] text-white'
                  : 'bg-[#e6e67c] text-[#0f172a] hover:bg-[#ECEC75]'
              }`}
            >
              All Dishes
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[#0f172a] text-white'
                    : 'bg-[#e6e67c] text-[#0f172a] hover:bg-[#ECEC75]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === 'all' ? (
            // Show grouped by category
            <div className="space-y-16">
              {groupedItems.map((category) => (
                <div key={category.id}>
                  <div className="mb-8">
                    <h2 
                      className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-2"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {category.name}
                    </h2>
                    <p className="text-[#64748b]">{category.description}</p>
                    <div className="w-24 h-1 bg-[#ECEC75] mt-4" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show filtered items
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-[#e6e67c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 
            className="text-2xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Dietary Information
          </h3>
          <p className="text-[#0f172a]/80 mb-6">
            Please inform your server of any allergies or dietary requirements. 
            Our kitchen is happy to accommodate special requests whenever possible.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center text-[#0f172a]">
              <Leaf size={20} className="mr-2 text-green-600" />
              <span>Vegetarian Option</span>
            </div>
            <div className="flex items-center text-[#0f172a]">
              <Sparkles size={20} className="mr-2 text-[#0f172a]" />
              <span>Chef's Signature</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const MenuItemCard = ({ item }) => {
  return (
    <div className="bg-[#e6e67c] p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 
              className="text-xl font-bold text-[#0f172a] group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {item.name}
            </h3>
            {item.isSignature && (
              <Sparkles size={18} className="text-[#0f172a]" />
            )}
          </div>
          <p className="text-[#0f172a]/70 leading-relaxed mb-3">
            {item.description}
          </p>
          {item.isVegetarian && (
            <span className="inline-flex items-center text-sm text-green-700 bg-green-100 px-2 py-1 rounded">
              <Leaf size={14} className="mr-1" /> Vegetarian
            </span>
          )}
        </div>
        <span className="text-2xl font-bold text-[#0f172a] whitespace-nowrap">
          ${item.price}
        </span>
      </div>
    </div>
  );
};

export default MenuPage;
