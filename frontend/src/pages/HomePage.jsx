import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Star, ChefHat } from 'lucide-react';
import { restaurantInfo, menuItems, testimonials, featuredImages } from '../data/mock';

const HomePage = () => {
  const signatureItems = menuItems.filter(item => item.isSignature).slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#ECEC75]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-1/2 h-full hidden lg:block">
            <img
              src={featuredImages.hero}
              alt="Fine dining"
              className="w-full h-full object-cover rounded-l-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECEC75] via-transparent to-transparent" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-[#0f172a]/70 font-medium mb-4 tracking-wide uppercase">
              Welcome to
            </p>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0f172a] mb-6 leading-tight"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {restaurantInfo.name}
            </h1>
            <p className="text-xl text-[#0f172a]/80 mb-8 leading-relaxed">
              {restaurantInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center bg-[#0f172a] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1e293b] transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                View Our Menu
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-[#0f172a] text-[#0f172a] px-8 py-4 rounded-md font-semibold hover:bg-[#0f172a] hover:text-white transition-all duration-200"
              >
                Make a Reservation
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-64">
          <img
            src={featuredImages.hero}
            alt="Fine dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ECEC75] via-[#ECEC75]/50 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Farm Fresh',
                description: 'Locally sourced ingredients from trusted farms'
              },
              {
                icon: ChefHat,
                title: 'Expert Chefs',
                description: 'Culinary masters crafting unforgettable dishes'
              },
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized for excellence in fine dining'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-[#e6e67c] p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0f172a] rounded-full mb-6">
                  <feature.icon size={28} className="text-[#ECEC75]" />
                </div>
                <h3 
                  className="text-xl font-bold text-[#0f172a] mb-3"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#0f172a]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#ECEC75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#0f172a]/70 font-medium mb-4 tracking-wide uppercase">
                Our Story
              </p>
              <h2 
                className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                A Tradition of Excellence
              </h2>
              <p className="text-lg text-[#0f172a]/80 mb-6 leading-relaxed">
                Since 2010, La Maison Verte has been a destination for those who appreciate 
                the finer things in life. Our commitment to quality, sustainability, and 
                exceptional service has made us a beloved fixture in the community.
              </p>
              <p className="text-lg text-[#0f172a]/80 mb-8 leading-relaxed">
                Every dish we serve tells a story of passion, tradition, and innovation. 
                We invite you to join us and experience the magic of true farm-to-table dining.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-[#0f172a] font-semibold hover:opacity-70 transition-opacity"
              >
                Learn more about us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={featuredImages.interior}
                alt="Restaurant interior"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0f172a] text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold" style={{ fontFamily: "'Crimson Text', serif" }}>15+</p>
                <p className="text-sm text-gray-300">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#0f172a]/70 font-medium mb-4 tracking-wide uppercase">
              From Our Kitchen
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Signature Dishes
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Discover our chef's most celebrated creations, each crafted with care and passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {signatureItems.map((item) => (
              <div 
                key={item.id}
                className="bg-[#e6e67c] p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 
                      className="text-2xl font-bold text-[#0f172a] mb-2 group-hover:opacity-80 transition-opacity"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {item.name}
                    </h3>
                    {item.isVegetarian && (
                      <span className="inline-flex items-center text-sm text-green-700 bg-green-100 px-2 py-1 rounded">
                        <Leaf size={14} className="mr-1" /> Vegetarian
                      </span>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-[#0f172a]">${item.price}</span>
                </div>
                <p className="text-[#0f172a]/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center bg-[#0f172a] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1e293b] transition-all duration-200 hover:-translate-y-0.5"
            >
              View Full Menu
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#ECEC75] font-medium mb-4 tracking-wide uppercase">
              What Our Guests Say
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Guest Experiences
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#ECEC75] fill-[#ECEC75]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="text-white font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#ECEC75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Ready to Experience Fine Dining?
          </h2>
          <p className="text-xl text-[#0f172a]/80 mb-8">
            Join us for an unforgettable culinary journey. Reserve your table today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-[#0f172a] text-white px-10 py-4 rounded-md font-semibold hover:bg-[#1e293b] transition-all duration-200 hover:-translate-y-0.5 shadow-lg text-lg"
          >
            Make a Reservation
            <ArrowRight size={24} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
