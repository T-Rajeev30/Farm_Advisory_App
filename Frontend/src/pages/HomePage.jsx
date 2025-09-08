import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ onGetStarted }) => {
  // SVG Icons for features section
  const icons = {
    crop: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
    soil: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
    weather: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
    pest: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
    market: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
    voice: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
    offline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
    feedback: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-orange-500 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L9 6l3 4-3 4-3 4-3 4 3-4 3-4 3-4-3-4zM16 12l-2 2-2 2-2 2-2 2 2-2 2-2 2-2 2-2z" />
      </svg>
    ),
  };

  const Section = ({ id, title, children, bgColor = "bg-white" }) => (
    <section id={id} className={`py-16 sm:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center text-center p-4 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542451365116-c67dd114b7e1?q=80&w=2000&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-md mb-4">
            Smart Advice for Smarter Farming.
          </h1>
          <p className="text-lg sm:text-xl font-medium mb-10 drop-shadow-sm">
            Get real-time crop recommendations, soil health tips, weather
            alerts, and market prices to improve your yield and income.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onGetStarted}
              className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Started
            </button>
            <a
              href="#features"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-green-700 transition-colors transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-white/20 backdrop-blur-md text-white py-2 px-4 rounded-full text-sm hover:bg-white/30 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"
                />
              </svg>
              Voice
            </button>
            <select className="bg-white/20 backdrop-blur-md text-white py-2 px-4 rounded-full text-sm cursor-pointer">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section id="features" title="How Our App Helps You">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              title: "Personalized Crop Advisory",
              icon: icons.crop,
              text: "Tailored recommendations based on soil and weather data.",
            },
            {
              title: "Soil Health Check",
              icon: icons.soil,
              text: "Guidance on fertilizers and nutrients for optimal growth.",
            },
            {
              title: "Weather Alerts",
              icon: icons.weather,
              text: "Real-time forecasts and warnings to protect your crops.",
            },
            {
              title: "Pest & Disease Info",
              icon: icons.pest,
              text: "Identify problems and get treatment steps instantly.",
            },
            {
              title: "Market Price Insights",
              icon: icons.market,
              text: "Know the best time and place to sell your crops.",
            },
            {
              title: "Multilingual & Voice Support",
              icon: icons.voice,
              text: "Assistance in your native language, even without reading.",
            },
            {
              title: "Offline Access & PWA",
              icon: icons.offline,
              text: "Works without internet and installs on your phone like an app.",
            },
            {
              title: "Feedback & Improvement",
              icon: icons.feedback,
              text: "Share your experiences to make the app even better.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section id="how-it-works" title="How It Works" bgColor="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-green-600 mb-4">
              1
            </span>
            <p className="text-gray-700">
              Enter your location or use GPS to get personalized advice.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-green-600 mb-4">
              2
            </span>
            <p className="text-gray-700">
              Check soil and crop recommendations from our smart system.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-green-600 mb-4">
              3
            </span>
            <p className="text-gray-700">
              Get weather alerts and pest management tips to protect your farm.
            </p>
          </div>
        </div>
      </Section>

      {/* Why It Matters Section */}
      <Section id="why-it-matters" title="Why It Matters" bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-green-800">20-30%</h3>
            <p className="text-gray-700 mt-2">
              Potential increase in crop yield and income.
            </p>
          </div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-800">Reduced Costs</h3>
            <p className="text-gray-700 mt-2">
              Save money by reducing unnecessary fertilizer and pesticide use.
            </p>
          </div>
          <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-yellow-800">Empowerment</h3>
            <p className="text-gray-700 mt-2">
              Bring the power of technology to rural communities for a
              sustainable future.
            </p>
          </div>
        </div>
      </Section>

      {/* Get Involved / CTA Section */}
      <Section
        id="get-involved"
        title="Join the Smart Farming Revolution"
        bgColor="bg-green-700 text-white"
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Ready to transform your farm? Our system is designed for you. Try it
            today and experience a smarter way to farm.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onGetStarted}
              className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Try the App
            </button>
            <a
              href="#features"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-green-700 transition-colors"
            >
              Provide Feedback
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <span className="text-sm font-semibold mb-2">
              PWA Feature: Available Offline
            </span>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Install as App
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
