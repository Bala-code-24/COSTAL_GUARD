import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './beach.css'; 

import Logo from "../assets/logo.png.png"
import MarinaImage from "../assets/Marina.png";
import JuhuImage from "../assets/Juhu Beach.jpg"
import VarkalaImage from "../assets/varkala.jpeg"
import RadhanagarImage from "../assets/Radhanagar.jpeg";
import BagaImage from "../assets/Baga.jpeg"
import KovalamImage from "../assets/Kovalam.jpeg";
import PuriImage from "../assets/Puri.jpeg";
import BaliapandaImage from "../assets/Baliapanda.jpeg";
import GokarnaImage from "../assets/Gokarna.jpeg";
import MandremImage from "../assets/Mandrem.jpeg"
import AnjunaImage from "../assets/Anjuna.jpeg";
import ColvaImage from "../assets/Colva.jpeg";
import PalolemImage from "../assets/Palolem.jpeg";
import OmImage from "../assets/Om.jpeg";
import JamporeImage from "../assets/Jampore.jpeg";
import KalkudahImage from "../assets/Kalkudah.jpeg";
import CheraiImage from "../assets/Cherai.jpeg";
import AlappuzhaImage from "../assets/Alappuzha.jpeg";
import DighaImage from "../assets/Digha.jpeg";



const getIcon = (safetyStatus) => {
  const iconColor = {
    Safe: "#28a745",     
    Moderate: "#ffc107", 
    Unsafe: "#dc3545",   
  }[safetyStatus];

  return L.divIcon({
    html: `<div style="background-color: ${iconColor}; width: 20px; height: 20px; border-radius: 50%;"></div>`,
    className: '',
  });
}


const beachData = [
  {
    name: "Marina Beach",
    ocean: "Bay of Bengal",
    safetyStatus: "Safe",
    cleanliness: "Moderate",
    windSpeed: "12 km/h",
    temperature: "30°C",
    image: MarinaImage,  
    lat: 13.0475,
    lng: 80.2822,
  },
  {
    name: "Juhu Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Unsafe",
    cleanliness: "Poor",
    windSpeed: "15 km/h",
    temperature: "32°C",
    image: JuhuImage, 
    lat: 19.0887,
    lng: 72.8261,
  },
  {
    name: "Varkala Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Excellent",
    windSpeed: "8 km/h",
    temperature: "28°C",
    image: VarkalaImage,
    lat: 8.7379,
    lng: 76.6983,
  },
  {
    name: "Radhanagar Beach",
    ocean: "Indian Ocean",
    safetyStatus: "Safe",
    cleanliness: "Excellent",
    windSpeed: "10 km/h",
    temperature: "29°C",
    image: RadhanagarImage,
    lat: 11.6727,
    lng: 92.7385,
  },
  {
    name: "Baga Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Moderate",
    cleanliness: "Good",
    windSpeed: "14 km/h",
    temperature: "31°C",
    image: BagaImage,
    lat: 15.5529,
    lng: 73.7517,
  },
  {
    name: "Kovalam Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "11 km/h",
    temperature: "27°C",
    image: KovalamImage,
    lat: 8.3954,
    lng: 76.9784,
  },
  {
    name: "Puri Beach",
    ocean: "Bay of Bengal",
    safetyStatus: "Unsafe",
    cleanliness: "Moderate",
    windSpeed: "13 km/h",
    temperature: "33°C",
    image: PuriImage,
    lat: 19.7983,
    lng: 85.8249,
  },
  {
    name: "Baliapanda Beach",
    ocean: "Bay of Bengal",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "12 km/h",
    temperature: "30°C",
    image: BaliapandaImage,
    lat: 19.8234,
    lng: 85.8320,
  },
  {
    name: "Gokarna Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Excellent",
    windSpeed: "9 km/h",
    temperature: "29°C",
    image: GokarnaImage,
    lat: 14.5654,
    lng: 74.3295,
  },
  {
    name: "Mandrem Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Moderate",
    cleanliness: "Good",
    windSpeed: "10 km/h",
    temperature: "28°C",
    image: MandremImage,
    lat: 15.6246,
    lng: 73.7572,
  },
  {
    name: "Anjuna Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "14 km/h",
    temperature: "30°C",
    image: AnjunaImage,
    lat: 15.5525,
    lng: 73.7820,
  },
  {
    name: "Colva Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "10 km/h",
    temperature: "29°C",
    image: ColvaImage,
    lat: 15.2821,
    lng: 73.9974,
  },
  {
    name: "Palolem Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Excellent",
    windSpeed: "11 km/h",
    temperature: "28°C",
    image: PalolemImage,
    lat: 15.0033,
    lng: 74.0485,
  },
  {
    name: "Om Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "12 km/h",
    temperature: "30°C",
    image: OmImage,
    lat: 14.5860,
    lng: 74.3317,
  },
  {
    name: "Jampore Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "14 km/h",
    temperature: "29°C",
    image: JamporeImage,
    lat: 20.4028,
    lng: 72.9321,
  },
  {
    name: "Kalkudah Beach",
    ocean: "Bay of Bengal",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "11 km/h",
    temperature: "30°C",
    image: KalkudahImage,
    lat: 8.8312,
    lng: 81.6828,
  },
  {
    name: "Cherai Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Good",
    windSpeed: "13 km/h",
    temperature: "27°C",
    image: CheraiImage,
    lat: 10.1157,
    lng: 76.1995,
  },
  {
    name: "Alappuzha Beach",
    ocean: "Arabian Sea",
    safetyStatus: "Safe",
    cleanliness: "Moderate",
    windSpeed: "12 km/h",
    temperature: "28°C",
    image: AlappuzhaImage,
    lat: 9.4980,
    lng: 76.3388,
  },

  {
    name: "Digha Beach",
    ocean: "Bay of Bengal",
    safetyStatus: "Moderate",
    cleanliness: "Good",
    windSpeed: "13 km/h",
    temperature: "29°C",
    image: DighaImage,
    lat: 21.6278,
    lng: 87.5206,
  }
]

