import React from 'react';
import BadgeLogo from '../assets/badge.png'; 

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 text-center">
    <h1 className="text-5xl font-extrabold text-blue-900 mb-6">About Us</h1>
    <p className="text-xl text-gray-800 mb-8">
      We are dedicated to protecting our oceans and promoting sustainable coastal tourism.
      Our mission is to ensure that everyone can enjoy the beauty of our coasts while
      contributing to their preservation and safety.
    </p>

    
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Ocean Guardian Badge 🏅</h2>
      <p className="text-md text-gray-600 mb-4">
        The Ocean Guardian Badge recognizes those who actively protect our oceans.
        Earn this badge by participating in beach cleanups, monitoring water quality, supporting
        local marine life, and more!
      </p>
      <img src={BadgeLogo} alt="Ocean Guardian Badge Logo" className="mx-auto mb-4 h-40 w-40 transition-transform duration-300 hover:scale-105" />
      <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300">
        Learn More
      </button>
    </div>

    
    <div className="bg-blue-50 shadow-lg rounded-lg p-6 mb-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Qualifications for the Ocean Guardian Badge</h2>
      <ul className="list-disc list-inside text-left text-md text-gray-700 space-y-2">
        <li>Participate in organized beach cleanups.</li>
        <li>Submit accurate reports on water quality or ocean conditions.</li>
        <li>Engage in activities that support local marine life and habitats.</li>
        <li>Promote awareness about sustainable coastal tourism.</li>
        <li>Assist in emergency situations or provide crucial information during ocean alerts.</li>
      </ul>
    </div>

   
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Get Involved</h2>
      <p className="text-md text-gray-600 mb-4">
        Join our community of ocean guardians! Contribute to our cause, protect our oceans, and earn rewards.
        Participate in events, share your experiences, and encourage others to take action.
      </p>
      <button className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300">
        Join Now
      </button>
    </div>


    <div className="bg-blue-50 shadow-lg rounded-lg p-6 mb-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
      <p className="text-md text-gray-600">
        Our vision is a world where our oceans are clean, safe, and vibrant. Through education,
        community involvement, and innovative technology, we aim to make a significant impact on coastal conservation and safety.
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
      <p className="text-md text-gray-600 mb-4">
        Have questions or want to learn more about our programs? Reach out to us at{' '}
        <a href="mailto:info@coastalguard.com" className="text-blue-500 underline hover:text-blue-700">
          info@coastalguard.com
        </a>.
      </p>
    </div>
  </div>
);

export default About;
