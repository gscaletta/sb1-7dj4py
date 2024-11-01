import React from 'react';
import { Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategorySection from './components/listings/CategorySection';
import { mockListings } from './data/mockListings';

function App() {
  const handleBuyTicket = (listingId: string) => {
    console.log('Buy ticket for listing:', listingId);
  };

  const handleBuyNow = (listingId: string) => {
    console.log('Buy now listing:', listingId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-2 bg-purple-100 rounded-full mb-4">
            <div className="flex items-center space-x-2 px-4">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-800">Try Your Luck Today</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Win Amazing Products
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Buy tickets for a chance to win your dream items at a fraction of their price
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4">
        <CategorySection
          title="Latest Tech"
          description="The newest gadgets and electronics up for grabs"
          listings={mockListings.tech}
          onBuyTicket={handleBuyTicket}
          onBuyNow={handleBuyNow}
        />

        <CategorySection
          title="Luxury Items"
          description="Premium watches, bags, and accessories"
          listings={mockListings.luxury}
          onBuyTicket={handleBuyTicket}
          onBuyNow={handleBuyNow}
        />

        <CategorySection
          title="Gaming"
          description="Latest consoles and gaming accessories"
          listings={mockListings.gaming}
          onBuyTicket={handleBuyTicket}
          onBuyNow={handleBuyNow}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;