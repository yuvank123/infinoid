import React from 'react';
import { FiShoppingCart, FiTool, FiCloud, FiCpu, FiUser, FiTrendingUp } from 'react-icons/fi';
import OverviewImg3 from '../../../../../../public/images/port2.webp'

const stack = [
  {
    title: "Product Management",
    icon: FiShoppingCart,
    items: ["Pet Supplies & Food", "Inventory Management", "Product Variants", "Image Galleries", "Category Tagging"]
  },
  {
    title: "User Experience",
    icon: FiUser,
    items: ["Login/Register", "Wishlist", "Pet Profiles", "Order History", "Personalized Suggestions"]
  },
  {
    title: "Payment & Checkout",
    icon: FiCpu,
    items: ["Razorpay/Stripe Integration", "Cart & Coupons", "Secure Checkout", "Order Tracking", "Multi-step Forms"]
  },
  {
    title: "Admin & Analytics",
    icon: FiTrendingUp,
    items: ["Sales Dashboard", "User Activity Logs", "Stock Alerts", "Top Selling Reports", "Revenue Trends"]
  },
  {
    title: "Performance & Hosting",
    icon: FiCloud,
    items: ["CDN for Media", "Cloud Hosting", "Lazy Loading", "Optimized Images", "Mobile Optimization"]
  },
  {
    title: "Marketing & Engagement",
    icon: FiTool,
    items: ["Email Campaigns", "Push Notifications", "SEO Optimization", "Referral Programs", "Festive Discounts"]
  }
];

const OnlinePetShopCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent lato-900">
            FurryCart: E-Commerce for Pets
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technologies developed a robust online pet shop platform that brings pet lovers closer to quality pet products and services. This solution offers a seamless shopping experience with personalized recommendations, secure transactions, and efficient inventory management.
          </p>
          <p className="text-xl italic text-purple-300">
            "Where pet care meets convenience — transforming the online pet shopping experience."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex justify-center mt-20">
          <img
            src={OverviewImg3}
            alt="AR/VR Overview"
            className="rounded-2xl w-full max-w-4xl"
          />
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent mb-8">
            ❌ Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Inconsistent User Experience",
                content: "Users experienced varying performance and layout issues across devices and browsers.",
                icon: <FiTool className="text-2xl text-red-400" />
              },
              {
                title: "Slow Page Loads",
                content: "Heavy images and unoptimized content led to slow loading times and frustrated shoppers.",
                icon: <FiCloud className="text-2xl text-purple-400" />
              },
              {
                title: "Complex Inventory Management",
                content: "Keeping track of a large catalog of pet products required a dynamic and scalable solution.",
                icon: <FiShoppingCart className="text-2xl text-red-400" />
              },
              {
                title: "Limited Payment Integration",
                content: "Multiple payment gateways were needed to accommodate diverse customer preferences.",
                icon: <FiCpu className="text-2xl text-purple-400" />
              }
            ].map((item, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implemented Solutions Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Responsive design for seamless multi-device experience",
                "Optimized image loading and caching strategies",
                "Dynamic inventory management system for real-time updates"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                "Integrated multiple secure payment gateways",
                "User review and rating system for enhanced trust",
                "SEO-optimized storefront to drive organic traffic"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
     <section className="py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stack.map((category, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-gray-400/20 hover:border-gray-400/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-gray-500/10"
            >
              <div className="absolute -inset-px rounded-3xl -z-10" />
              <div className="flex items-center mb-6 space-x-4">
                <div className="p-3 rounded-xl bg-gray-400/10 backdrop-blur-sm">
                  <category.icon className="text-3xl text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-orange-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid Technologies?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Personalized Shopping Experience",
                content: "Tailored recommendations and a user-friendly interface ensure each pet owner finds what they need."
              },
              {
                title: "Seamless Multi-Device Integration",
                content: "Optimized for both mobile and desktop, ensuring a consistent experience across platforms."
              },
              {
                title: "Secure & Scalable Architecture",
                content: "Built to handle high traffic and secure transactions, ensuring trust and reliability."
              },
              {
                title: "Comprehensive Product Catalog",
                content: "From pet food to accessories, our platform offers an extensive range of quality products."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500 to-blue-500 p-px rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlinePetShopCaseStudy;
