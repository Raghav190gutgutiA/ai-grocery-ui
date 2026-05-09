import React from "react";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";
// import HeroSection from "./HeroSection";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Why Choose Snapcart?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Experience smart grocery shopping with fast delivery,
            fresh products, and affordable prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-5">🥦</div>

              <h3 className="text-2xl font-bold text-green-700">
                Fresh Products
              </h3>

              <p className="text-gray-600 mt-3">
                Farm-fresh vegetables, fruits, and organic groceries
                delivered daily.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-5">🚚</div>

              <h3 className="text-2xl font-bold text-green-700">
                Fast Delivery
              </h3>

              <p className="text-gray-600 mt-3">
                Lightning-fast doorstep delivery with live order tracking.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-5">💳</div>

              <h3 className="text-2xl font-bold text-green-700">
                Easy Payments
              </h3>

              <p className="text-gray-600 mt-3">
                Pay securely using UPI, cards, wallets, and cash on delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Start Shopping Today 🛒
        </h2>

        <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
          Join thousands of happy customers enjoying fresh groceries
          delivered instantly.
        </p>

        <button onClick={()=>navigate("/all-products")} className="mt-8 bg-white text-green-700 hover:bg-green-100 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300">
          Explore Products
        </button>
      </section>
    </div>
  );
}

export default Home;