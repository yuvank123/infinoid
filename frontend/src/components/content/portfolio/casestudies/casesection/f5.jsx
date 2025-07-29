import React from 'react';
import { FiServer, FiCpu, FiCloud, FiTool, FiShoppingCart, FiBox, FiClipboard, FiTruck, FiDatabase, FiActivity, FiSettings } from 'react-icons/fi';
import OverviewImg5 from '../../../../../../public/images/port5.webp'

const stack = [
  {
    title: "Stock Management",
    icon: FiBox,
    items: ["Real-Time Stock Levels", "Batch Tracking", "Low Stock Alerts", "SKU Management", "Barcode Scanning"]
  },
  {
    title: "Order Management",
    icon: FiClipboard,
    items: ["Purchase Orders", "Sales Orders", "Order Status Tracking", "Returns Handling", "Auto Reordering"]
  },
  {
    title: "Supplier & Vendor",
    icon: FiTruck,
    items: ["Vendor Profiles", "Supplier Contracts", "Procurement Logs", "Delivery Scheduling", "Rating & Feedback"]
  },
  {
    title: "Data & Reporting",
    icon: FiDatabase,
    items: ["Inventory Valuation", "Stock Movement Reports", "Dead Stock Identification", "Custom Filters", "CSV/Excel Export"]
  },
  {
    title: "Performance Analytics",
    icon: FiActivity,
    items: ["Turnover Ratio", "Demand Forecasting", "Inventory KPIs", "Restock Timing", "Real-Time Dashboards"]
  },
  {
    title: "System Configuration",
    icon: FiSettings,
    items: ["Warehouse Setup", "Multi-Location Support", "User Access Control", "Notification Rules", "API Integrations"]
  }
];

const InventoryManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 lato-900 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Inventory Management System
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technology developed a comprehensive Inventory Management System that provides real-time tracking of stock levels, automates restocking processes, and optimizes supply chain operations. Designed for scalability, this solution streamlines operations, reduces manual errors, and enhances business efficiency.
          </p>
          <p className="text-xl italic text-purple-300">
            "Transform your inventory into a strategic asset — Infinoid redefines supply chain management."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex justify-center mt-20">
          <img
            src={OverviewImg5}
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
                title: "Fragmented Inventory Data",
                content: "Data was siloed across multiple channels, making it difficult to get a unified view of stock levels.",
                icon: <FiServer className="text-2xl text-red-400" />
              },
              {
                title: "Manual Tracking Inefficiencies",
                content: "Reliance on spreadsheets led to errors and delayed responses in restocking.",
                icon: <FiTool className="text-2xl text-purple-400" />
              },
              {
                title: "Stockouts & Overstock Issues",
                content: "Inaccurate forecasting resulted in either shortages or excess inventory, impacting cash flow.",
                icon: <FiShoppingCart className="text-2xl text-blue-400" />
              },
              {
                title: "Complex Multi-Channel Integration",
                content: "Integrating sales data from various channels posed significant technical challenges.",
                icon: <FiCpu className="text-2xl text-red-400" />
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Real-time inventory tracking with integrated IoT sensors",
                "Automated restocking alerts and order processing",
                "Unified dashboard consolidating multi-channel data"
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
                "Advanced analytics for accurate demand forecasting",
                "Seamless integration with ERP and eCommerce platforms",
                "Cloud-based deployment for scalability and high availability"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-blue-400 pl-4">
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unified Visibility",
                content: "Get a holistic view of your inventory across all channels in real time."
              },
              {
                title: "Operational Efficiency",
                content: "Automate routine tasks and reduce manual errors, saving time and resources."
              },
              {
                title: "Scalable & Flexible",
                content: "Our cloud-based solution grows with your business, handling increased load effortlessly."
              },
              {
                title: "Actionable Insights",
                content: "Advanced analytics and forecasting empower smarter, data-driven decisions."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-500 p-px rounded-2xl">
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

export default InventoryManagementCaseStudy;
