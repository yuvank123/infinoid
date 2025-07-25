import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi';
import ContactForm from '../../content/contact/contactForm.jsx';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/2">
          <ContactForm />
        </div>

        {/* Right Section - Contact Info */}
        <div className="lg:w-1/2 space-y-8">
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/20 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent mb-8 unbounded">
              Connect Directly
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gradient-to-br from-gray-500/20 to-blue-500/20 rounded-full group-hover:bg-gray-500/30 transition-all">
                  <FiPhone className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Call Us</h3>
                  <p className="text-gray-300">IND: +91-9871973348</p>
                  <p className="text-gray-300">IND: +91-9227088395</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-full group-hover:bg-gray-500/30 transition-all">
                  <FiMail className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Emails</h3>
                  <p className="text-gray-300">sales@infinoid.com</p>
                  <p className="text-gray-300">info@infinoid.com</p>
                  <p className="text-gray-300">careers@infinoid.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-full group-hover:bg-gray-500/30 transition-all">
                  <FiMapPin className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Locations</h3>
                  <p className="text-gray-300">Unit No. C-101, Exotica East Square, Ghaziabad – 201014</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-full group-hover:bg-gray-500/30 transition-all">
                  <FiBriefcase className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Sales Office</h3>
                  <p className="text-gray-300">B-1110, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh – 201305</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