const cleanlinessBadge = (cleanliness) => {
  switch (cleanliness) {
    case "Excellent":
      return "bg-green-100 text-green-800";
    case "Good":
      return "bg-blue-100 text-blue-800";
    case "Moderate":
      return "bg-yellow-100 text-yellow-800";
    case "Poor":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

const Beaches = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
    <div className="flex items-center justify-center mb-6">
      <img src={Logo} alt="Coastal Guard Logo" className="h-20 w-20 mr-4" />
      <h1 className="text-4xl font-bold text-center text-blue-900">Coastal Guard</h1>
    </div>

    
    <MapContainer center={[20.5937, 78.9629]} zoom={5} className="h-[70vh] rounded-xl shadow-lg overflow-hidden border-4 border-blue-200">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {beachData.map((beach) => (
        <Marker
          key={beach.name}
          position={[beach.lat, beach.lng]}
          icon={getIcon(beach.safetyStatus)}
        >
          <Popup className="bg-white rounded-lg shadow-lg p-4 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{beach.name}</h4>
            <img src={beach.image} alt={beach.name} className="w-full h-32 object-cover mb-2 rounded-lg" />
            <p className="text-gray-700"><strong>Ocean:</strong> {beach.ocean}</p>
            <p className="text-gray-700"><strong>Safety Status:</strong> <span className={`${cleanlinessBadge(beach.cleanliness)} px-2 py-1 rounded-full`}>{beach.safetyStatus}</span></p>
            <p className="text-gray-700"><strong>Cleanliness:</strong> <span className={`${cleanlinessBadge(beach.cleanliness)} px-2 py-1 rounded-full`}>{beach.cleanliness}</span></p>
            <p className="text-gray-700"><strong>Wind Speed:</strong> {beach.windSpeed}</p>
            <p className="text-gray-700"><strong>Temperature:</strong> {beach.temperature}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);

export default Beaches;