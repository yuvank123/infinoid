import React from 'react';
import { FiShoppingCart, FiTruck, FiPhoneCall, FiLock, FiActivity } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/bk1.webp';
import OverviewImg2 from '../../../../../../public/images/bk2.webp';
import OverviewImg3 from '../../../../../../public/images/bk3.webp'; // Replace with your bakery image

const stack = [
  {
    title: "Online Ordering",
    icon: FiShoppingCart,
    items: [
      "Custom Cake Builder",
      "Add to Cart & Wishlist",
      "One-Click Checkout",
      "Order Scheduling",
      "Discount Code Support"
    ]
  },
  {
    title: "Delivery & Logistics",
    icon: FiTruck,
    items: [
      "Same-Day Delivery Options",
      "Live Delivery Tracking",
      "Pickup & Doorstep Options",
      "Delivery Slot Selection",
      "Pincode Service Availability"
    ]
  },
  {
    title: "Customer Support",
    icon: FiPhoneCall,
    items: [
      "Live Chat Assistance",
      "Order Inquiry Support",
      "Feedback & Ratings",
      "Help Center Integration",
      "WhatsApp Support"
    ]
  },
  {
    title: "Security & Payments",
    icon: FiLock,
    items: [
      "Secure Payment Gateway",
      "Multiple Payment Options",
      "Order Confirmation Email/SMS",
      "Fraud Detection",
      "User Data Protection"
    ]
  },
  {
    title: "Performance & Insights",
    icon: FiActivity,
    items: [
      "Sales Analytics",
      "Top Selling Products",
      "Customer Purchase Trends",
      "Inventory Monitoring",
      "Exportable Reports"
    ]
  },
  {
    title: "Offers & Loyalty",
    icon: FiShoppingCart,
    items: [
      "Coupon Management",
      "Loyalty Points System",
      "Referral Discounts",
      "First-Time Buyer Offers",
      "Festival & Seasonal Deals"
    ]
  }
];

const BakeryEcommerceCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-3xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent unbounded">
            Bakery E-Commerce Platform
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
            Infinoid Technology designed a complete E-Commerce platform tailored for artisan bakeries and home-based dessert businesses. With elegant UI and seamless backend automation, this system transforms how bakeries handle online orders, deliveries, and product showcases.
          </p>
          <p className="text-xl italic text-blue-300">
            "From oven to doorstep — sell sweet, sell smart with Infinoid."
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-20 gap-2">
          <img
            src={OverviewImg3}
            alt="Bakery E-Commerce Platform"
            className="rounded-2xl max-w-2xl md:h-[400px]"
          />
          <img
            src={OverviewImg1}
            alt="Bakery E-Commerce Platform"
            className="rounded-2xl max-w-2xl md:h-[400px]"
          />
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-300 bg-clip-text text-transparent mb-8">
            ❌ Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Manual Order Processing",
                content: "Handling orders via phone or DM led to errors and missed deliveries.",
                icon: <FiPhoneCall className="text-2xl text-purple-400" />
              },
              {
                title: "No Real-Time Inventory",
                content: "Frequent stock-outs due to lack of synced inventory tracking.",
                icon: <FiActivity className="text-2xl text-pink-400" />
              },
              {
                title: "Limited Delivery Scheduling",
                content: "Customers couldn’t pick time slots, leading to delivery delays.",
                icon: <FiTruck className="text-2xl text-green-400" />
              },
              {
                title: "Insecure Payments",
                content: "No payment gateway integration led to trust and refund issues.",
                icon: <FiLock className="text-2xl text-red-400" />
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Real-time product catalog with high-res images and categories",
                "Integrated payment gateways: Razorpay, Stripe, UPI",
                "Scheduled delivery and pickup module with time slot selection"
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
                "Dynamic inventory & order status updates",
                "Admin dashboard with analytics and coupon controls",
                "Mobile-first responsive UI for seamless customer browsing"
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

      {/* Why Choose Infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "User-Friendly UI",
                content: "Minimal clicks to checkout, even for non-tech-savvy customers."
              },
              {
                title: "Order Accuracy",
                content: "Real-time updates reduce miscommunication and wrong orders."
              },
              {
                title: "Secure Transactions",
                content: "Encrypted payment flow with detailed invoices and receipts."
              },
              {
                title: "Growth-Oriented",
                content: "Supports discounts, seasonal sales, and upselling modules."
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

export default BakeryEcommerceCaseStudy;
