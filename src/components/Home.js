import React from 'react';
import { Line } from 'react-chartjs-2';
import Lottie from 'react-lottie';
import waveAnimationData from '../assets/Animation - 1724475247627.json';
import currentConditionsData from '../assets/Animation - 1724475555278.json';


import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);


const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Ocean Temperature (°C)',
      data: [14, 15, 16, 18, 19, 20, 22],
      fill: false,
      backgroundColor: '#1E40AF',
      borderColor: '#1E40AF',
      borderWidth: 2,
      tension: 0.1,
    },
  ],
};


const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#1E40AF',
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}°C`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderColor: '#E5E7EB',
        borderWidth: 1,
      },
      ticks: {
        color: '#1E40AF',
      },
    },
  },
};


const waveOptions = {
  loop: true,
  autoplay: true,
  animationData: waveAnimationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const conditionsOptions = {
  loop: true,
  autoplay: true,
  animationData: currentConditionsData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
     
      <header className="text-center mt-10">
        <h1 className="text-5xl font-bold text-blue-900 mb-4 animate__animated animate__fadeIn">CoastGuard</h1>
        <p className="text-lg text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Real-time updates on ocean conditions, safety alerts, and more.
        </p>
        <Lottie options={waveOptions} height={800} width={800} />
      </header>

      <div className="flex justify-center mt-10 animate__animated animate__fadeIn animate__delay-2s">
        <Lottie options={conditionsOptions} height={200} width={400} />
      </div>

     
      <section className="mt-10" style={{ width: '80%', margin: 'auto', height: '400px' }}>
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4 animate__animated animate__fadeIn">Ocean Data Analytics</h2>
        <div className="bg-white rounded-lg shadow-md p-4 animate__animated animate__fadeIn animate__delay-3s">
          <Line data={chartData} options={chartOptions} />
        </div>
      </section>

     
      <section className="mt-10 px-4 py-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-4s">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Real-Time Safety Alerts:</strong> Get instant updates on ocean conditions and safety warnings.</li>
          <li><strong>Personalized Trip Planner:</strong> Plan your trips with accurate weather and safety information.</li>
          <li><strong>Interactive Beach Map:</strong> Explore beaches and view safety ratings and conditions.</li>
          <li><strong>Community Reporting:</strong> Report issues and contribute to beach safety.</li>
        </ul>
      </section>

    
      <section className="mt-10 px-4 py-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-5s">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">What Our Users Say</h2>
        <div className="flex flex-col space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg text-gray-700">
              "CoastGuard has been a game-changer for our beach outings. The real-time updates keep us safe and informed."
            </p>
            <cite className="text-sm text-gray-500">- Alex J.</cite>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg text-gray-700">
              "The interactive map is fantastic! It helped us choose the safest beach for our family vacation."
            </p>
            <cite className="text-sm text-gray-500">- Maria K.</cite>
          </blockquote>
        </div>
      </section>

     
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4 animate__animated animate__fadeIn animate__delay-6s">Interactive Beach Map</h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          
          <p className="text-gray-600">Map component coming soon!</p>
        </div>
      </section>

      
      <section className="mt-10 px-4 py-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-7s">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Recent News & Updates</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>New Safety Guidelines:</strong> Updated guidelines for safer beach visits in 2024.</li>
          <li><strong>Upcoming Beach Clean-Up Event:</strong> Join us for a beach clean-up on September 15th.</li>
          <li><strong>Weather Alert System Upgrade:</strong> Enhanced weather alert system for better accuracy.</li>
        </ul>
      </section>

      
      <section className="mt-10 text-center animate__animated animate__fadeIn animate__delay-8s">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Get Involved!</h2>
        <p className="text-lg text-gray-700 mb-6">Join our community to stay updated on ocean conditions and contribute to coastal safety.</p>
        <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Sign Up Now</a>
      </section>
    </div>
  );
};

export default Home;
